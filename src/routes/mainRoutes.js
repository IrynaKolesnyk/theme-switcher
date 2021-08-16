import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    exact: true,
    component: lazy(
      () =>
        import("../pages/homePages/HomePage") /* webpackChunkName: "HomePage" */
    ),
    isPrivate: false,
    isRestricted: false,
  },
  {
    path: "/contacts",
    name: "Contacts",
    exact: false,
    component: lazy(
      () =>
        import(
          "../pages/contactPages/ContactsPage"
        ) /* webpackChunkName: "Contacts" */
    ),
    isPrivate: true,
    isRestricted: false,
  },
  {
    path: "/register",
    name: "Sign Up",
    exact: false,
    component: lazy(
      () =>
        import("../pages/authPage/AuthPage") /* webpackChunkName: "Sign Up" */
    ),
    isPrivate: false,
    isRestricted: true,
  },
  {
    path: "/login",
    name: "Log in",
    exact: false,
    component: lazy(
      () => import("../pages/authPage/AuthPage") /* webpackChunkName: "Login" */
    ),
    isPrivate: false,
    isRestricted: true,
  },
];
