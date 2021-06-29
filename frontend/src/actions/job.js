import axios from "axios";
import {
  JOB_DATA_REQUEST,
  JOB_DATA_SUCCESS,
  JOB_DATA_FAILURE,
} from "./constants";

const jobAction = (searchQuery) => async (dispatch) => {
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

export default jobAction;
