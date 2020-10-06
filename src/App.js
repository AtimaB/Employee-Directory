import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import Tables from "./components/Tables";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Wrapper>
        <Header />
        <SearchPage />
        <Tables />
      </Wrapper>
    </div>
  );
}

export default App;
