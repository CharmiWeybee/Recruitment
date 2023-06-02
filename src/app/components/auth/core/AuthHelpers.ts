import { AxiosRequestConfig } from 'axios';
import { AuthModel } from './_models';

const AUTH_LOCAL_STORAGE_KEY = 'kt-auth-react-v'
const AUTH_ROLE = "role";
const getAuth = (): AuthModel | undefined => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
  if (!lsValue) {
    return
  }


  try {
    const auth: AuthModel = JSON.parse(lsValue) as AuthModel
    if (auth) {
      // You can easily check auth_token expiration also
      return auth
    }
  } catch (error) {
  }
}

const setAuth = (auth: AuthModel) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(auth)
    localStorage.setItem(AUTH_LOCAL_STORAGE_KEY, lsValue);
    localStorage.setItem(AUTH_ROLE, auth.role);

  } catch (error) {
  }
}

export const getRole = () => {
  const roles = localStorage.getItem(AUTH_ROLE);
  return roles
}

const removeAuth = () => {
  if (!localStorage) {
    return
  }

  try {
    localStorage.removeItem(AUTH_LOCAL_STORAGE_KEY)
  } catch (error) {
  }
}

// export function setupAxios(axios: any) {
//   axios.defaults.headers.Accept = 'application/json'
//   axios.interceptors.request.use(
//     (config: {headers: {Authorization: string}}) => {
//       const auth = getAuth()
//       if (auth && auth.api_token) {
//         config.headers.Authorization = `Bearer ${auth.api_token}`
//       }
//       return config
//     },
//     (err: any) => Promise.reject(err)
//   )
// }
export function setupAxios(axios: any) {
  axios.defaults.headers.Accept = 'application/json'
  axios.interceptors.request.use(

    (config: AxiosRequestConfig): AxiosRequestConfig => {
      const auth = getAuth()
      if (auth && config.headers && auth.token) {
        config.headers.Authorization = `Bearer ${auth.token}`
      }

      const abortController = new AbortController();
      const timeoutId = setTimeout(
        () => abortController.abort(), 20000)
      return { ...config, timeoutId, signal: abortController.signal } as AxiosRequestConfig

    },
    (err: any) => Promise.reject(err)
  )
}
export { getAuth, setAuth, removeAuth, AUTH_LOCAL_STORAGE_KEY }
