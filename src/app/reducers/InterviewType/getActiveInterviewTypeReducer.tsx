import {
  GET_ACTIVE_INTERVIEW_TYPE_FAILURE,
  GET_ACTIVE_INTERVIEW_TYPE_REQUEST,
  GET_ACTIVE_INTERVIEW_TYPE_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getActiveInterviewTypeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ACTIVE_INTERVIEW_TYPE_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ACTIVE_INTERVIEW_TYPE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ACTIVE_INTERVIEW_TYPE_FAILURE:
      return {
        ...state,
        loading: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export { getActiveInterviewTypeReducer };
