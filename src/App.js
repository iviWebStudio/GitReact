import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import { routes } from "./routes";

import "./styles.scss";

export default () => {
  console.log("routes", routes);
  return (
    <div className="App">
      <Header />
      <div className="AppContainer container">
        <div className="row">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={`sidebar-${index}`}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </Switch>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={`content-${index}`}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
};
