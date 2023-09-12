import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};

type AuthState = {
  name: string;
  uid: string;
};

const initialState = {
  value: {
    name: "lyreai",
    uid: "",
  },
};

export const editBooks = createSlice({
  name: "edit",
  initialState,
  reducers: {
    editBooks: () => {
      return initialState;
    },
  },
});
