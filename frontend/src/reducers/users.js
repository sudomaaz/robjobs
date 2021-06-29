import {
  USER_REG_REQUEST,
  USER_REG_SUCCESS,
  USER_REG_FAILURE,
  USER_LOGIN_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
} from "../actions/constants";

export const userRegReducer = (state = { error: [] }, action) => {
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

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
