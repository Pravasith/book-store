import BookList from "../components/BookList";
import { BooksProvider } from "../redux/provider";

interface Props {
  children: React.ReactNode;
}

const BooksLayout = (props: Props) => {
  return (
    <BooksProvider>
      {props.children}

      <BookList />
    </BooksProvider>
  );
};

export default BooksLayout;
