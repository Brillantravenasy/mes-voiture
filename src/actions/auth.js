import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from "./types";
import UserService from "../services/userService";

export const login = (user) => (dispatch) => {
  return UserService.login(user).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {

      dispatch({
        type: LOGIN_FAIL,
      });

 

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  UserService.logout();
  dispatch({
    type: LOGOUT,
  });
};