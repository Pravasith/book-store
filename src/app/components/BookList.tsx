// import books from "../lib";
import Book from "./Book";
import { useAppSelector } from "../redux/store";
import Button from "./Button";
import { useRouter } from "next/navigation";

const BookList = () => {
  const books = useAppSelector((state) => state.booksReducer.value.books);
  const router = useRouter();

  const addBookHandler = (e: React.MouseEvent) => {
    router.push("/book-details");
  };

  return (
    <section className="flex-col-center my-8 mx-[20vh]">
      <div className="flex-row-center my-12">
        <Button onClick={addBookHandler}>Add a new Book</Button>
      </div>

      <ul className="flex flex-col gap-y-4">
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
