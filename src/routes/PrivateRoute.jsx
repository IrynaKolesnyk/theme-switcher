import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, path, component, exact }) => {
  return !isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PrivateRoute;

// import { connect } from "react-redux";
// import { getIsAuthenticated } from "../../redux/auth/auth-selectors";

// const PrivateRoute = ({
//   component: Component,
//   isAuthenticated,
//   ...routeProps
// }) => (
//   <Route
//     {...routeProps}
//     render={(props) =>
//       isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(PrivateRoute);
