import type { ReactNode } from "react";

type IFormProps = {
  children: ReactNode;
  className?: string;
};

const Form = (props: IFormProps) => (
  <form className={props.className} >{props.children}</form>
);

export { Form };
