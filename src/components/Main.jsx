import Pagination from "./Pagination";
import Cards from "./Cards";
import { useGlobal } from "../context/GlobalContext";
const Main = () => {
  const { isDark, setIsDark, countriesData, currentArray, page } = useGlobal();
  const handleMode = () => {
    setIsDark(!isDark);
    isDark
      ? (document.body.style.backgroundColor = "rgb(30, 46, 77)")
      : (document.body.style.backgroundColor = "rgb(170, 222, 231)");
    isDark
      ? (document.querySelector(".header").style.color = "yellow")
      : (document.querySelector(".header").style.color = "rgb(30, 46, 77)");
  };
  return (
    <main>
      <h1 className="header">WORLD COUNTRIES WITH REST API</h1>
      <button
        onClick={handleMode}
        className={isDark ? " btn btn-primary" : "btn btn-warning"}
      >
        {isDark ? "Dark mode" : "Light mode"}
      </button>
      <Pagination />
      <h4 className="total">
        {currentArray.length * page} / {countriesData.length} countries
      </h4>
      <Cards />
    </main>
  );
};

export default Main;
