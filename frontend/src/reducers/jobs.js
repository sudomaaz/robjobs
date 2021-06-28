import {
  JOB_DATA_REQUEST,
  JOB_DATA_SUCCESS,
  JOB_DATA_FAILURE,
} from "../actions/constants";

const jobReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOB_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case JOB_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
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

export default jobReducer;
