import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import books from "@/app/lib";
import { BookType } from "@/app/types";
import { worldsStupidestUuidGenerator } from "../utils";

type InitialState = {
  value: {
    books: BookType[];
    activeBook: null | BookType;
  };
};

const initialState: InitialState = {
  value: {
    books,
    activeBook: null,
  },
};

export const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookType>) => {
      const newBook = action.payload;
      newBook.uuid = worldsStupidestUuidGenerator();

      return {
        value: {
          // I know spread is a slowww operation in JS
          // makes me sick but I wanna finish this app soon lol
          books: [newBook, ...state.value.books],
          activeBook: null,
        },
      };
    },

    editBook: (state, action: PayloadAction<string>) => {
      const activeBook = state.value.books.find((book) => {
        return book.uuid === action.payload;
      });

      return {
        value: {
          ...state.value,
          activeBook: activeBook ? activeBook : null,
        },
      };
    },

    updateBook: (state, action: PayloadAction<BookType>) => {
      const books: BookType[] = [];
      if (state.value.activeBook) {
        const currentBookUuid = state.value.activeBook.uuid;

        state.value.books.forEach((book) => {
          const newBook = { ...book };

          if (book.uuid === currentBookUuid) {
            newBook.title = action.payload.title;
            newBook.description = action.payload.description;
            newBook.price = action.payload.price;
            newBook.category = action.payload.category;
          }

          books.push(newBook);
        });
      } else throw new Error("There is no Active book");

      return {
        value: {
          books,
          activeBook: null,
        },
      };
    },

    deleteBook: (state, action: PayloadAction<string>) => {
      const books: BookType[] = [];

      state.value.books.forEach((book) => {
        if (book.uuid !== action.payload) {
          books.push({ ...book });
        }
      });

      return {
        value: {
          books,
          activeBook: null,
        },
      };
    },
  },
});

export const { addBook, deleteBook, updateBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;
