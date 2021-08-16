import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import NavigationListItem from "./NavigationListItem";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";

const Navigation = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <nav>
      <ul className="siteNav">
        {mainRoutes.map((route) => (
          <NavigationListItem
            {...route}
            key={route.path}
            isAuthenticated={isAuthenticated}
          />
        ))}
        {isAuthenticated && <UserMenu />}
      </ul>
    </nav>
  );
};

export default Navigation;

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });
