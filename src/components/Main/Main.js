import React from "react";
import { Switch, Route } from "react-router-dom";
import "./styles";
import routes from "../../routes";

const Main = () => {
  return (
    <div>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Main;
