import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Index from "./pages/Index";
import Headers from "./components/Headers";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Headers />
        <Wrapper>
          <Route exact path="/" component={Index} />
          <Footer />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
