"use client";

import Modal from "@/app/components/Modal";
import BooksLayout from "../CustomLayout";
import { AppDispatch, useAppSelector } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { addBook } from "@/app/redux/slices";

const BookDetails = () => {
  const { activeBook } = useAppSelector((state) => state.booksReducer.value);
  // const dispatch = useDispatch<AppDispatch>(addBook(addedBook));

  const initialValues = {
    title: activeBook?.title ?? "",
    description: activeBook?.description ?? "",
    price: activeBook?.price ?? null,
    category: activeBook?.category ?? "",
  };

  return (
    <Modal
      modalTitle={activeBook ? "Edit Book" : "Add a book"}
      initialValues={initialValues}
      finalValues={() => {}}
    />
  );
};

export default function BookDetailsWrapper() {
  return (
    <BooksLayout>
      <BookDetails />
    </BooksLayout>
  );
}
