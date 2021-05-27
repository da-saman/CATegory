import React, { Suspense } from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Layout } from "./index.style";

const Cats = React.lazy(() => import("../cats"));
const CategoryLinks = React.lazy(() => import("../categoryLinks"));
const EmptyCats = React.lazy(() => import("../emptyCats"));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReactRouter>
        <Layout>
          <CategoryLinks />
          <Switch>
            <Route path="/cats/:id" children={<Cats />} />
            <Route path="/" children={<EmptyCats />} />
            <Route path="/404" component={() => <p>Not Found</p>} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </ReactRouter>
    </Suspense>
  );
}

export default Router;
