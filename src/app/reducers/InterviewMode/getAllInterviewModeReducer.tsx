import {
  GET_ALL_INTERVIEW_MODE_FAILURE,
  GET_ALL_INTERVIEW_MODE_REQUEST,
  GET_ALL_INTERVIEW_MODE_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getAllInterviewModeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_INTERVIEW_MODE_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ALL_INTERVIEW_MODE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ALL_INTERVIEW_MODE_FAILURE:
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

export { getAllInterviewModeReducer };
