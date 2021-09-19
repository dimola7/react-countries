import Home from "../components/pages/Home";
import Login from "../components/pages/Login";

export const publicRoutes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
];

export const privateRoutes = [
  {
    path: "/home",
    exact: true,
    component: Home,
  },
];
