import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {books.map((book) => (
        <BookCard key={book.code} book={book} />
      ))}
    </div>
  );
}