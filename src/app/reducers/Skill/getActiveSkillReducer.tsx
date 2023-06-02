import {
  GET_ACTIVE_SKILL_FAILURE,
  GET_ACTIVE_SKILL_REQUEST,
  GET_ACTIVE_SKILL_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  data: {},
  error: "",
};

const getActiveSkillReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ACTIVE_SKILL_REQUEST:
      return {
        ...state,
        loading: true,
        data: {},
        error: "",
      };
    case GET_ACTIVE_SKILL_SUCCESS:
      return {
        ...state,
        loading: false,
        error: "",
        data: action.payload,
      };
    case GET_ACTIVE_SKILL_FAILURE:
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

export { getActiveSkillReducer };
