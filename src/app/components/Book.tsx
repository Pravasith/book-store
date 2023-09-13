import { BookType } from "../types";
import Button from "./Button";
import Icon from "./Icon";
import Tag from "./Tag";

interface Props extends BookType {
  deleteBook: (uuid: string) => void;
  editBook: (uuid: string) => void;
}

const Book = (props: Props) => {
  return (
    <li
      onClick={() => {
        props.editBook(props.uuid?.toString() || "");
      }}
      className="mx-10 p-8 border-white rounded-3xl border flex flex-col gap-y-2 hover:bg-gray-800 active:bg-gray-900 cursor-pointer transition-colors"
    >
      <div className="flex justify-between items-center">
        <h4>{props.title}</h4>

        <Button
          onClick={(e) => {
            e.stopPropagation();
            props.deleteBook(props.uuid?.toString() || "");
          }}
          className="w-fit ml-8"
        >
          <Icon name="DELETE" />
        </Button>
      </div>

      <p className="w-2/3">{props.description}</p>

      <div className="flex-row-west gap-x-4 mt-4">
        <p>$ {props.price}</p>
        <Tag content={props.category} />
      </div>
    </li>
  );
};

export default Book;
