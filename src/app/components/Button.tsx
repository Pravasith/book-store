import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...attributes }: Props) {
  return (
    <button
      type="button"
      className="border border-white px-4 py-2 rounded-3xl text-sm"
      {...attributes}
    >
      {children}
    </button>
  );
}
