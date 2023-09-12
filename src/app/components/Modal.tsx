"use client";

import { FormEvent, useEffect } from "react";
import Button from "./Button";
import { useForm } from "../hooks/useForm";

type Label = {
  name: string;
  title: string;
};

type FormFields = {
  title: string;
  description: string;
  price: number;
  category: string;
};

interface Props {
  initialValues: FormFields;
}

const Modal = (props: Props) => {
  const { values, handler } = useForm<FormFields>(props.initialValues);

  const inputData: (keyof FormFields)[] = [
    "title",
    "description",
    "price",
    "category",
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="w-screen h-screen top-0 left-0 fixed backdrop-blur">
      <div className="flex-col-center w-full h-full">
        <div className="bg-theme-gray-300 relative">
          <div className="absolute -right-4 -top-4 cursor-pointer">X</div>

          <div className="p-4 border-white rounded-lg border-2">
            <form
              className="flex-col-west gap-y-4 min-w-[30vw]"
              method="post"
              onSubmit={handleSubmit}
            >
              {inputData.map((label, i) => {
                return (
                  <label key={"label-" + i}>
                    {label}

                    <input
                      className="ml-5"
                      name={label}
                      type="text"
                      defaultValue={props.initialValues[label]}
                      onChange={handler}
                    />
                  </label>
                );
              })}

              <div className="flex gap-x-2">
                <Button type="reset">Reset form</Button>
                <Button type="submit">Submit form</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
