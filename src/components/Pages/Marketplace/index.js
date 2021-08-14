import { ReactComponent as CheckSVG } from "../../../svg/check.svg";

export default () => {
  return (
    <div className="col-12">
      <div className="MarketplaceHeader pt-6 pt-lg-10 position-relative color-bg-primary">
        <div className="container-lg p-responsive text-center text-md-left">
          <div className="col-lg-7 position-relative">
            <h1 className="h1 mb-2 lh-condensed-ultra">Extend GitHub</h1>
            <p className="f3 mb-4 color-text-secondary lh-condensed">
              Find tools to improve your workflow
            </p>
            <div className="d-flex flex-items-center flex-sm-justify-center flex-md-justify-start mb-sm-4 mb-md-0">
              <a className="btn-mktg btn-outline-mktg" href="/">
                Explore free apps
              </a>
            </div>
          </div>
        </div>

        <div className="MarketplaceBackground-wrapper pt-12">
          <div className="container-xl p-responsive position-relative">
            <div className="col-md-7 col-lg-12 mx-auto">
              <div className="MarketplaceBackground-recommendations mx-auto">
                <img
                  src="https://github.githubassets.com/images/modules/marketplace/marketplace-illustration-01.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="MarketplaceBackground-buffer"></div>
        </div>
      </div>

      <div className="MarketplaceBody">
        <div className="container-lg p-responsive clearfix">
          <div className="col-lg-9 float-lg-right">
            <div className="d-sm-flex flex-items-center flex-md-justify-end mt-3 mt-md-0 table-list-header-toggle ml-n2 ml-md-0">
              <div className="flex-auto min-width-0"></div>

              <details className="details-reset details-overlay select-menu pl-2 mb-3 color-shadow-extra-large">
                <summary
                  className="btn btn-large select-menu-button-large"
                  aria-haspopup="menu"
                  role="button"
                >
                  <i>Sort:</i>
                  <span>Best Match</span>
                  <span></span>
                  <span></span>
                </summary>
                <details-menu
                  className="select-menu-modal position-absolute"
                  role="menu"
                >
                  <div className="select-menu-header">
                    <span className="select-menu-title">Sort options</span>
                  </div>
                  <div className="select-menu-list">
                    <a
                      href="/"
                      className="select-menu-item"
                      role="menuitemradio"
                      aria-checked="true"
                    >
                      <CheckSVG className="octicon octicon-check select-menu-item-icon" />
                      <div className="select-menu-item-text">Best Match</div>
                    </a>
                    <a
                      href="/"
                      className="select-menu-item"
                      role="menuitemradio"
                      aria-checked="false"
                    >
                      <CheckSVG className="octicon octicon-check select-menu-item-icon" />
                      <div className="select-menu-item-text">
                        Recently added
                      </div>
                    </a>
                    <a
                      href="/"
                      className="select-menu-item"
                      role="menuitemradio"
                      aria-checked="false"
                    >
                      <CheckSVG className="octicon octicon-check select-menu-item-icon" />
                      <div className="select-menu-item-text">
                        Most installed/starred
                      </div>
                    </a>
                  </div>
                </details-menu>
              </details>
            </div>
          </div>

          <details className="d-lg-none mb-3 details-reset details-overlay details-overlay-dark">
            <summary role="button" className="btn-large btn btn-block">
              Menu
            </summary>
            <details-dialog
              className="Box Box--overlay Box--full d-flex flex-column anim-fade-in fast"
              role="dialog"
              aria-modal="true"
            >
              <div className="Box-header">
                <button
                  className="Box-btn-octicon btn-octicon float-right"
                  type="button"
                  aria-label="Close dialog"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-x"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
                    ></path>
                  </svg>
                </button>
                <h3 className="Box-title">Menu</h3>
              </div>
              <div className="overflow-auto">
                <div className="Box-row py-3">
                  <h4 className="mb-md-1">Types</h4>
                  <ul className="list-style-none">
                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Apps
                      </a>
                    </li>
                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Actions
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="Box-row py-3">
                  <h4 className='mb-md-1"'>Categories</h4>
                  <ul className="list-style-none">
                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        API management
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Chat
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Code quality
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Code review
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Continuous integration
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Dependency management
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Deployment
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        IDEs
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Learning
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Localization
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Mobile
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Monitoring
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Project management
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Publishing
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Recently added
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Security
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Support
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Testing
                      </a>
                    </li>

                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Utilities
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="Box-row py-3">
                  <details className="details-reset">
                    <summary>
                      <h4>
                        Filters{" "}
                        <svg
                          className="octicon octicon-chevron-down color-text-secondary ml-2"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          height="16"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                          ></path>
                        </svg>
                      </h4>
                    </summary>
                    <ul className="list-style-none mt-3">
                      <li>
                        <a
                          className="Link--muted filter-item py-2 mb-0 "
                          href="/"
                        >
                          Free
                        </a>
                      </li>
                      <li>
                        <a
                          className="Link--muted filter-item py-2 mb-0 "
                          href="/"
                        >
                          Free Trials
                        </a>
                      </li>
                      <li>
                        <a
                          className="Link--muted filter-item py-2 mb-0 "
                          href="/"
                        >
                          GitHub Enterprise
                        </a>
                      </li>
                      <li>
                        <a
                          className="Link--muted filter-item py-2 mb-0 "
                          href="/"
                        >
                          Paid
                        </a>
                      </li>
                    </ul>
                  </details>
                </div>

                <div className="Box-row py-3">
                  <h4 className="mb-md-1">Verification</h4>
                  <ul className="list-style-none">
                    <li>
                      <a className="filter-item py-1 mb-0" href="/">
                        Verified Creator
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="Box-row py-3">
                  <details className="details-reset" open="">
                    <summary>
                      <h4>
                        Your items{" "}
                        <svg
                          className="octicon octicon-chevron-down color-text-secondary ml-2"
                          viewBox="0 0 16 16"
                          version="1.1"
                          width="16"
                          height="16"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                          ></path>
                        </svg>
                      </h4>
                    </summary>
                    <ul className="mt-2 list-style-none"></ul>
                  </details>
                </div>
              </div>
              <div className="Box-footer">
                <button type="button" className="btn btn-block">
                  Close
                </button>
              </div>
            </details-dialog>
          </details>

          <nav className="d-none d-lg-block col-lg-3 float-lg-left pl-3 pl-md-0 pr-3 pr-md-5 pt-3 pt-md-2 pb-md-12">
            <h4 className="text-mono mb-3 text-normal">Types</h4>
            <ul className="list-style-none mb-4">
              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Apps
                </a>
              </li>
              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Actions
                </a>
              </li>
            </ul>

            <h4 className="text-mono mb-3 text-normal mt-6">Categories</h4>
            <ul className="list-style-none">
              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  API management
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Chat
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Code quality
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Code review
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Continuous integration
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Dependency management
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Deployment
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  IDEs
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Learning
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Localization
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Mobile
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Monitoring
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Project management
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Publishing
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Recently added
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Security
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Support
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Testing
                </a>
              </li>

              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Utilities
                </a>
              </li>
            </ul>

            <details className="MarketplaceDetails details-reset">
              <summary>
                <h4 className="text-mono text-normal mt-6">
                  Filters{" "}
                  <svg
                    className="octicon octicon-chevron-down color-text-secondary ml-2"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                    ></path>
                  </svg>
                </h4>
              </summary>
              <ul className="list-style-none mt-3">
                <li>
                  <a className="Link--muted filter-item py-2 mb-0 " href="/">
                    Free
                  </a>
                </li>
                <li>
                  <a className="Link--muted filter-item py-2 mb-0 " href="/">
                    Free Trials
                  </a>
                </li>
                <li>
                  <a className="Link--muted filter-item py-2 mb-0 " href="/">
                    GitHub Enterprise
                  </a>
                </li>
                <li>
                  <a className="Link--muted filter-item py-2 mb-0 " href="/">
                    Paid
                  </a>
                </li>
              </ul>
            </details>

            <h4 className="text-mono mt-6 mb-3 text-normal">Verification</h4>
            <ul className="list-style-none mb-4">
              <li>
                <a className="Link--muted filter-item py-2 mb-0" href="/">
                  Verified Creator
                </a>
              </li>
            </ul>

            <details className="MarketplaceDetails details-reset" open="">
              <summary>
                <h4 className="text-mono text-normal mt-6">
                  Your items{" "}
                  <svg
                    className="octicon octicon-chevron-down color-text-secondary ml-2"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.78 6.22a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06 0L3.22 7.28a.75.75 0 011.06-1.06L8 9.94l3.72-3.72a.75.75 0 011.06 0z"
                    ></path>
                  </svg>
                </h4>
              </summary>
              <ul className="list-style-none mt-3"></ul>
            </details>
          </nav>

          <div className="col-lg-9 mt-1 mb-4 float-lg-right">
            <h3 className="mb-3">Apps</h3>
            <div className="d-md-flex flex-wrap mb-4">
              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/7?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">CircleCI</h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By circleci
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="Publisher domain and email verified"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified color-text-link ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Automatically build, test, and deploy your project in
                    minutes
                  </p>
                  <span
                    title="Label: Recommended"
                    className="Label Label--secondary mt-1"
                  >
                    Recommended
                  </span>{" "}
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/704?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">CodeFactor</h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By codefactor-io
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="Publisher domain and email verified"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified color-text-link ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Automated code review for GitHub
                  </p>
                  <span
                    title="Label: Recommended"
                    className="Label Label--secondary mt-1"
                  >
                    Recommended
                  </span>{" "}
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/89?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">codebeat</h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By codequest-eu
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="Publisher domain and email verified"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified color-text-link ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Code review expert on demand. Automated for mobile and web
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-download color-text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"
                    ></path>
                  </svg>
                  <span className="text-small color-text-secondary text-bold">
                    11.5k installs
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/5097?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">abaplint</h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By heliconialabs
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="Publisher domain and email verified"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified color-text-link ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    ABAP quality assurance and static analysis
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-download color-text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"
                    ></path>
                  </svg>
                  <span className="text-small color-text-secondary text-bold">
                    157 installs
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/7736?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Cloudback Backup</h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By cloudback
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="Publisher domain and email verified"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified color-text-link ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Backups your GitHub repositories, fast and secure
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-download color-text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"
                    ></path>
                  </svg>
                  <span className="text-small color-text-secondary text-bold">
                    262 installs
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/9157?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">LZU COVID Health Report</h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By Hollow-Software
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="Publisher domain and email verified"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified color-text-link ml-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    兰州大学疫情期间自动定时健康打卡工作流 LZU Auto COVID Health
                    Report Using Github Actions
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-download color-text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"
                    ></path>
                  </svg>
                  <span className="text-small color-text-secondary text-bold">
                    344 installs
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/8291?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Django Doctor</h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By higher-tier
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="Publisher domain and email verified"
                    ></span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Improve the security, performance, and maintainability of
                    your Django code
                  </p>

                  <span className="text-small color-text-secondary text-bold">
                    866 installs
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/9?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">
                    ZenHub
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="App meets the requirements for listing"
                    ></span>
                  </h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By ZenHubIO
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Agile Task Boards, Epics, Estimates and Reports, all within
                    GitHub's UI
                  </p>
                  <span
                    title="Label: Recommended"
                    className="Label Label--secondary mt-1"
                  >
                    Recommended
                  </span>{" "}
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/497?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">
                    Imgbot
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="App meets the requirements for listing"
                    ></span>
                  </h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By ImgBotApp
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    A GitHub app that optimizes your images
                  </p>
                  <span
                    title="Label: Recommended"
                    className="Label Label--secondary mt-1"
                  >
                    Recommended
                  </span>{" "}
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <img
                      className="CircleBadge-icon"
                      alt=""
                      src="https://avatars.githubusercontent.com/ml/30?s=62&amp;v=4"
                    />
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">
                    Codecov | Code Coverage
                    <span
                      className="tooltipped tooltipped-n"
                      aria-label="App meets the requirements for listing"
                    ></span>
                  </h3>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    By codecov
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Automatic test report merging for all CI and languages into
                    a single code coverage report directly into your pull
                    request
                  </p>
                  <span
                    title="Label: Recommended"
                    className="Label Label--secondary mt-1"
                  >
                    Recommended
                  </span>{" "}
                </div>
              </a>
            </div>
            <a className="f4 d-block mb-6" href="/">
              View all
            </a>
            <h3 className="mb-3">Actions</h3>
            <div className="d-md-flex flex-wrap mb-4">
              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small"></div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Setup Go environment</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    ></span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Setup a Go environment and add it to the PATH
                  </p>

                  <span className="text-small color-text-secondary text-bold">
                    455 stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                <div>
                  <div className="CircleBadge CircleBadge--small"></div>
                </div>
                <div className="px-3">
                  <h3 className="h4">First interaction</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    ></span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Greet new contributors when they create their first issue or
                    open their first pull request
                  </p>

                  <span className="text-small color-text-secondary text-bold">
                    115 stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                <div>
                  <div className="CircleBadge CircleBadge--small"></div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Setup Java JDK</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    ></span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Set up a specific version of the Java JDK and add the
                    command-line tools to the PATH
                  </p>

                  <span className="text-small color-text-secondary text-bold">
                    435 stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                <div>
                  <div className="CircleBadge CircleBadge--small"></div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Cache</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    ></span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Cache artifacts like dependencies and build outputs to
                    improve workflow execution time
                  </p>

                  <span className="text-small color-text-secondary text-bold">
                    2.1k stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small"></div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Upload a Build Artifact</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    ></span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Upload a build artifact that can be used by subsequent
                    workflow steps
                  </p>

                  <span className="text-small color-text-secondary text-bold">
                    1k stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                <div>
                  <div className="CircleBadge CircleBadge--small"></div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Download a Build Artifact</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    ></span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Download a build artifact that was previously uploaded in
                    the workflow by the upload-artifact action
                  </p>

                  <span className="text-small color-text-secondary text-bold">
                    354 stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small"></div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Setup .NET Core SDK</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    ></span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Used to build and publish .NET source. Set up a specific
                    version of the .NET and authentication to private NuGet
                    repository
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-star color-text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                    ></path>
                  </svg>
                  <span className="text-small color-text-secondary text-bold">
                    317 stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50%"
                      height="50%"
                      viewBox="0 0 91 91"
                      fill="none"
                      style={{ color: "#ffffff" }}
                    >
                      <title>actions</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M91 45.5C91 70.6289 70.629 91 45.5 91C20.371 91 0 70.6289 0 45.5C0 20.3711 20.371 0 45.5 0C70.629 0 91 20.3711 91 45.5ZM33.2774 70.9818L70.876 45.916C71.1728 45.7181 71.1728 45.2819 70.876 45.084L33.2774 20.0182C32.9451 19.7967 32.5 20.0349 32.5 20.4343V70.5657C32.5 70.9651 32.9451 71.2033 33.2774 70.9818Z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Setup Node.js environment</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified hx_text-blue-light"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Setup a Node.js environment by adding problem matchers and
                    optionally downloading and adding it to the PATH
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-star color-text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                    ></path>
                  </svg>
                  <span className="text-small color-text-secondary text-bold">
                    1.2k stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50%"
                      height="50%"
                      viewBox="0 0 91 91"
                      fill="none"
                      style={{ color: "#ffffff" }}
                    >
                      <title>actions</title>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M91 45.5C91 70.6289 70.629 91 45.5 91C20.371 91 0 70.6289 0 45.5C0 20.3711 20.371 0 45.5 0C70.629 0 91 20.3711 91 45.5ZM33.2774 70.9818L70.876 45.916C71.1728 45.7181 71.1728 45.2819 70.876 45.084L33.2774 20.0182C32.9451 19.7967 32.5 20.0349 32.5 20.4343V70.5657C32.5 70.9651 32.9451 71.2033 33.2774 70.9818Z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">Close Stale Issues</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">actions</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified hx_text-blue-light"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Close issues and pull requests with no recent activity
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-star color-text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                    ></path>
                  </svg>
                  <span className="text-small color-text-secondary text-bold">
                    428 stars
                  </span>
                </div>
              </a>

              <a href="/" className="col-md-6 mb-4 d-flex no-underline">
                {" "}
                <div>
                  <div className="CircleBadge CircleBadge--small">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 500 500"
                      style={{ color: "#23292e" }}
                      width="50%"
                      height="50%"
                    >
                      <title>ansible</title>
                      <path fill="#1a1918" d="M0 0h500v500H0z"></path>
                      <path
                        d="M254.18 152.7l64.69 159.66-97.71-76.97 33.02-82.69zM369.1 349.14l-99.5-239.46c-2.84-6.91-8.52-10.56-15.41-10.56-6.91 0-13 3.65-15.84 10.56L129.13 372.33h37.36l43.23-108.29 129.01 104.23c5.19 4.2 8.93 6.09 13.8 6.09 9.75 0 18.27-7.31 18.27-17.85 0-1.72-.61-4.44-1.7-7.37z"
                        fill="#fff"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div className="px-3">
                  <h3 className="h4">ansible-lint</h3>
                  <p className="color-text-tertiary text-small lh-condensed mb-1">
                    By <span className="color-text-secondary">ansible</span>
                    <span
                      className="tooltipped tooltipped-s"
                      aria-label="Creator verified by GitHub"
                    >
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 16 16"
                        version="1.1"
                        height="16"
                        width="16"
                        className="octicon octicon-verified hx_text-blue-light"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.585.52a2.678 2.678 0 00-3.17 0l-.928.68a1.178 1.178 0 01-.518.215L3.83 1.59a2.678 2.678 0 00-2.24 2.24l-.175 1.14a1.178 1.178 0 01-.215.518l-.68.928a2.678 2.678 0 000 3.17l.68.928c.113.153.186.33.215.518l.175 1.138a2.678 2.678 0 002.24 2.24l1.138.175c.187.029.365.102.518.215l.928.68a2.678 2.678 0 003.17 0l.928-.68a1.17 1.17 0 01.518-.215l1.138-.175a2.678 2.678 0 002.241-2.241l.175-1.138c.029-.187.102-.365.215-.518l.68-.928a2.678 2.678 0 000-3.17l-.68-.928a1.179 1.179 0 01-.215-.518L14.41 3.83a2.678 2.678 0 00-2.24-2.24l-1.138-.175a1.179 1.179 0 01-.518-.215L9.585.52zM7.303 1.728c.415-.305.98-.305 1.394 0l.928.68c.348.256.752.423 1.18.489l1.136.174c.51.078.909.478.987.987l.174 1.137c.066.427.233.831.489 1.18l.68.927c.305.415.305.98 0 1.394l-.68.928a2.678 2.678 0 00-.489 1.18l-.174 1.136a1.178 1.178 0 01-.987.987l-1.137.174a2.678 2.678 0 00-1.18.489l-.927.68c-.415.305-.98.305-1.394 0l-.928-.68a2.678 2.678 0 00-1.18-.489l-1.136-.174a1.178 1.178 0 01-.987-.987l-.174-1.137a2.678 2.678 0 00-.489-1.18l-.68-.927a1.178 1.178 0 010-1.394l.68-.928c.256-.348.423-.752.489-1.18l.174-1.136c.078-.51.478-.909.987-.987l1.137-.174a2.678 2.678 0 001.18-.489l.927-.68zM11.28 6.78a.75.75 0 00-1.06-1.06L7 8.94 5.78 7.72a.75.75 0 00-1.06 1.06l1.75 1.75a.75.75 0 001.06 0l3.75-3.75z"
                        ></path>
                      </svg>
                    </span>
                  </p>
                  <p className="color-text-tertiary lh-condensed break-word mb-0">
                    Run Ansible Lint
                  </p>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 16"
                    version="1.1"
                    height="16"
                    width="16"
                    className="octicon octicon-star color-text-secondary"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                    ></path>
                  </svg>
                  <span className="text-small color-text-secondary text-bold">
                    149 stars
                  </span>
                </div>
              </a>
            </div>
            <a className="f4 d-block mb-6" href="/">
              View all
              <svg
                className="octicon octicon-chevron-right ml-2"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="container-lg p-responsive mt-4">
          <div className="color-shadow-extra-large rounded-1 color-bg-primary d-md-flex flex-items-center p-6 mb-6 position-relative">
            <div className="d-md-flex text-center text-md-left pr-md-6 col-md-6">
              <div className="mb-3 mb-md-0">
                <img
                  src="https://github.githubassets.com/images/modules/marketplace/icon-marketplace.svg"
                  alt=""
                />
              </div>
              <h2 className="h2 mb-3 mb-md-0 ml-md-4 text-normal lh-condensed">
                List your tool on GitHub&nbsp;Marketplace
              </h2>
            </div>
            <div className="d-md-flex clearfix text-center text-md-left pl-md-6">
              <div className="col-sm-6 pr-sm-3 mb-3 mb-sm-0 float-sm-left">
                <dl className="mt-1 mb-0">
                  <dt>
                    <a href="/" className="lh-condensed d-block mb-1">
                      Read the documentation
                    </a>
                  </dt>
                  <dd className="color-text-tertiary text-small">
                    Learn how you can build tools to extend and improve
                    developers' workflows.
                  </dd>
                </dl>
              </div>
              <div className="col-sm-6 pl-sm-3 float-sm-left">
                <dl className="mt-1 mb-0">
                  <dt>
                    <a href="/" className="lh-condensed d-block mb-1">
                      Submit your tool for review
                    </a>
                  </dt>
                  <dd className="color-text-tertiary text-small">
                    Share your app or GitHub Action with millions of developers.
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
