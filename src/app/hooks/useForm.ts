import { ChangeEvent, useState } from "react";

// My custom hook for handling input forms
export const useForm = <T>(initialValue: T) => {
  const [values, setValues] = useState<T>(initialValue);

  return {
    values,
    handler: (e: ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    },
  };
};
