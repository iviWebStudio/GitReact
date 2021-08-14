import { Switch, Route, useParams, useRouteMatch } from "react-router-dom";
import Repo from "./repo";

import Default from "./home";
function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return <Repo path={topicId} />;
}

function Dashboard() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <Default />
      </Route>
      <Route path={`${path}/:topicId`}>
        <Topic />
      </Route>
    </Switch>
  );
}

export default () => {
  return <Dashboard />;
};
