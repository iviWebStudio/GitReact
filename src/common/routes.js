import Home from "../components/Pages/Home";
import Dashboard from "../components/Pages/Dashboard";
import Issues from "../components/Pages/Issues";
import Pulls from "../components/Pages/Pulls";
import Marketplace from "../components/Pages/Marketplace";
import Explore from "../components/Pages/Explore";
import HomeSidebar from "../components/Sidebars/Home";
import DashboardSidebar from "../components/Sidebars/Dashboard";
import ExploreSidebar from "../components/Sidebars/Explore";

export default [
  {
    path: "/",
    title: "Home",
    main: Home,
    sidebar: HomeSidebar,
    hideFromMenu: true,
    exact: true
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    main: Dashboard,
    sidebar: DashboardSidebar
  },
  {
    path: "/issues",
    title: "Issues",
    main: Issues
  },
  {
    path: "/pulls",
    title: "Pulls",
    main: Pulls
  },
  {
    path: "/marketplace",
    title: "Marketplace",
    main: Marketplace
  },
  {
    path: "/explore",
    title: "Explore",
    main: Explore,
    sidebar: ExploreSidebar,
    xashik: {
      name: "sasa"
    }
  }
];
