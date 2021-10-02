import Cards from "../molecules/Cards";
import CurrencyConverter from "../molecules/CurrencyConverter";
import { CardContainer } from "../../styles/Containers.styles";
import { H2 } from "../../styles/Texts.styles";

interface SearchProps {
  result: string[];
  term: string;
}

const Results: React.FC<SearchProps> = (props: any) => {
  return (
    <CardContainer>
      {props.result.length > 0 ? (
        props.result.map((country: any) => (
          <Cards key={country.shortName}>
            <H2>
              {country.emoji} {country.name}
            </H2>
            <hr />
            <p>Capital city: {country.capital}</p>
            <p>Population: {Math.floor(Math.random() * 10000000)}</p>
            <p>Currency: {country.currency}</p>
            <h3>Currency Converter</h3>
            <hr />
            <CurrencyConverter currency={country.currency} />
          </Cards>
        ))
      ) : (
        <h1 style={{ height: "20px", color: "#fff" }}>No results found</h1>
      )}
    </CardContainer>
  );
};

export default Results;
