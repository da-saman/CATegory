import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout } from "./App.style";
import Categories from "../src/components/categories";
import Cats from "../src/components/cats";

function App() {
  return (
    <Router>
      <Categories />
      <Switch>
        <Route path="/cats">
          <Cats />
        </Route>
      </Switch>
      {/* <Cats /> */}
    </Router>
  );
}

export default App;
