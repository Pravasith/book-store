import Book from "./Book";
import { AppDispatch, useAppSelector } from "../redux/store";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { deleteBook, editBook } from "../redux/slices";

const BookList = () => {
  const books = useAppSelector((state) => state.booksReducer.value.books);
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();

  const addBookHandler = () => {
    router.push("/book-details");
  };

  const deleteBookHandler = (uuid: string) => {
    dispatch(deleteBook(uuid));
  };
  const editBookHandler = (uuid: string) => {
    dispatch(editBook(uuid));
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
              editBook={editBookHandler}
              deleteBook={deleteBookHandler}
              key={"book-" + i}
              uuid={book.uuid}
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
