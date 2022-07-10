import "./styles.css";

import Main from "./components/Main";

import { useGlobal } from "./context/GlobalContext";

export default function App() {
  const { isRefreshing } = useGlobal();
  return <div className="App">{isRefreshing ? "Loading..." : <Main />}</div>;
}
