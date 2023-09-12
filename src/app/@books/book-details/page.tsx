"use client";

import Modal from "@/app/components/Modal";
import Link from "next/link";

const BookDetails = () => {
  const initialValues = {
    title: "Lyraeil",
    description: "Lyraeil",
    price: 20,
    category: "Lyraeil",
  };

  return (
    <>
      <Link href={"/"}>GO BACK TO HOME</Link>

      <Modal initialValues={initialValues} />
    </>
  );
};

export default BookDetails;
