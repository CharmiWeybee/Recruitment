import { showToastMessageFailure } from "../../helpers/helperFunction";
import { DASHBOARD, LOGIN } from "../../helpers/routesConstant";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from "../actionTypes";
import { loginService, logoutService } from "./authService";

const request = (type: string) => {
  return { type: type };
};
const success = (type: string, data: object) => {
  return { type: type, payload: data };
};
const failure = (type: string, err: any) => {
  return { type: type, payload: err };
};

export const loginAction = (
  formData: any,
  callBackSucess: Function,
  callBackFailure: Function
) => {
  return async (dispatch: any) => {
    dispatch(request(LOGIN_REQUEST));
    await loginService(formData).then(
      (result) => {
        dispatch(success(LOGIN_SUCCESS, result));
        // localStorage.setItem("login_user", JSON.stringify(result.data.user));
        callBackSucess(result.data);
      },
      (error) => {
        localStorage.removeItem("login_user");
        callBackFailure();
        showToastMessageFailure("Login unsuccesful. Please try again!");
        dispatch(failure(LOGIN_FAILURE, error.message));
      }
    );
  };
};

export const logout = (callback: any) => {
  return async (dispatch: any) => {
    dispatch(request(LOGOUT_REQUEST));
    await logoutService().then(
      (result: any) => {
        dispatch(success(LOGOUT_SUCCESS, result));
        callback(LOGIN);
      },
      (error: any) => {
        // localStorage.removeItem("login_user");
        dispatch(failure(LOGOUT_FAILURE, error.message));
      }
    );
  };
};

// export const userLogin = (details:any) => {
//   return async (dispatch: any) => {
//     dispatch(request(LOGIN_REQUEST));

//     await loginService(details).then(
//       (result) => {
//         if (result.success) {
//           localStorage.setItem("login_user", JSON.stringify(response.user));
//           return Dispatch({
//             type: Constants.USER_LOG_IN_SUCESS,
//             data: response.user,
//             error:""
//           });
//         } else {
//           localStorage.removeItem("login_user");
//           return Dispatch({
//             type: Constants.USER_LOG_IN_FAILED,
//             data: response,
//           });
//         }
//       },
//       (error) => {
//         localStorage.removeItem("login_user");
//         return Dispatch({ type: Constants.USER_LOG_IN_FAILED, data: error });
//       }
//     );
//   };
// };
