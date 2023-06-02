import {
  GET_INTERVIEW_FAILURE,
  GET_INTERVIEW_REQUEST,
  GET_INTERVIEW_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const viewInterviewReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_INTERVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_INTERVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_INTERVIEW_FAILURE:
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

export { viewInterviewReducer };
