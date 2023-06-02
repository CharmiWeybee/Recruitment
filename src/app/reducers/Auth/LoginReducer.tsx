import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const loginReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        res: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { loginReducer };
