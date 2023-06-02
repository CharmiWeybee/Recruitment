import {
  GET_DEGREE_BY_ID_FAILURE,
  GET_DEGREE_BY_ID_REQUEST,
  GET_DEGREE_BY_ID_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getDegreeByIdReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DEGREE_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_DEGREE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_DEGREE_BY_ID_FAILURE:
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

export { getDegreeByIdReducer };
