import React from "react";
import { NavLink } from "react-router-dom";

const NavigationListItem = ({
  isAuthenticated,
  path,
  exact,
  name,
  isPrivate,
  isRestricted,
}) => {
  return (
    <>
      {!isPrivate && !isRestricted && (
        <li className="navListItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {isPrivate && !isRestricted && isAuthenticated && (
        <li className="navListItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
      {!isPrivate && isRestricted && !isAuthenticated && (
        <li className="navListItem" key={path}>
          <NavLink
            to={path}
            exact={exact}
            className="navLink"
            activeClassName="navLinkActive"
          >
            {name.toUpperCase()}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItem;
