import {
  ADD_INTERVIEW_FAILURE,
  ADD_INTERVIEW_REQUEST,
  ADD_INTERVIEW_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

interface actionObject {
  type: string;
  payload: any;
}

const addInterviewReducer = (state = initialState, action: actionObject) => {
  switch (action.type) {
    case ADD_INTERVIEW_REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case ADD_INTERVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case ADD_INTERVIEW_FAILURE:
      return {
        ...state,
        loading: false,
        data: "",
        error: action.payload,
      };
    default:
      return state;
  }
};

export { addInterviewReducer };
