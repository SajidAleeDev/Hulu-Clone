import "./CssFiles/App.css";
import Header from "./Componenet/Header";
import Nav from "./Componenet/Nav";
import Result from "./Componenet/Result";
import { useState } from "react";
import Request from "./Request";

function App() {
  const [Selectedoption, setSelectedoption] = useState(Request.fetchTrending);
  return (
    <div className="app">
      <Header />

      <Nav setSelectedoption={setSelectedoption} />
      <Result Selectedoption={Selectedoption} />
    </div>
  );
}

export default App;
