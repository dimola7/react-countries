import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

const Routes = () => {
  return (
    <Router>
      {publicRoutes.map((route) => (
        <Switch key={route.path}>
          <Route
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        </Switch>
      ))}
    </Router>
  );
};

export default Routes;
