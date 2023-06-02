import {
  GET_ACTIVE_SOURCE_FAILURE,
  GET_ACTIVE_SOURCE_REQUEST,
  GET_ACTIVE_SOURCE_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getActiveSourceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ACTIVE_SOURCE_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ACTIVE_SOURCE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ACTIVE_SOURCE_FAILURE:
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

export { getActiveSourceReducer };
