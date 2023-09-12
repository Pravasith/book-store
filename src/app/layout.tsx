import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlazeSoft App",
  description: "Book store - Manage your books",
};

interface Props {
  children: React.ReactNode;
  books: React.ReactNode;
}

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Nav />

          {props.books}
        </main>
      </body>
    </html>
  );
}
