import { useState, ChangeEvent } from "react";
import { InputField } from "../../../styles/Input.styles";

const Input = () => {
  const [term, setTerm] = useState("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
    console.log(e.target.value);
  };
  

  return (
    <div>
      <form>
        <InputField
          value={term}
          onChange={inputHandler}
        />
      </form>
    </div>
  );
};

export default Input;
