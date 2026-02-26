"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";
import qaTree from "../data/librarianQA.json"; // static question/answer data

export default function FloatingAIBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your AI assistant. Ask me anything." },
  ]);
  const [loading, setLoading] = useState(false);

  // static QA tree state
  const [useStatic, setUseStatic] = useState(false);
  const [currentNode, setCurrentNode] = useState(null);
  const [history, setHistory] = useState([]);

  // check whether an API key is available on first render
  useEffect(() => {
    async function checkKey() {
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: [] }),
        });
        const data = await res.json();
        if (data.text && data.text.startsWith("No API key")) {
          setUseStatic(true);
        }
      } catch (e) {
        console.error("key check failed", e);
        setUseStatic(true);
      }
    }
    checkKey();
  }, []);

  const sendMessage = async () => {
    if (useStatic) return; // ignore in static mode
    if (!input.trim()) return;

    const userText = input.trim();
    const updated = [...messages, { from: "user", text: userText }];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();

      // if the server returned a text field use it, otherwise fall back
      let botReply = "Sorry, I didn't get that.";
      if (data) {
        if (typeof data.text === "string") {
          botReply = data.text;
          if (botReply.startsWith("No API key")) {
            // switch to static mode on first indication
            setUseStatic(true);
            setCurrentNode(null);
            return;
          }
        } else if (data.error) botReply = `(error) ${data.error}`;
      }

      setMessages((m) => [...m, { from: "bot", text: botReply }]);
    } catch (err) {
      console.error("chat error", err);
      setMessages((m) => [
        ...m,
        { from: "bot", text: "Oops, network error occurred." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-64 sm:w-80 bg-white text-black shadow-lg rounded-lg flex flex-col">
          <div className="p-3 border-b">AI Assistant</div>

          {useStatic ? (
            // static question/answer interface
            <div className="flex-1 p-3 overflow-y-auto">
              {currentNode && (
                <div className="mb-2 text-sm">
                  <strong>Q:</strong> {currentNode.question}
                </div>
              )}
              {currentNode && currentNode.answer && (
                <div className="mb-4 text-sm bg-gray-100 p-2 rounded">
                  <strong>A:</strong> {currentNode.answer}
                </div>
              )}
              <div className="space-y-1">
                {(currentNode ? currentNode.options : qaTree).map((opt, idx) => (
                  <button
                    key={idx}
                    className="w-full text-left text-sm py-1 px-2 bg-blue-50 hover:bg-blue-100 rounded"
                    onClick={() => {
                      setHistory((h) => [...h, currentNode]);
                      setCurrentNode(opt);
                    }}
                  >
                    {opt.question}
                  </button>
                ))}
              </div>
              {history.length > 0 && (
                <button
                  className="mt-2 text-xs text-blue-500 underline"
                  onClick={() => {
                    const prev = history[history.length - 1];
                    setHistory((h) => h.slice(0, -1));
                    setCurrentNode(prev);
                  }}
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            // normal chat UI
            <>
              <div className="flex-1 p-3 overflow-y-auto space-y-2">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`text-sm py-1 px-2 rounded-md max-w-[80%] ${
                      m.from === "user" ? "bg-blue-100 self-end" : "bg-gray-100"
                    }`}
                  >
                    {m.text}
                  </div>
                ))}
                {loading && <div className="text-gray-500 text-sm">Typing...</div>}
              </div>
              <div className="p-2 border-t flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 border rounded-l px-2 py-1"
                  placeholder="Type a message..."
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-3 rounded-r"
                >
                  ➤
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="fixed bottom-6 right-6 z-50 cursor-pointer rounded-full"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="relative w-12 h-12 sm:w-20 sm:h-20 rounded-full shadow-2xl bg-white p-2">
          <Image
            src="/images/bot.jpg"
            alt="AI Assistant"
            fill
            className="object-contain rounded-full"
            priority
          />
        </div>
      </motion.div>
    </>
  );
}