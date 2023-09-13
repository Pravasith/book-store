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
    addBook: (state, action: PayloadAction<BookType>) => {
      const data = state.value.books;
      // I know unshift is a slowww operation in JS
      // makes me sick but I wanna finish this app soon lol
      data.unshift(action.payload);

      return {
        value: {
          books: data,
        },
      };
    },

    editBook: () => {
      return initialState;
    },
    deleteBook: () => {
      return initialState;
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;
