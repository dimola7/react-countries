import { useEffect } from "react";
// import { useEffect, useState, ChangeEvent } from "react";
import Layout from "../template/Layout";
import NavBar from "../ui/molecules/NavBar";
import Results from "../ui/organisms/Results";
import Input from "../ui/atoms/inputs/Input";
import countriesApi from "../../api/countriesApi";
import { H1 } from "../styles/Texts.styles";

const Home = () => {
  //   const [term, setTerm] = useState("");

  //   const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //     setTerm(e.target.value);
  //     console.log(e.target.value);
  //   };

  useEffect(() => {
    const token = localStorage.getItem("loginToken");
    console.log("token is", token);
    const test = async () => {
      const data = await countriesApi.get(`/country/ghana`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data);
    };
    test();
  }, []);

  return (
    <Layout>
      <NavBar />
      <H1 style={{ color: "#aaa69d" }}>Countries</H1>
      <Input />
      <div>
        <Results />
      </div>
    </Layout>
  );
};

export default Home;
