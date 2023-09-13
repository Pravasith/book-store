"use client";

import { FormEvent } from "react";
import Button from "./Button";
import { useForm } from "../hooks/useForm";
import Icon from "./Icon";
import { BookType } from "../types";

interface FormFields extends BookType {}

interface Props {
  initialValues: FormFields;
  finalValues: (values: FormFields) => void;
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

    if (Object.values(values).every((val) => !!val)) props.finalValues(values);
    else alert("Please fill in all the fields");
  };

  return (
    <div className="w-screen h-screen top-0 left-0 fixed backdrop-blur">
      <div className="flex-col-center w-full h-full">
        <div className="relative">
          <Button className="w-fit absolute left-1/2 -translate-x-1/2 -top-16 cursor-pointer">
            <Icon name="CLOSE" />
          </Button>

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
                      placeholder={"Enter " + inputField}
                      name={inputField}
                      // i'd code a better logic but since this is a small app :)
                      type={inputField === "price" ? "number" : "text"}
                      defaultValue={
                        props.initialValues[inputField] ?? undefined
                      }
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
