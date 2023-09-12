import BookList from "../components/BookList";

interface Props {
  children: React.ReactNode;
}

// app/@books/layout.tsx
const BooksLayout = (props: Props) => {
  return (
    <>
      {props.children}
      <BookList />
    </>
  );
};

export default BooksLayout;
