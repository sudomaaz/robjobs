import axios from "axios";
import {
  JOB_DATA_REQUEST,
  JOB_DATA_SUCCESS,
  JOB_DATA_FAILURE,
  JOB_APPLY_FAILURE,
  JOB_APPLY_REQUEST,
  JOB_APPLY_SUCCESS,
  JOB_APPLY_CLEAR,
  JOB_ADD_FAILURE,
  JOB_ADD_REQUEST,
  JOB_ADD_SUCCESS,
  JOB_ADD_CLEAR,
} from "./constants";

export const jobAction = (searchQuery) => async (dispatch) => {
  try {
    dispatch({
      type: JOB_DATA_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("/api/v1/jobs" + searchQuery, options);
    dispatch({
      type: JOB_DATA_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    let error;
    if (err?.response?.data?.message) error = err.response.data.message;
    else error = "Some error occured";
    dispatch({
      type: JOB_DATA_FAILURE,
      payload: error,
    });
  }
};

export const applyAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: JOB_APPLY_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get("/api/v1/job/" + id, options);
    dispatch({
      type: JOB_APPLY_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    let error;
    if (err?.response?.data?.message) error = err.response.data.message;
    else error = "Some error occured";
    dispatch({
      type: JOB_APPLY_FAILURE,
      payload: error,
    });
  }
};

export const jobAddAction = (jobData) => async (dispatch) => {
  try {
    dispatch({
      type: JOB_ADD_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("/api/v1/jobs", jobData, options);
    dispatch({
      type: JOB_ADD_SUCCESS,
      payload: data.data,
    });
  } catch (err) {
    let error;
    if (err?.response?.data?.message) error = err.response.data.message;
    else error = "Some error occured";
    dispatch({
      type: JOB_ADD_FAILURE,
      payload: error,
    });
  }
};

export const clearAction = () => async (dispatch) => {
  try {
    dispatch({
      type: JOB_APPLY_CLEAR,
    });
    dispatch({
      type: JOB_ADD_CLEAR,
    });
  } catch (err) {}
};
