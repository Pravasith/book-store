import { BookType } from "../types";
import Tag from "./Tag";

interface Props extends BookType {}

const Book = (book: Props) => {
  return (
    <li className="mx-10 p-8 border-white rounded-3xl border flex flex-col gap-y-2 hover:bg-gray-800 active:bg-gray-900 cursor-pointer transition-colors">
      <h4>{book.title}</h4>
      <p>{book.description}</p>

      <div className="flex-row-west gap-x-4 mt-2">
        <p>$ {book.price}</p>
        <Tag content={book.category} />
      </div>
    </li>
  );
};

export default Book;
