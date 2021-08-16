import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  isAuthenticated,
  path,
  component,
  exact,
  isRestricted,
}) => {
  return isAuthenticated && isRestricted ? (
    <Redirect to="/contacts" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;

// import { connect } from "react-redux";
// import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

// const PublicRoute = ({
//   component: Component,
//   isAuthenticated,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={(props) =>
//       isAuthenticated && routeProps.restricted ? (
//         <Redirect to="/contacts" />
//       ) : (
//         <Component {...props} />
//       )
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PublicRoute);
