import books from "../lib";
import Book from "./Book";

const BookList = () => {
  return (
    <section className="flex justify-between my-8 mx-[20vh]">
      <ul className="flex flex-col gap-y-2">
        {books.map((book) => {
          return (
            <Book
              key={book.isbn}
              title={book.title}
              description={book.description}
              price={book.price}
              category={book.category}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default BookList;
