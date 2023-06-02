import { connect } from "react-redux";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import InputPass from "../../common/inputPass/inputPass";
import { PLEASE_WAIT, REQUIRED } from "../../../helpers/globalConstant";
import { loginAction } from "../../../reducers/Auth/authAction";
import { useAuth } from "../core/Auth";
import { DASHBOARD } from "../../../helpers/routesConstant";

interface Props {
  postLoginDetails: Function;
  res: any;
  error: any;
  loading: boolean;
}

const Login = ({ postLoginDetails, res, error, loading }: Props) => {
  const navigate = useNavigate();
  const { saveAuth, setCurrentUser } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required(REQUIRED),
    password: Yup.string().required(REQUIRED),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      // postLoginDetails(values, navigate);
      postLoginDetails(
        values,
        (data: any) => {
          console.log(data, "login data");
          data.user && setCurrentUser(data.user);
          data.authorisation && saveAuth(data.authorisation);
          navigate(`${DASHBOARD}`);
        },
        () => {
          saveAuth(undefined);
        }
      );
    },
  });

  return (
    <div className="container-xl my-9 d-flex justify-content-center">
      <form
        className="form w-100"
        onSubmit={formik.handleSubmit}
        noValidate
        id="kt_login_signin_form"
      >
        <div className="mb-11 logo-name d-flex justify-content-center">
          recriutment
        </div>
        <div className="card mb-5 mb-xl-10 p-9">
          <div className="mb-5">
            <h1 className="head6 text-gray-700">Login</h1>
          </div>

          {error && (
            <div className="mb-lg-8 alert alert-danger">
              <div className="alert-text font-weight-bold">{error}</div>
            </div>
          )}

          <div className="fv-row mb-8">
            <input
              placeholder="Email"
              {...formik.getFieldProps("email")}
              className={clsx(
                "form-control bg-transparent",
                { "is-invalid": formik.touched.email && formik.errors.email },
                {
                  "is-valid": formik.touched.email && !formik.errors.email,
                }
              )}
              type="email"
              name="email"
              autoComplete="off"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik.errors.email}</span>
                </div>
              </div>
            )}
          </div>

          <div className="fv-row mb-5">
            <InputPass
              formik={formik}
              fieldProp="password"
              placeholder="Password"
              touched={formik.touched.password}
              errors={formik.errors.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>
          <div className="d-grid">
            <button
              type="submit"
              id="kt_sign_in_submit"
              className="btn btn-primary"
              disabled={formik.isSubmitting || !formik.isValid}
            >
              {!loading && <span className="indicator-label">Log In</span>}
              {loading && PLEASE_WAIT}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
    res: state.loginReducer.res,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    postLoginDetails: (
      values: any,
      callBackSuccess: Function,
      callBackFailure: Function
    ) => dispatch(loginAction(values, callBackSuccess, callBackFailure)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
