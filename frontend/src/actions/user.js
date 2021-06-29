import axios from "axios";
import {
  USER_REG_REQUEST,
  USER_REG_SUCCESS,
  USER_REG_FAILURE,
} from "./constants";

const userAction = (form) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REG_REQUEST,
    });
    const options = {
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
      },
    };
    const { data } = await axios.post("/api/v1/user/register", form, options);
    dispatch({
      type: USER_REG_SUCCESS,
      payload: data.data,
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

export default userAction;
