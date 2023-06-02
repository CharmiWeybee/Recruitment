import {
  GET_ALL_DEGREE_FAILURE,
  GET_ALL_DEGREE_REQUEST,
  GET_ALL_DEGREE_SUCCESS,
  GET_ALL_RECRUITMENT_STATUS_FAILURE,
  GET_ALL_RECRUITMENT_STATUS_REQUEST,
  GET_ALL_RECRUITMENT_STATUS_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getAllRecruitmentStatusReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_RECRUITMENT_STATUS_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ALL_RECRUITMENT_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ALL_RECRUITMENT_STATUS_FAILURE:
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

export { getAllRecruitmentStatusReducer };
