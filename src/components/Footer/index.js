import "./footer.scss";

export default () => {
  return (
    <div
      className="footer container-lg width-full p-responsive"
      role="contentinfo"
    >
      <div className="position-relative d-flex flex-row-reverse flex-lg-row flex-wrap flex-lg-nowrap flex-justify-center flex-lg-justify-between pt-6 pb-2 mt-6 f6 color-text-secondary border-top color-border-secondary ">
        <ul className="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
          <li className="mr-3 mr-lg-0">© 2021 GitHub, Inc.</li>
          <li className="mr-3 mr-lg-0">
            <a href="https://docs.github.com/en/github/site-policy/github-terms-of-service">
              Terms
            </a>
          </li>
          <li className="mr-3 mr-lg-0">
            <a href="https://docs.github.com/en/github/site-policy/github-privacy-statement">
              Privacy
            </a>
          </li>
          <li className="mr-3 mr-lg-0">
            <a href="https://github.com/security">Security</a>
          </li>
          <li className="mr-3 mr-lg-0">
            <a href="https://www.githubstatus.com/">Status</a>
          </li>
          <li>
            <a
              data-ga-click="Footer, go to help, text:Docs"
              href="https://docs.github.com"
            >
              Docs
            </a>
          </li>
        </ul>

        <a
          aria-label="Homepage"
          title="GitHub"
          className="footer-octicon d-none d-lg-block mx-lg-4"
          href="https://github.com"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            height="24"
            width="24"
            className="octicon octicon-mark-github"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        </a>
        <ul className="list-style-none d-flex flex-wrap col-12 col-lg-5 flex-justify-center flex-lg-justify-between mb-2 mb-lg-0">
          <li className="mr-3 mr-lg-0">
            <a href="https://support.github.com">Contact GitHub</a>
          </li>
          <li className="mr-3 mr-lg-0">
            <a href="https://github.com/pricing">Pricing</a>
          </li>
          <li className="mr-3 mr-lg-0">
            <a href="https://docs.github.com">API</a>
          </li>
          <li className="mr-3 mr-lg-0">
            <a href="https://services.github.com">Training</a>
          </li>
          <li className="mr-3 mr-lg-0">
            <a href="https://github.blog">Blog</a>
          </li>
          <li>
            <a href="https://github.com/about">About</a>
          </li>
        </ul>
      </div>
      <div className="d-flex flex-justify-center pb-6">
        <span className="f6 color-text-tertiary"></span>
      </div>
    </div>
  );
};
