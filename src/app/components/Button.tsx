import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...attributes }: Props) {
  const className = attributes.className;
  delete attributes.className;

  return (
    <button
      type="button"
      className={`
        border border-white px-4 py-2 rounded-3xl text-sm
        focus:bg-gray-500 
        hover:bg-theme-blue transition-colors

        ${className} 
      `}
      {...attributes}
    >
      {children}
    </button>
  );
}
