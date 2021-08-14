import { useRouteMatch } from "react-router-dom";
import { routes } from "../../../routes";

const Pupu = () => {
  let { path } = useRouteMatch();
  let find = routes.filter((el) => {
    return el.path === path;
  });
  console.log(find && find[0] ? find[0]?.xashik : "");

  return (
    <div className="col-md-8">
      <div>Explore</div>
    </div>
  );
};

export default () => {
  return (
    <div>
      <Pupu />
    </div>
  );
};
