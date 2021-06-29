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
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_FAILURE,
} from "../actions/constants";

export const userReducer = (state = { error: [] }, action) => {
  switch (action.type) {
    case USER_REG_REQUEST:
    case USER_LOGIN_REQUEST:
    case GET_USER_REQUEST:
    case USER_LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_REG_SUCCESS:
      return {
        ...state,
        loading: false,
        registered: true,
        error: null,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        registered: false,
        user: action.payload,
        error: null,
      };

    case USER_LOGIN_SUCCESS:
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case USER_REG_FAILURE:
    case USER_LOGIN_FAILURE:
    case GET_USER_FAILURE:
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
