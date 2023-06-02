import {
  GET_ALL_INTERVIEWER_FAILURE,
  GET_ALL_INTERVIEWER_REQUEST,
  GET_ALL_INTERVIEWER_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getAllInterviewerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_INTERVIEWER_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ALL_INTERVIEWER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ALL_INTERVIEWER_FAILURE:
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

export { getAllInterviewerReducer };
