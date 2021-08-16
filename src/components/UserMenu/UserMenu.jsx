import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../../redux/auth/auth-selectors";
import defaultAvatar from "../../images/defaultAvatar.png";
import { logOut } from "../../redux/auth/auth-operations";
import UserMenuStyled from "./UserMenuStyled";
import Button from "@material-ui/core/Button";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const onLogout = () => dispatch(logOut());

  return (
    <UserMenuStyled>
      <img
        src={defaultAvatar}
        width="30px"
        alt={name}
        className="userMenuImg"
      />
      <h3 className="userMenuTitle">Welcome, {name}</h3>
      <Button
        type="button"
        onClick={onLogout}
        variant="outlined"
        color="primary"
      >
        Log Out
      </Button>
    </UserMenuStyled>
  );
};

export default UserMenu;

// const UserMenu = ({ name, onLogout }) => {
//   return (
//     <UserMenuStyled>
//       <img
//         src={defaultAvatar}
//         width="30px"
//         alt={name}
//         className="userMenuImg"
//       />
//       <h3 className="userMenuTitle">Welcome, {name}</h3>
//       <Button
//         type="button"
//         onClick={onLogout}
//         variant="outlined"
//         color="primary"
//       >
//         Log Out
//       </Button>
//     </UserMenuStyled>
//   );
// };

// const mapStateToProps = (state) => ({
//   name: getUsername(state),
// });

// const mapDispatchToProps = {
//   onLogout: logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
