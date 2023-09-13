// import books from "../lib";
import Book from "./Book";
import { useAppSelector } from "../redux/store";

const BookList = () => {
  const books = useAppSelector((state) => state.booksReducer.value.books);

  return (
    <section className="flex justify-between my-8 mx-[20vh]">
      <ul className="flex flex-col gap-y-2">
        {books.map((book, i) => {
          return (
            <Book
              key={book.uuid ?? "book-" + i}
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
