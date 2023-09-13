"use client";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/Modal";
import BooksLayout from "../CustomLayout";
import { AppDispatch, useAppSelector } from "@/app/redux/store";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "@/app/redux/slices";
import { BookType } from "@/app/types";

const BookDetails = () => {
  const { activeBook } = useAppSelector((state) => state.booksReducer.value);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const initialValues = {
    title: activeBook?.title ?? "",
    description: activeBook?.description ?? "",
    price: activeBook?.price ?? null,
    category: activeBook?.category ?? "",
  };

  const updateState = (book: BookType) => {
    if (!activeBook) {
      dispatch(addBook(book));
    } else {
      dispatch(updateBook(book));
    }

    handleClose();
  };

  const handleClose = () => {
    router.push("/");
  };

  return (
    <Modal
      handleClose={handleClose}
      modalTitle={activeBook ? "Edit Book" : "Add a book"}
      initialValues={initialValues}
      finalValues={updateState}
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
