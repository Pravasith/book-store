"use client";

import BookList from "../components/BookList";
import { BooksProvider } from "../redux/provider";

interface Props {
  children: React.ReactNode;
}

// Using a Custom layout because Next 13's
// layout causes weird bugs when used with Slots (@folder type)
// see - https://github.com/vercel/next.js/issues/52726
const BooksLayout = (props: Props) => {
  return (
    <BooksProvider>
      {props.children}
      <BookList />
    </BooksProvider>
  );
};

export default BooksLayout;
