import { useGlobal } from "../context/GlobalContext";
import Card from "./Card";
const Cards = () => {
  const { currentArray } = useGlobal();

  return (
    <main>
      <div className="container">
        <div className="row">
          {currentArray.map((country) => (
            <Card country={country} key={country.population} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Cards;
