import { ClassAttributes, InputHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

const Checkbox = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <>
      <input {...props} type="checkbox" />
    </>
  );
};

export default Checkbox;
