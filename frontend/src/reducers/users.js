import {
  USER_REG_REQUEST,
  USER_REG_SUCCESS,
  USER_REG_FAILURE,
} from "../actions/constants";

const userReducer = (state = { error: [] }, action) => {
  switch (action.type) {
    case USER_REG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_REG_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
      };
    case USER_REG_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
