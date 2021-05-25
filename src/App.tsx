import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from "./App.style";
import Categories from "../src/components/categories";
import Cats from "../src/components/cats";

function App() {
  return (
    <Router>
      <Layout>
        <Categories />
      <Switch>
        <Route path="/cats/:id" children={<Cats />}/>
      </Switch>
      </Layout>
      
    </Router>
  );
}

export default App;
