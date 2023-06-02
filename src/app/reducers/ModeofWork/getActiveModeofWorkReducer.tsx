import {
  GET_ACTIVE_MODE_OF_WORK_FAILURE,
  GET_ACTIVE_MODE_OF_WORK_REQUEST,
  GET_ACTIVE_MODE_OF_WORK_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getActiveModeofWorkReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ACTIVE_MODE_OF_WORK_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ACTIVE_MODE_OF_WORK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ACTIVE_MODE_OF_WORK_FAILURE:
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

export { getActiveModeofWorkReducer };
