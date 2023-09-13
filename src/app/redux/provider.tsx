"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: ReactNode;
}

export function BooksProvider(props: Props) {
  return <Provider store={store}>{props.children}</Provider>;
}
