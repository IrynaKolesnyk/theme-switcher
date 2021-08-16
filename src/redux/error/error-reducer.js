import { createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserError,
  getCurrentUserRequest,
  loginError,
  loginRequest,
  logoutError,
  logoutRequest,
  registerError,
  registerRequest,
} from "../auth/auth-actions";
import {
  addContactError,
  addContactRequest,
  deleteContactError,
  deleteContactRequest,
  getContactError,
  getContactRequest,
} from "../phoneBook/phoneBookActions";
import { resetError } from "./error-actions";

const setError = (_, { payload }) => payload;
const refreshError = () => null;

const error = createReducer(null, {
  [resetError]: refreshError,
  [registerRequest]: refreshError,
  [loginRequest]: refreshError,
  [logoutRequest]: refreshError,
  [getCurrentUserRequest]: refreshError,
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
  [addContactRequest]: refreshError,
  [addContactError]: setError,
  [deleteContactRequest]: refreshError,
  [deleteContactError]: setError,
  [getContactRequest]: refreshError,
  [getContactError]: setError,
});

export default error;
