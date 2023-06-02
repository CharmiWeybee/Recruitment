import {
  GET_DEGREE_BY_ID_FAILURE,
  GET_DEGREE_BY_ID_REQUEST,
  GET_DEGREE_BY_ID_SUCCESS,
  GET_MODE_OF_WORK_BY_ID_FAILURE,
  GET_MODE_OF_WORK_BY_ID_REQUEST,
  GET_MODE_OF_WORK_BY_ID_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getModeofWorkByIdReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_MODE_OF_WORK_BY_ID_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_MODE_OF_WORK_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_MODE_OF_WORK_BY_ID_FAILURE:
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

export { getModeofWorkByIdReducer };
