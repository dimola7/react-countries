import { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
import countriesApi from "../../api/countriesApi";
import Layout from "../template/Layout";

import { InputField } from "../styles/Input.styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await countriesApi.post(`/auth/login`, {
      email: email,
    });
    console.log(data.token);
    localStorage.setItem("loginToken", data.token);
    history.replace("/home");
  };

  return (
    <Layout>
      <div>
        <form onSubmit={submitHandler}>
          <InputField value={email} onChange={emailHandler} type="email" />
        </form>
      </div>
    </Layout>
  );
};

export default Login;
