import { Link, useRouteMatch } from "react-router-dom";
import { ReactComponent as RepoSVG } from "../../../svg/repositories.svg";
import { ReactComponent as ForkSVG } from "../../../svg/fork.svg";

const repos = [
  {
    path: "github_react",
    logo: RepoSVG
  },
  {
    path: "next_example",
    logo: RepoSVG
  },
  {
    path: "wp_rest",
    logo: RepoSVG
  },
  {
    path: "charts",
    logo: ForkSVG
  },
  {
    path: "mdbootstrap",
    logo: ForkSVG
  },
  {
    path: "ymaps",
    logo: ForkSVG
  }
];

export default () => {
  let { url } = useRouteMatch();

  return (
    <div
      className="mb-3 Details js-repos-container mt-5"
      id="dashboard-repos-container"
      role="navigation"
      aria-label="Repositories"
    >
      <div className="js-repos-container" id="repos-container">
        <h2 className="f4 hide-sm hide-md mb-1 f5 d-flex flex-justify-between flex-items-center">
          Repositories
          <a className="btn btn-sm btn-primary" href="/new">
            New
            <RepoSVG className="octicon octicon-repo" />
          </a>
        </h2>

        <div className="mt-2 mb-3" role="search" aria-label="Repositories">
          <input
            readOnly
            type="text"
            className="form-control input-contrast input-block mb-3 js-filterable-field js-your-repositories-search"
            id="dashboard-repos-filter-left"
            placeholder="Find a repository…"
            value=""
            autoComplete="off"
          />
        </div>

        <ul className="list-style-none">
          {repos.map((el, index) => (
            <li className="public source no-description" key={index}>
              <div className="width-full text-bold">
                <Link
                  to={url + "/" + el.path}
                  className="d-inline-flex flex-items-baseline flex-wrap f5 mb-2 dashboard-underlined-link width-fit"
                >
                  <div className="color-text-tertiary mr-2">
                    {<el.logo className="octicon octicon-repo flex-shrink-0" />}
                  </div>
                  <span
                    className="flex-shrink-0 css-truncate css-truncate-target"
                    title="iviWebStudio"
                  >
                    iviWebStudio
                  </span>
                  /
                  <span
                    className="css-truncate css-truncate-target"
                    title="{el.path}"
                  >
                    {el.path}
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
