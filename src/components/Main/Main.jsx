import React, { Suspense, useContext } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import { ThemeContext } from "../../App";
import MainStyled from "./MainStyled";

const Main = () => {
  const isAuthenticated = useSelector(getIsAuthenticated);
  const { theme } = useContext(ThemeContext);
  return (
    <MainStyled colors={theme.colors}>
      <Suspense
        fallback={
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={80}
            width={80}
            className="loader"
          />
        }
      >
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute
                {...route}
                key={route.path}
                isAuthenticated={isAuthenticated}
              />
            ) : (
              <PublicRoute
                {...route}
                key={route.path}
                isAuthenticated={isAuthenticated}
              />
            )
          )}
        </Switch>
      </Suspense>
    </MainStyled>
  );
};

export default Main;
