import Repos from "./repos";
import RecentActions from "./recents";
import Team from "./team";

export default () => {
  return (
    <aside
      className="team-left-column col-md-5 color-bg-primary border-right color-border-secondary border-bottom hide-md hide-sm"
      aria-label="Account"
    >
      <div className="dashboard-sidebar js-sticky top-0 px-3 px-md-4 px-lg-5 overflow-auto">
        <Repos />
        <RecentActions />
        <Team />
      </div>
    </aside>
  );
};
