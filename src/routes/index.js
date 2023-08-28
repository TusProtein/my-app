import Home from "~/pages/Home";
import Following from "~/pages/Following";
import HeaderOnly from "~/components/Layout/HeaderOnly";
import Profile from "~/pages/Profile";
import Search from "~/pages/Search";
import Upload from "~/pages/Upload";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/following",
    component: Following,
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/upload",
    component: Upload,
    layout: HeaderOnly,
  },
  {
    path: "/search",
    component: Search,
    layout: null,
  },
];