import Link from "next/link";

// app/@books/page.tsx
export default function Books() {
  return (
    <>
      <h1>----- BOOK HOME -----</h1>
      <Link href={"/book-details"}>GO TO BOOK DETAILS</Link>
    </>
  );
}
