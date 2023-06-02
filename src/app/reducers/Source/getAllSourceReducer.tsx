import {
  GET_ALL_DEGREE_FAILURE,
  GET_ALL_DEGREE_REQUEST,
  GET_ALL_DEGREE_SUCCESS,
  GET_ALL_SOURCE_FAILURE,
  GET_ALL_SOURCE_REQUEST,
  GET_ALL_SOURCE_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getAllSourceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_SOURCE_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ALL_SOURCE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ALL_SOURCE_FAILURE:
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

export { getAllSourceReducer };
