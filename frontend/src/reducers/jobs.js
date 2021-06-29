import {
  JOB_DATA_REQUEST,
  JOB_DATA_SUCCESS,
  JOB_DATA_FAILURE,
  JOB_APPLY_SUCCESS,
  JOB_APPLY_REQUEST,
  JOB_APPLY_FAILURE,
  JOB_APPLY_CLEAR,
  JOB_ADD_CLEAR,
  JOB_ADD_SUCCESS,
  JOB_ADD_REQUEST,
  JOB_ADD_FAILURE,
} from "../actions/constants";

export const jobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOB_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case JOB_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
        error: null,
      };
    case JOB_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const applyReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_APPLY_REQUEST:
      return {
        ...state,
        loading_: true,
        job: null,
        error_: null,
      };
    case JOB_APPLY_SUCCESS:
      return {
        ...state,
        loading_: false,
        job: action.payload,
      };
    case JOB_APPLY_FAILURE:
      return {
        ...state,
        loading_: false,
        error_: action.payload,
      };
    case JOB_APPLY_CLEAR:
      return {
        ...state,
        loading_: false,
        error: null,
        job: null,
      };
    default:
      return state;
  }
};

export const jobAddReducer = (state = {}, action) => {
  switch (action.type) {
    case JOB_ADD_REQUEST:
      return {
        ...state,
        loading: true,
        added: null,
        error: null,
      };
    case JOB_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        added: true,
        error: null,
      };
    case JOB_ADD_FAILURE:
      return {
        ...state,
        loading: false,
        added: null,
        error: action.payload,
      };
    case JOB_ADD_CLEAR:
      return {
        ...state,
        loading: false,
        error: null,
        added: null,
      };
    default:
      return state;
  }
};
