import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import books from "@/app/lib";
import { BookType } from "@/app/types";

type InitialState = {
  value: { books: BookType[] };
};

const initialState: InitialState = {
  value: {
    books,
  },
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: () => {
      return initialState;
    },
    editBook: () => {
      return initialState;
    },
    deleteBook: () => {
      return initialState;
    },
  },
});
