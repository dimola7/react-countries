import Cards from "../molecules/Cards";
import CurrencyConverter from "../molecules/CurrencyConverter";
import { CardContainer } from "../../styles/Containers.styles";
import { H2 } from "../../styles/Texts.styles";

interface SearchProps {
  result: string[];
  term: string;
}

const Results: React.FC<SearchProps> = (props: any) => {
  console.log(props);
  return (
    <CardContainer>
      {props.result.length > 0 ? (
        props.result.map((country: any) => (
          <Cards key={country.shortName}>
            <H2>{country.name}</H2>
            <hr />
            <p>Capital city: {country.capital}</p>
            <p>Population: {Math.floor(Math.random() * 10000000)}</p>
            <p>Currency: {country.currency}</p>
            <h3>Currency Converter</h3>
            <hr />
            <CurrencyConverter />
          </Cards>
        ))
      ) : (
        <div style={{ height: "20px", color: "black" }}>
          Search for countries
        </div>
      )}
    </CardContainer>
  );
};

export default Results;
