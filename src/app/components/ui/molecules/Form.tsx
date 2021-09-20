import { FormField } from "../../styles/Forms.styles";

const Form = ({ children, onSubmit }: any) => {
  return <FormField onSubmit={onSubmit}>{children}</FormField>;
};

export default Form;
