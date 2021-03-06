import axios from "axios";
import {
  USER_REG_REQUEST,
  USER_REG_SUCCESS,
  USER_REG_FAILURE,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  GET_USER_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_JOB_FAILURE,
  USER_JOB_SUCCESS,
  USER_JOB_REQUEST,
} from "./constants";

export const userRegAction = (form) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REG_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
      },
    };
    await axios.post("/api/v1/user/register", form, options);
    dispatch({
      type: USER_REG_SUCCESS,
    });
  } catch (err) {
    let error;
    if (err?.response?.data?.message) error = err.response.data.message;
    else error = ["Some error occured"];
    if (!Array.isArray(error)) error = [error];
    dispatch({
      type: USER_REG_FAILURE,
      payload: error,
    });
  }
};

export const userLoginAction = (login) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": `application/json`,
      },
    };
    const { data } = await axios.post("/api/v1/user/login", login, options);
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    let error;
    if (err?.response?.data?.message) error = err.response.data.message;
    else error = "Some error occured";
    dispatch({
      type: USER_LOGIN_FAILURE,
      payload: error,
    });
  }
};

export const loggedAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": `application/json`,
      },
    };
    const { data } = await axios.get("/api/v1/user/me", options);
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
    });
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGOUT_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": `application/json`,
      },
    };
    await axios.get("/api/v1/user/logout", options);
    dispatch({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (err) {
    let error;
    if (err?.response?.data?.message) error = err.response.data.message;
    else error = "Some error occured";
    dispatch({
      type: USER_LOGOUT_FAILURE,
      payload: error,
    });
  }
};

export const userJobAction = (uid) => async (dispatch) => {
  try {
    dispatch({
      type: USER_JOB_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": `application/json`,
      },
    };
    const { data } = await axios.get("/api/v1/jobs/" + uid, options);
    dispatch({
      type: USER_JOB_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    let error;
    if (err?.response?.data?.message) error = err.response.data.message;
    else error = "Some error occured";
    dispatch({
      type: USER_JOB_FAILURE,
      payload: error,
    });
  }
};
