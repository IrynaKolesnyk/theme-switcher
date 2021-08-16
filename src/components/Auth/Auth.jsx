import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { error } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { register, login } from "../../redux/auth/auth-operations";
import { getErrorAuth } from "../../redux/error/error-selectors";
import { useEffect } from "react";
import AuthStyled from "./AuthStyled";
import { resetError } from "../../redux/error/error-actions";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Auth = () => {
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const isError = useSelector(getErrorAuth);

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("hi");
    return () => dispatch(resetError());
  }, []);

  useEffect(() => {
    if (isError !== null)
      error({
        text: isError,
        delay: 1000,
      });
    // return () => dispatch(resetError());
  }, [isError, dispatch]);

  const onRegister = useCallback(
    ({ name, email, password }) => {
      dispatch(register({ name, email, password }));
    },
    [dispatch]
  );

  const onLogin = useCallback(
    ({ email, password }) => {
      dispatch(login({ email, password }));
    },
    [dispatch]
  );

  //   const onHandleChange = (event) => {
  //     const { name, value } = event.target;
  //     if (name === "name") setName(value);
  //     if (name === "email") setEmail(value);
  //     if (name === "password") setPassword(value);
  //     //   this.setState({ [name]: value });
  //   };

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  //   const onHandleSubmit = useCallback(
  //     (event) => {
  //       event.preventDefault();
  //       match.url === "/register"
  //         ? onRegister(name, email, password)
  //         : onLogin(email, password);

  //       setName("");
  //       setEmail("");
  //       setPassword("");
  //     },
  //     [name, email, password, match.url, onRegister, onLogin]
  //   );

  const onHandleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      match.url === "/register" ? onRegister(user) : onLogin(user);
      setUser({ name: "", email: "", password: "" });
    },
    [user, match.url, onRegister, onLogin]
  );

  return (
    <AuthStyled>
      <form onSubmit={onHandleSubmit} autoComplete="off">
        {match.url === "/register" && (
          <TextField
            type="text"
            name="name"
            value={user.name}
            minLength="3"
            required
            onChange={onHandleChange}
            label="Name"
            variant="outlined"
            id="outlined-basic"
            className="marginRight"
          />
        )}
        <TextField
          type="email"
          name="email"
          onChange={onHandleChange}
          value={user.email}
          minLength="3"
          required
          label="Email"
          variant="outlined"
          id="outlined-basic"
          className="marginRight"
        />
        <TextField
          type="password"
          name="password"
          value={user.password}
          onChange={onHandleChange}
          minLength="3"
          required
          label="Password"
          variant="outlined"
          id="outlined-basic"
        />
        <Button
          type="submit"
          className="registerBtn"
          variant="contained"
          color="primary"
        >
          {match.url === "/register" ? "Sign up" : "Login"}
        </Button>
      </form>
    </AuthStyled>
  );
};

export default Auth;

// useReducer?

//   const [error, setError] = useState("");
//   const prevError = useRef("");
// prevError.current = isError;
// useRef

// <button type="submit" className="user-button">
//   {match.url === "/register" ? "Register" : "Login"}
// </button>;

//   <label className="user-label">
//     Name
//     <input
//       type="text"
//       name="name"
//       placeholder="David Gransky"
//       value={name}
//       minLength="3"
//       onChange={onHandleChange}
//       required
//     />
//   </label>

// <label className="user-label">
// Email
// <input
//     type="email"
//     name="email"
//     onChange={onHandleChange}
//     value={email}
//     placeholder="david@gmail.com"
//     minLength="3"
//     autoComplete="off"
//     required
// />
// </label>;

// <label className="user-label">
//   Password
//   <input
//     type="password"
//     name="password"
//     onChange={onHandleChange}
//     value={password}
//     required
//     placeholder="Qwerty123"
//     autoComplete="off"
//   />
// </label>;

// class Auth extends Component {
//   state = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.isError !== this.props.isError && this.props.isError) {
//       error({
//         text: this.props.isError,
//         delay: 1000,
//       });
//       console.log(
//         error({
//           text: this.props.isError,
//           delay: 1000,
//         })
//       );
//     }
//   }

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.location.pathname === "/register"
//       ? this.props.register(this.state)
//       : this.props.login(this.state);
//     this.setState({ name: "", email: "", password: "" });
//   };

//   render() {
//     const { pathname } = this.props.location;
//     const { name, email, password } = this.state;
//     return (
//       <div>
//         <form onSubmit={this.onHandleSubmit} autoComplete="off">
//           {pathname === "/register" && (
//             <label className="user-label">
//               Name
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="David Gransky"
//                 value={name}
//                 minLength="3"
//                 onChange={this.onHandleChange}
//                 required
//               />
//             </label>
//           )}
//           <label className="user-label">
//             Email
//             <input
//               type="email"
//               name="email"
//               onChange={this.onHandleChange}
//               value={email}
//               placeholder="david@gmail.com"
//               minLength="3"
//               autoComplete="off"
//               required
//             />
//           </label>
//           <label className="user-label">
//             Password
//             <input
//               type="password"
//               name="password"
//               onChange={this.onHandleChange}
//               value={password}
//               required
//               placeholder="Qwerty123"
//               autoComplete="off"
//             />
//           </label>
//           <button type="submit" className="user-button">
//             {pathname === "/register" ? "Register" : "Login"}
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   isError: getErrorAuth(state),
// });

// export default connect(mapStateToProps, { register, login })(withRouter(Auth));
