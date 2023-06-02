import {
  GET_ACTIVE_CANDIDATE_FAILURE,
  GET_ACTIVE_CANDIDATE_REQUEST,
  GET_ACTIVE_CANDIDATE_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getActiveCandidateReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ACTIVE_CANDIDATE_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ACTIVE_CANDIDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload.data,
      };
    case GET_ACTIVE_CANDIDATE_FAILURE:
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

export { getActiveCandidateReducer };
