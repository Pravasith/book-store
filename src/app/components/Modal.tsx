"use client";

import { FormEvent } from "react";
import Button from "./Button";
import { useForm } from "../hooks/useForm";

type FormFields = {
  title: string;
  description: string;
  price: number;
  category: string;
};

interface Props {
  initialValues: FormFields;
  modalTitle: string;
}

const Modal = (props: Props) => {
  const { values, handler } = useForm<FormFields>(props.initialValues);

  const inputFieldNames: (keyof FormFields)[] = [
    "title",
    "description",
    "price",
    "category",
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="w-screen h-screen top-0 left-0 fixed backdrop-blur">
      <div className="flex-col-center w-full h-full">
        <div className="relative">
          <div className="absolute -right-4 -top-4 cursor-pointer">X</div>

          <div className="p-4 border-white bg-gray-700/50 rounded-3xl border-2">
            <div className="flex-row-center w-full mb-8 mt-2">
              <h2>{props.modalTitle}</h2>
            </div>

            <form
              className="flex-col-west gap-y-4 min-w-[30vw] m-4"
              method="post"
              onSubmit={handleSubmit}
            >
              {inputFieldNames.map((inputField, i) => {
                return (
                  <label
                    className="flex-row justify-between flex w-full"
                    key={"label-" + i}
                  >
                    {inputField}

                    <input
                      className="ml-5"
                      name={inputField}
                      type={
                        typeof props.initialValues[inputField] === "number"
                          ? "number"
                          : "text"
                      }
                      defaultValue={props.initialValues[inputField]}
                      onChange={handler}
                    />
                  </label>
                );
              })}

              <div className="flex-row-center w-full mt-4">
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
