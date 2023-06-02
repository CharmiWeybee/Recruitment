import { axiosInstance } from "../../helpers/apiRequest";
import { LOGIN, LOGOUT } from "../../helpers/config";

export const loginService = (loginDetails: any) => {
  const res = axiosInstance.post(LOGIN, loginDetails);
  return res;
};

export const logoutService = () => {
  const res = axiosInstance.post(LOGOUT);
  return res;
};
