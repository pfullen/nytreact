import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Articles from "./pages/Home";

import Nav from "./components/Nav";

const App = () =>
  <Router>
    <div>
    <Nav id="header">     
     </Nav>
    </div>
  </Router>;

export default App;
