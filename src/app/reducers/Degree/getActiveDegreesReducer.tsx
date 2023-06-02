import {
  GET_ACTIVE_DEGREE_FAILURE,
  GET_ACTIVE_DEGREE_REQUEST,
  GET_ACTIVE_DEGREE_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getActiveDegreeReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ACTIVE_DEGREE_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ACTIVE_DEGREE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ACTIVE_DEGREE_FAILURE:
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

export { getActiveDegreeReducer };
