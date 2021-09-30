import { useState, ChangeEvent, FormEvent } from "react";
import Layout from "../template/Layout";
import NavBar from "../ui/molecules/NavBar";
import Results from "../ui/organisms/Results";
import { InputField } from "../styles/Input.styles";
import countriesApi from "../../api/countriesApi";
import { H1 } from "../styles/Texts.styles";
// import { Loader } from "../styles/Loader.styles";

const Home = () => {
  const [term, setTerm] = useState("");
  const [result, setResult] = useState([]);
  const [currency, setCurrency] = useState(1);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  const token = localStorage.getItem("loginToken");

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await countriesApi.get(`/country/${term}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(data.payload);

    setResult(data.payload);
  };

  return (
    <Layout>
      <NavBar />
      {/* <Loader /> */}
      <H1 style={{ color: "#aaa69d" }}>Countries</H1>
      <form onSubmit={submitHandler}>
        <InputField
          onChange={inputHandler}
          value={term}
          placeholder="search countries"
        />
      </form>
      <div>
        <Results result={result} term={term} />
      </div>
    </Layout>
  );
};

export default Home;
