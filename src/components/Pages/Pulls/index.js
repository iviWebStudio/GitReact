import Footer from "../../Footer";

export default () => {
  return (
    <div className="col-12">
      <main id="js-pjax-container">
        <div className="pt-4 position-relative container-lg p-responsive">
          <div className="subnav d-flex mb-3 flex-column flex-md-row">
            <nav className="subnav-links d-flex d-sm-block" aria-label="Issues">
              <a
                className="js-selected-navigation-item selected subnav-item flex-1 text-center"
                href="/"
              >
                Created
              </a>
              <a
                className="js-selected-navigation-item subnav-item flex-1 text-center"
                href="/"
              >
                Assigned
              </a>
              <a
                className="js-selected-navigation-item subnav-item flex-1 text-center"
                href="/"
              >
                Mentioned
              </a>
              <a
                className="js-selected-navigation-item subnav-item flex-1 text-center"
                href="/"
              >
                Review requests
              </a>
            </nav>
            <div className="flex-auto min-width-0">
              <div className="subnav-search ml-0 ml-md-3 mt-3 mt-md-0">
                <input
                  readOnly
                  type="text"
                  name="q"
                  defaultValue="is:open is:pr author:iviWebStudio archived:false "
                  id="js-issues-search"
                  className="form-control subnav-search-input subnav-search-input-wide input-contrast width-full"
                  placeholder="Search all issues"
                  aria-label="Search all issues"
                />
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  height="16"
                  width="16"
                  className="octicon octicon-search subnav-search-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
                  ></path>
                </svg>
              </div>{" "}
            </div>
          </div>

          <div className="d-block d-md-none no-wrap mb-3">
            <div className="table-list-header-toggle states flex-auto pl-0">
              <a href="/" className="btn-link selected">
                <svg
                  className="octicon octicon-issue-opened"
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
                0 Open
              </a>

              <a href="/" className="btn-link ">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  height="16"
                  width="16"
                  className="octicon octicon-check"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                  ></path>
                </svg>
                0 Closed
              </a>
            </div>
          </div>

          <div
            className="Box Box--responsive hx_Box--firstRowRounded0"
            id="js-issues-toolbar"
            data-pjax=""
          >
            <div className="Box-header d-flex flex-justify-between">
              <div className="table-list-filters flex-auto d-none d-md-block no-wrap">
                <div className="table-list-header-toggle states flex-auto pl-0">
                  <a href="/" className="btn-link selected">
                    <svg
                      className="octicon octicon-issue-opened"
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
                    0 Open
                  </a>

                  <a href="/" className="btn-link ">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      version="1.1"
                      height="16"
                      width="16"
                      className="octicon octicon-check"
                    >
                      <path
                        fillRule="evenodd"
                        d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                      ></path>
                    </svg>
                    0 Closed
                  </a>
                </div>
              </div>

              <div className="table-list-header-toggle width-full d-flex flex-justify-between flex-sm-justify-start flex-md-justify-end">
                <details
                  className="details-reset details-overlay d-inline-block position-relative px-3"
                  id="visiblity-select-menu"
                >
                  <summary
                    className="btn-link"
                    aria-haspopup="menu"
                    role="button"
                  >
                    Visibility
                    <span className="dropdown-caret hide-sm"></span>
                  </summary>
                </details>

                <details
                  className="details-reset details-overlay d-inline-block position-relative px-3"
                  id="orgs-select-menu"
                >
                  <summary
                    className="btn-link"
                    data-hotkey="o"
                    aria-haspopup="menu"
                    data-ga-click="Issues, Table filter, Organization"
                    role="button"
                  >
                    Organization
                    <span className="dropdown-caret hide-sm"></span>
                  </summary>
                </details>

                <details
                  className="details-reset details-overlay d-inline-block position-relative pr-3 pr-sm-0 px-3"
                  id="sort-select-menu"
                >
                  <summary
                    className="btn-link"
                    title="Sort"
                    aria-haspopup="menu"
                    role="button"
                  >
                    Sort<span></span>
                    <span className="dropdown-caret hide-sm"></span>
                  </summary>
                </details>
              </div>
            </div>

            <div className="container-md">
              <div className="blankslate blankslate-large blankslate-spacious">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  version="1.1"
                  height="24"
                  width="24"
                  className="octicon octicon-issue-opened blankslate-icon"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0zM12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 13a2 2 0 100-4 2 2 0 000 4z"
                  ></path>
                </svg>

                <h3>No results matched your search.</h3>
                <p>
                  You could search <a href="/search">all of GitHub</a> or try an{" "}
                  <a href="/">advanced search</a>.
                </p>
              </div>
            </div>
          </div>

          <div className="protip">
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              height="16"
              width="16"
              className="octicon octicon-light-bulb color-text-secondary"
            >
              <path
                fillRule="evenodd"
                d="M8 1.5c-2.363 0-4 1.69-4 3.75 0 .984.424 1.625.984 2.304l.214.253c.223.264.47.556.673.848.284.411.537.896.621 1.49a.75.75 0 01-1.484.211c-.04-.282-.163-.547-.37-.847a8.695 8.695 0 00-.542-.68c-.084-.1-.173-.205-.268-.32C3.201 7.75 2.5 6.766 2.5 5.25 2.5 2.31 4.863 0 8 0s5.5 2.31 5.5 5.25c0 1.516-.701 2.5-1.328 3.259-.095.115-.184.22-.268.319-.207.245-.383.453-.541.681-.208.3-.33.565-.37.847a.75.75 0 01-1.485-.212c.084-.593.337-1.078.621-1.489.203-.292.45-.584.673-.848.075-.088.147-.173.213-.253.561-.679.985-1.32.985-2.304 0-2.06-1.637-3.75-4-3.75zM6 15.25a.75.75 0 01.75-.75h2.5a.75.75 0 010 1.5h-2.5a.75.75 0 01-.75-.75zM5.75 12a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5z"
              ></path>
            </svg>
            <strong>ProTip!</strong>
            What’s not been updated in a month:{" "}
            <a href="/">updated:&lt;2021-06-18</a>.
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
