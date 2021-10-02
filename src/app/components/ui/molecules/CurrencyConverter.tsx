import { useState, ChangeEvent } from "react";
import countriesApi from "../../../api/countriesApi";
import "./currencyConverter.css";

interface CurrencyProps {
  currency: string;
}

const CurrencyConverter: React.FC<CurrencyProps> = (props: any) => {
  const [currency, setCurrency] = useState("0");
  const [conversion, setConversion] = useState(0);

  const token = localStorage.getItem("loginToken");
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const currencyData = {
    code: props.currency,
    convertToCode: "NGN",
  };

  const convertCurrency = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);

    setCurrency(e.target.value);
    const { data } = await countriesApi.post(
      `/country/convertcurrency`,
      {
        ...currencyData,
        amount: !e.target.value ? 0 : parseInt(e.target.value),
      },
      config
    );
    setConversion(data.conversion);
  };
  return (
    <div>
      <div className="converter-div">
        <div className="input-div">
          <p>NGN</p>
          <input
            value={currency}
            type="number"
            min="0"
            onChange={convertCurrency}
          />
        </div>
        <div className="conversion">
          <p>{props.currency}</p>
          <div>{conversion.toFixed(3).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
