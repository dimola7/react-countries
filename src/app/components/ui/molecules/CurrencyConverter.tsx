import countriesApi from "../../../api/countriesApi";

const CurrencyConverter = () => {
  const token = localStorage.getItem("loginToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const convertCurrency = async () => {
    const { data } = await countriesApi.post(
      `/country/convertcurrency`,
      config
      //   {
      //     convertToCode: "NGN",
      //   }
    );
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={convertCurrency}>
        <input type="number" />
        <input disabled onChange={() => {}} />
      </form>
    </div>
  );
};

export default CurrencyConverter;
