"use client";

import Modal from "@/app/components/Modal";
import BooksLayout from "../CustomLayout";

const BookDetails = () => {
  const initialValues = {
    title: "Lyraeil",
    description: "Lyraeil",
    price: 20,
    category: "Lyraeil",
  };

  return (
    <BooksLayout>
      <Modal modalTitle={"Edit Book"} initialValues={initialValues} />
    </BooksLayout>
  );
};

export default BookDetails;
