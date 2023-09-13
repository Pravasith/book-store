import { BookType } from "../types";
import Button from "./Button";
import Icon from "./Icon";
import Tag from "./Tag";

interface Props extends BookType {}

const Book = (book: Props) => {
  return (
    <li className="mx-10 p-8 border-white rounded-3xl border flex flex-col gap-y-2 hover:bg-gray-800 active:bg-gray-900 cursor-pointer transition-colors">
      <div className="flex justify-between items-center">
        <h4>{book.title}</h4>

        <Button className="w-fit ml-8">
          <Icon name="DELETE" />
        </Button>
      </div>

      <p className="w-2/3">{book.description}</p>

      <div className="flex-row-west gap-x-4 mt-4">
        <p>$ {book.price}</p>
        <Tag content={book.category} />
      </div>
    </li>
  );
};

export default Book;
