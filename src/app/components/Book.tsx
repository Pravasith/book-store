import Tag from "./Tag";

interface Props {
  title: string;
  description: string;
  price: number;
  category: string;
}

const Book = (book: Props) => {
  return (
    <li className="p-4 border-white rounded-lg border-2 flex flex-col gap-y-2">
      <h4>{book.title}</h4>
      <p>{book.description}</p>

      <div className="flex-row-west">
        <p>{book.price}</p>
        <Tag content={book.category} />
      </div>
    </li>
  );
};

export default Book;
