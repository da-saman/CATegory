import React from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout } from "./index.style";
import CategoryLinks from "../categoryLinks";
import Cats from "../cats";

function Router() {
  return (
    <ReactRouter>
      <Layout>
        <CategoryLinks />
        <Switch>
          <Route path="/cats/:id" children={<Cats />} />
          <Route path="/404" component={() => <p>Not Found</p>} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </ReactRouter>
  );
}

export default Router;

// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
