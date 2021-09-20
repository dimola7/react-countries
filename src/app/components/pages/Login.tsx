import { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";
import countriesApi from "../../api/countriesApi";
// import Layout from "../template/Layout";
import Form from "../ui/molecules/Form";
import { LoginContainer, LeftGrid } from "../styles/Login.styles";
import { InputField } from "../styles/Input.styles";
import { Button } from "../styles/Buttons.styles";
import earth from "../assets/img/earth.svg";
import { Img } from "../styles/Image.styles";
import { H1 } from "../styles/Texts.styles";

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
      <LeftGrid>fool</LeftGrid>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Img src={earth} alt="" width="200px" />
        <H1 style={{ color: "#aaa69d" }}>Countries</H1>
        <Form onSubmit={submitHandler}>
          <label style={{ fontSize: "18px", color: "#aaa69d" }}>Email</label>
          <InputField
            value={email}
            onChange={emailHandler}
            type="email"
            placeholder="Email address"
          />
          <Button>Sign in</Button>
        </Form>
      </div>
    </LoginContainer>
    // </Layout>
  );
};

export default Login;
