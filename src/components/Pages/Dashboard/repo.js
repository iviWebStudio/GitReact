import { Link } from "react-router-dom";

export default (props) => {
  return (
    <main id="js-repo-pjax-container" data-pjax-container="">
      <div className="hx_page-header-bg pt-3 hide-full-screen mb-5">
        <div className="d-flex mb-3 px-3 px-md-4 px-lg-5">
          <div className="flex-auto min-width-0 width-fit mr-3">
            <h1 className=" d-flex flex-wrap flex-items-center break-word f3 text-normal">
              <svg
                className="octicon octicon-repo color-text-secondary mr-2"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                ></path>
              </svg>
              <span className="author flex-self-stretch" itemProp="author">
                <a
                  className="url fn"
                  rel="author"
                  data-hovercard-type="user"
                  data-hovercard-url="/users/iviWebStudio/hovercard"
                  data-octo-click="hovercard-link-click"
                  data-octo-dimensions="link_type:self"
                  href="/iviWebStudio"
                >
                  iviWebStudio
                </a>
              </span>
              <span className="mx-1 flex-self-stretch color-text-secondary">
                /
              </span>
              <strong itemProp="name" className="mr-2 flex-self-stretch">
                <Link to={`/dashboard/${props.path}`}>{props.path}</Link>
              </strong>
            </h1>
          </div>

          <ul
            className="pagehead-actions flex-shrink-0 d-none d-md-inline"
            style={{ padding: "2px 0" }}
          >
            <li></li>

            <li>
              <div className="d-block js-toggler-container js-social-container starring-container ">
                <div className="starred js-social-form">
                  <input
                    type="hidden"
                    name="authenticity_token"
                    defaultValue="eYUfr5AuHAb/30atqHsxlqMO9OV9/M2Q7DQDPro51mbOEknMpPqVGacIbJ++DWhKMESiCze54D7z9dW4Xi930A=="
                  />
                  <input type="hidden" name="context" value="repository" />
                  <button
                    type="submit"
                    className="btn btn-sm btn-with-count  js-toggler-target"
                    aria-label="Unstar this repository"
                    title="Unstar iviWebStudio/next_example"
                    data-hydro-click='{"event_type":"repository.click","payload":{"target":"UNSTAR_BUTTON","repository_id":386872684,"originating_url":"https://github.com/iviWebStudio/next_example","user_id":47088446}}'
                    data-hydro-click-hmac="fed18a1ae4397276ec8e0777ef40cf8146686fba42c77d8751ba4c230382746a"
                    data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      data-view-component="true"
                      height="16"
                      width="16"
                      className="octicon octicon-star-fill mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"
                      ></path>
                    </svg>
                    <span data-view-component="true">Unstar</span>
                  </button>{" "}
                  <a
                    className="social-count js-social-count"
                    href="/iviWebStudio/next_example/stargazers"
                    aria-label="0 users starred this repository"
                  >
                    0
                  </a>
                </div>
                <div className="unstarred js-social-form">
                  <input
                    type="hidden"
                    name="authenticity_token"
                    defaultValue="E+c2Ggj9JmOwIu/YortJmdYu/1TfXI4F/G6FkO9/nab594iBH1kG+ne3+NJBkJNRwFXxQG9aPC+njzKbHnszxw=="
                  />
                  <input
                    type="hidden"
                    name="context"
                    defaultValue="repository"
                  />
                  <button
                    type="submit"
                    className="btn btn-sm btn-with-count  js-toggler-target"
                    aria-label="Unstar this repository"
                    title="Star iviWebStudio/next_example"
                    data-hydro-click='{"event_type":"repository.click","payload":{"target":"STAR_BUTTON","repository_id":386872684,"originating_url":"https://github.com/iviWebStudio/next_example","user_id":47088446}}'
                    data-hydro-click-hmac="8583ab17f19911a96930ea6152b059de5156ad1771ca2c67726b8b27fb95760e"
                    data-ga-click="Repository, click star button, action:files#disambiguate; text:Star"
                  >
                    {" "}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      data-view-component="true"
                      height="16"
                      width="16"
                      className="octicon octicon-star mr-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                      ></path>
                    </svg>
                    <span data-view-component="true">Star</span>
                  </button>{" "}
                  <a
                    className="social-count js-social-count"
                    href="/iviWebStudio/next_example/stargazers"
                    aria-label="0 users starred this repository"
                  >
                    0
                  </a>
                </div>{" "}
              </div>
            </li>

            <li>
              <span
                className="btn btn-sm btn-with-count disabled tooltipped tooltipped-sw"
                aria-label="Cannot fork because you own this repository and are not a member of any organizations."
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  data-view-component="true"
                  height="16"
                  width="16"
                  className="octicon octicon-repo-forked"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  ></path>
                </svg>
                Fork
              </span>
              <a
                href="/iviWebStudio/next_example/network/members"
                className="social-count"
                aria-label="0 users forked this repository"
              >
                0
              </a>
            </li>
          </ul>
        </div>

        <nav
          data-pjax="#js-repo-pjax-container"
          aria-label="Repository"
          data-view-component="true"
          className="js-repo-nav js-sidenav-container-pjax js-responsive-underlinenav overflow-hidden UnderlineNav px-3 px-md-4 px-lg-5"
        >
          <ul
            data-view-component="true"
            className="UnderlineNav-body list-style-none"
          >
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example"
                data-tab-item="i0code-tab"
                data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages repo_deployments /iviWebStudio/next_example"
                data-hotkey="g c"
                data-ga-click="Repository, Navigation click, Code tab"
                data-pjax="#repo-content-pjax-container"
                aria-current="page"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item selected"
              >
                <svg
                  className="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
                  ></path>
                </svg>
                <span data-content="Code">Code</span>
                <span
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
              </a>
            </li>
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example/issues"
                data-tab-item="i1issues-tab"
                data-selected-links="repo_issues repo_labels repo_milestones /iviWebStudio/next_example/issues"
                data-hotkey="g i"
                data-ga-click="Repository, Navigation click, Issues tab"
                data-pjax="#repo-content-pjax-container"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  className="octicon octicon-issue-opened UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  <path
                    fillRule="evenodd"
                    d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"
                  ></path>
                </svg>
                <span data-content="Issues">Issues</span>
                <span
                  title="0"
                  hidden="hidden"
                  data-view-component="true"
                  className="Counter"
                >
                  0
                </span>
              </a>
            </li>
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example/pulls"
                data-tab-item="i2pull-requests-tab"
                data-selected-links="repo_pulls checks /iviWebStudio/next_example/pulls"
                data-hotkey="g p"
                data-ga-click="Repository, Navigation click, Pull requests tab"
                data-pjax="#repo-content-pjax-container"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  className="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"
                  ></path>
                </svg>
                <span data-content="Pull requests">Pull requests</span>
                <span
                  title="0"
                  hidden="hidden"
                  data-view-component="true"
                  className="Counter"
                >
                  0
                </span>
              </a>
            </li>
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example/actions"
                data-tab-item="i3actions-tab"
                data-selected-links="repo_actions /iviWebStudio/next_example/actions"
                data-hotkey="g a"
                data-ga-click="Repository, Navigation click, Actions tab"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  className="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"
                  ></path>
                </svg>
                <span data-content="Actions">Actions</span>
                <span
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
              </a>
            </li>
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example/projects"
                data-tab-item="i4projects-tab"
                data-selected-links="repo_projects new_repo_project repo_project /iviWebStudio/next_example/projects"
                data-hotkey="g b"
                data-ga-click="Repository, Navigation click, Projects tab"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  className="octicon octicon-project UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z"
                  ></path>
                </svg>
                <span data-content="Projects">Projects</span>
                <span
                  title="0"
                  hidden="hidden"
                  data-view-component="true"
                  className="Counter"
                >
                  0
                </span>
              </a>
            </li>
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example/wiki"
                data-tab-item="i5wiki-tab"
                data-selected-links="repo_wiki /iviWebStudio/next_example/wiki"
                data-hotkey="g w"
                data-ga-click="Repository, Navigation click, Wikis tab"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  className="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"
                  ></path>
                </svg>
                <span data-content="Wiki">Wiki</span>
                <span
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
              </a>
            </li>
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example/security"
                data-tab-item="i6security-tab"
                data-selected-links="security overview alerts policy token_scanning code_scanning /iviWebStudio/next_example/security"
                data-hotkey="g s"
                data-ga-click="Repository, Navigation click, Security tab"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  className="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"
                  ></path>
                </svg>
                <span data-content="Security">Security</span>
              </a>
            </li>
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example/pulse"
                data-tab-item="i7insights-tab"
                data-selected-links="repo_graphs repo_contributors dependency_graph dependabot_updates pulse people community /iviWebStudio/next_example/pulse"
                data-ga-click="Repository, Navigation click, Insights tab"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  className="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"
                  ></path>
                </svg>
                <span data-content="Insights">Insights</span>
                <span
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
              </a>
            </li>
            <li data-view-component="true" className="d-flex">
              <a
                href="/iviWebStudio/next_example/settings"
                data-tab-item="i8settings-tab"
                data-selected-links="repo_settings repo_branch_settings hooks integration_installations repo_keys_settings issue_template_editor secrets_settings key_links_settings repo_actions_settings notifications repository_environments interaction_limits /iviWebStudio/next_example/settings"
                data-ga-click="Repository, Navigation click, Settings tab"
                data-view-component="true"
                className="UnderlineNav-item hx_underlinenav-item no-wrap js-responsive-underlinenav-item js-selected-navigation-item"
              >
                <svg
                  className="octicon octicon-gear UnderlineNav-octicon d-none d-sm-inline"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.429 1.525a6.593 6.593 0 011.142 0c.036.003.108.036.137.146l.289 1.105c.147.56.55.967.997 1.189.174.086.341.183.501.29.417.278.97.423 1.53.27l1.102-.303c.11-.03.175.016.195.046.219.31.41.641.573.989.014.031.022.11-.059.19l-.815.806c-.411.406-.562.957-.53 1.456a4.588 4.588 0 010 .582c-.032.499.119 1.05.53 1.456l.815.806c.08.08.073.159.059.19a6.494 6.494 0 01-.573.99c-.02.029-.086.074-.195.045l-1.103-.303c-.559-.153-1.112-.008-1.529.27-.16.107-.327.204-.5.29-.449.222-.851.628-.998 1.189l-.289 1.105c-.029.11-.101.143-.137.146a6.613 6.613 0 01-1.142 0c-.036-.003-.108-.037-.137-.146l-.289-1.105c-.147-.56-.55-.967-.997-1.189a4.502 4.502 0 01-.501-.29c-.417-.278-.97-.423-1.53-.27l-1.102.303c-.11.03-.175-.016-.195-.046a6.492 6.492 0 01-.573-.989c-.014-.031-.022-.11.059-.19l.815-.806c.411-.406.562-.957.53-1.456a4.587 4.587 0 010-.582c.032-.499-.119-1.05-.53-1.456l-.815-.806c-.08-.08-.073-.159-.059-.19a6.44 6.44 0 01.573-.99c.02-.029.086-.075.195-.045l1.103.303c.559.153 1.112.008 1.529-.27.16-.107.327-.204.5-.29.449-.222.851-.628.998-1.189l.289-1.105c.029-.11.101-.143.137-.146zM8 0c-.236 0-.47.01-.701.03-.743.065-1.29.615-1.458 1.261l-.29 1.106c-.017.066-.078.158-.211.224a5.994 5.994 0 00-.668.386c-.123.082-.233.09-.3.071L3.27 2.776c-.644-.177-1.392.02-1.82.63a7.977 7.977 0 00-.704 1.217c-.315.675-.111 1.422.363 1.891l.815.806c.05.048.098.147.088.294a6.084 6.084 0 000 .772c.01.147-.038.246-.088.294l-.815.806c-.474.469-.678 1.216-.363 1.891.2.428.436.835.704 1.218.428.609 1.176.806 1.82.63l1.103-.303c.066-.019.176-.011.299.071.213.143.436.272.668.386.133.066.194.158.212.224l.289 1.106c.169.646.715 1.196 1.458 1.26a8.094 8.094 0 001.402 0c.743-.064 1.29-.614 1.458-1.26l.29-1.106c.017-.066.078-.158.211-.224a5.98 5.98 0 00.668-.386c.123-.082.233-.09.3-.071l1.102.302c.644.177 1.392-.02 1.82-.63.268-.382.505-.789.704-1.217.315-.675.111-1.422-.364-1.891l-.814-.806c-.05-.048-.098-.147-.088-.294a6.1 6.1 0 000-.772c-.01-.147.039-.246.088-.294l.814-.806c.475-.469.679-1.216.364-1.891a7.992 7.992 0 00-.704-1.218c-.428-.609-1.176-.806-1.82-.63l-1.103.303c-.066.019-.176.011-.299-.071a5.991 5.991 0 00-.668-.386c-.133-.066-.194-.158-.212-.224L10.16 1.29C9.99.645 9.444.095 8.701.031A8.094 8.094 0 008 0zm1.5 8a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11 8a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
                <span data-content="Settings">Settings</span>
                <span
                  title="Not available"
                  data-view-component="true"
                  className="Counter"
                ></span>
              </a>
            </li>
          </ul>
          <div
            style={{ visibility: "hidden" }}
            className="UnderlineNav-actions  js-responsive-underlinenav-overflow position-absolute pr-3 pr-md-4 pr-lg-5 right-0"
          >
            <details
              data-view-component="true"
              className="details-overlay details-reset position-relative"
            >
              <summary role="button" data-view-component="true">
                <div className="UnderlineNav-item mr-0 border-0">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    data-view-component="true"
                    height="16"
                    width="16"
                    className="octicon octicon-kebab-horizontal"
                  >
                    <path d="M8 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM1.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm13 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                  </svg>
                  <span className="sr-only">More</span>
                </div>
              </summary>
              <div data-view-component="true"> </div>
            </details>
          </div>
        </nav>
      </div>

      <div className="container-xl clearfix new-discussion-timeline px-3 px-md-4 px-lg-5">
        <div id="repo-content-pjax-container" className="repository-content ">
          <div className="protip">
            <svg
              className="octicon octicon-light-bulb color-text-secondary"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              height="16"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
              ></path>
            </svg>
            <strong>ProTip!</strong> Use the URL for this page when adding
            GitHub as a remote.
          </div>
        </div>
      </div>
    </main>
  );
};
