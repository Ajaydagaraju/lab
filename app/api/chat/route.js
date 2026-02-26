// serverless endpoint for AI responses

// Support for OpenAI or Google Gemini (via PaLM REST API).
// Set either OPENAI_API_KEY or GEMINI_API_KEY in your environment. If both
// are present, OpenAI will take precedence.

async function callOpenAI(apiMessages) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: apiMessages,
    }),
  });
  const data = await res.json();
  return (
    data?.choices?.[0]?.message?.content ||
    "(OpenAI returned an empty response.)"
  );
}

async function callGemini(messages) {
  // simple concatenation of the conversation into one prompt;
  // you can make this fancier if you want a structured conversation.
  const promptText = messages.map((m) => `${m.from}: ${m.text}`).join("\n");

  const url =
    "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generate";

  const res = await fetch(`${url}?key=${process.env.GEMINI_API_KEY}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt: { text: promptText },
      temperature: 0.7,
    }),
  });

  const data = await res.json();
  // the field name may vary depending on the API version; adapt if necessary
  return data?.output?.[0]?.content || data?.candidates?.[0]?.output ||
    "(Gemini returned an empty response.)";
}

export async function POST(req) {
  try {
    const { messages } = await req.json();

    // convert internal message format to OpenAI role format if using OpenAI
    const apiMessages = messages.map((m) => ({
      role: m.from === "user" ? "user" : "assistant",
      content: m.text,
    }));

    let text;

    if (process.env.OPENAI_API_KEY) {
      text = await callOpenAI(apiMessages);
    } else if (process.env.GEMINI_API_KEY) {
      text = await callGemini(messages);
    } else {
      text =
        "No API key provided – set OPENAI_API_KEY or GEMINI_API_KEY in your environment.";
    }

    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
    console.error("/api/chat error", error);
    // send user-friendly message back to client as well
    return new Response(
      JSON.stringify({
        text: "Oops, something went wrong while contacting the AI service.",
        error: error.message || "Unknown error",
      }),
      { status: 500 }
    );
  }
}