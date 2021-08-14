import { ReactComponent as LightBulbSVG } from "../../../svg/light-bulb.svg";
import { ReactComponent as SubscribeSVG } from "../../../svg/subscribe.svg";
import { ReactComponent as GitSVG } from "../../../svg/github.svg";

const footerMenu = [
  ["Blog", "About", "Shop", "Contact GitHub", "Pricing"],
  ["API", "Training", "Status", "Security"],
  ["Terms", "Privacy", "Docs"]
];

export default () => {
  return (
    <div className="col-md-7 px-3 px-lg-5">
      <div className="d-md-flex gutter-md-spacious">
        <div className="col-md-12 col-lg-8 mt-3 border-bottom">
          <div className="mx-auto d-flex flex-auto flex-column">
            <main className="flex-auto">
              <div
                data-issue-and-pr-hovercards-enabled=""
                data-sponsors-listing-hovercards-enabled=""
              >
                <div id="dashboard" className="dashboard">
                  <h1 className="sr-only">Dashboard</h1>

                  <div className="news">
                    <h2 className="f4 text-normal pt-md-3">All activity</h2>

                    <div className="Box mt-3 js-notice">
                      <div className="Box-body">
                        <div className="mb-2">
                          <strong>Introduce yourself</strong>
                          <p>
                            The easiest way to introduce yourself on GitHub is
                            by creating a README in a repository about you! You
                            can start here:
                          </p>
                        </div>
                        <div className="Box">
                          <div className="Box-header color-bg-primary">
                            <div className="text-mono text-small">
                              <span>iviWebStudio</span>
                              <span className="color-text-tertiary d-inline-block">
                                /
                              </span>
                              README
                              <span className="color-text-tertiary">.md</span>
                            </div>
                          </div>
                          <article className="color-bg-tertiary rounded-bottom-1 py-2">
                            <div className="d-flex flex-items-center">
                              <span className="blob-num pinned-gist-blob-num pl-0">
                                1
                              </span>
                              <pre className="lh-condensed-ultra overflow-hidden">
                                - 👋 Hi, I’m @iviWebStudio
                              </pre>
                            </div>
                            <div className="d-flex flex-items-center">
                              <span className="blob-num pinned-gist-blob-num pl-0">
                                2
                              </span>
                              <pre className="lh-condensed-ultra overflow-hidden">
                                - 👀 I’m interested in ...
                              </pre>
                            </div>
                            <div className="d-flex flex-items-center">
                              <span className="blob-num pinned-gist-blob-num pl-0">
                                3
                              </span>
                              <pre className="lh-condensed-ultra overflow-hidden">
                                - 🌱 I’m currently learning ...
                              </pre>
                            </div>
                            <div className="d-flex flex-items-center">
                              <span className="blob-num pinned-gist-blob-num pl-0">
                                4
                              </span>
                              <pre className="lh-condensed-ultra overflow-hidden">
                                - 💞️ I’m looking to collaborate on ...
                              </pre>
                            </div>
                            <div className="d-flex flex-items-center">
                              <span className="blob-num pinned-gist-blob-num pl-0">
                                5
                              </span>
                              <pre className="lh-condensed-ultra overflow-hidden">
                                - 📫 How to reach me ...
                              </pre>
                            </div>
                            <div className="d-flex flex-items-center">
                              <span className="blob-num pinned-gist-blob-num pl-0">
                                6
                              </span>
                              <pre className="lh-condensed-ultra overflow-hidden"></pre>
                            </div>
                          </article>
                        </div>
                        <div className="mt-2 d-flex flex-items-center flex-justify-end"></div>
                      </div>
                    </div>

                    <div className="Box p-5 mt-3">
                      <h2 className="h2 lh-condensed mb-2">
                        Discover interesting projects and people to populate
                        your personal news feed.
                      </h2>
                      <p className="f4 color-text-secondary">
                        Your news feed helps you keep up with recent activity on
                        repositories you
                        <a href="/">watch</a>
                        or
                        <a href="/iviWebStudio?tab=stars">star</a>
                        and people you
                        <a href="//github.com/trending/developers">follow</a>.
                      </p>
                      <button className="btn btn-outline mt-2">
                        Explore GitHub
                      </button>
                    </div>

                    <div className="f6 color-text-secondary mt-4">
                      <div>
                        <LightBulbSVG className="octicon octicon-light-bulb color-text-secondary" />
                        <strong>ProTip!</strong>
                        The feed shows you events from people you{" "}
                        <a href="/iviWebStudio?tab=following">follow</a> and
                        repositories you <a href="/watching">watch</a> or{" "}
                        <a href="/iviWebStudio?tab=stars">star</a>.
                      </div>
                      <a
                        className="f6 Link--secondary mb-2 mt-2 d-inline-block"
                        href="/iviWebStudio.private.atom?token=ALHIGPWEZIXJ353ZKFUI4A5673M66"
                        data-ga-click="Dashboard, click, News feed atom/RSSlink- context:user"
                      >
                        <SubscribeSVG className="octicon octicon-rss mr-1" />
                        Subscribe to your news feed
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            <div
              className="d-flex flex-items-between footer container-lg my-5 px-0"
              role="contentinfo"
            >
              <div className="col-lg-4 list-style-none mr-lg-5">
                <a
                  title="Home page"
                  className="d-none d-lg-flex footer-octicon footer-octicon no-underline"
                  href="https://github.com"
                >
                  <div>
                    <GitSVG className="octicon octicon-mark-github d-block mr-2 float-left" />
                  </div>

                  <div>
                    <span className="f6 color-text-tertiary">
                      © 2021 GitHub, Inc.
                    </span>
                  </div>
                </a>
              </div>

              <div className="d-flex flex-justify-start flex-row flex-auto">
                {footerMenu.map((el, index) => (
                  <ul
                    className="col-4 col-sm-4 col-lg-4 col-xl-3 list-style-none f6 color-text-secondary pl-lg-4"
                    key={index}
                  >
                    {el.map((item, index) => (
                      <li className="mb-1" key={index}>
                        <a className="Link--secondary" href="/">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
