import { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
import countriesApi from "../../api/countriesApi";
import Layout from "../template/Layout";
import Form from "../ui/molecules/Form";
import { LoginContainer } from "../styles/Login.styles";
import { InputField } from "../styles/Input.styles";
import { Button } from "../styles/Buttons.styles";

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
    // <Layout>
    <LoginContainer>
      <Form onSubmit={submitHandler}>
        <InputField value={email} onChange={emailHandler} type="email" />
        <Button>Sign in</Button>
      </Form>
    </LoginContainer>
    // </Layout>
  );
};

export default Login;
