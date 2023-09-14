import Home from "~/pages/Home/Home";
import Following from "~/pages/Following/Following";
import HeaderOnly from "~/layouts/HeaderOnly/HeaderOnly";
import Profile from "~/pages/Profile/Profile";
import Search from "~/pages/Search/Search";
import Upload from "~/pages/Upload/Upload";
import config from "~/config";

export const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
];
