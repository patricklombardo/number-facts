import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./App.scss";
import { NumberFactPage } from "./pages/NumberFactPage";
import { EnterNumberPage } from "./pages/EnterNumberPage";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={EnterNumberPage} />
      <Route exact path="/fact" component={NumberFactPage} />
    </div>
  );
}

export default App;
