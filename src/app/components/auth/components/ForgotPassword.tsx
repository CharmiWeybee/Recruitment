import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import {
  DISCARD,
  PLEASE_WAIT,
  REQUIRED,
  SUBMIT,
} from "../../../helpers/globalConstant";
import { connect } from "react-redux";

export interface props {
  // postForgotPassDetails: Function;
  error: string;
  loading: boolean;
  res: any;
}

const ForgotPassword: React.FC<props> = ({ error, loading, res }) => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(REQUIRED),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // postForgotPassDetails(values.email);
    },
  });

  return (
    <form
      className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      noValidate
      id="kt_login_password_reset_form"
      onSubmit={formik.handleSubmit}
    >
      <div className="text-center mb-10">
        <h1 className="text-dark fw-bolder mb-3">Forgot Password ?</h1>

        <div className="text-gray-500 fw-semibold fs-6">
          Enter your email to reset your password.
        </div>
      </div>

      {error && (
        <div className="mb-lg-8 alert alert-danger">
          <div className="alert-text font-weight-bold">{error}</div>
        </div>
      )}

      {res.success && (
        <div className="mb-10 bg-light-info p-8 rounded">
          <div className="text-info">We have sent a password reset link.</div>
        </div>
      )}

      <div className="fv-row mb-8">
        <label className="form-label fw-bolder text-gray-900 fs-6">Email</label>
        <input
          type="email"
          placeholder="Email"
          autoComplete="off"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control bg-transparent",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex flex-wrap justify-content-center pb-lg-0">
        <button
          type="submit"
          id="kt_password_reset_submit"
          className="btn btn-primary me-4"
        >
          {!loading && <span className="indicator-label">{SUBMIT}</span>}
          {loading && PLEASE_WAIT}
        </button>

        <button
          type="button"
          id="kt_login_password_reset_form_cancel_button"
          className="btn btn-light"
          disabled={loading}
          onClick={() => navigate("/auth/login")}
        >
          {DISCARD}
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.forgotPasswordReducer.loading,
    error: state.forgotPasswordReducer.error,
    res: state.forgotPasswordReducer.res,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // postForgotPassDetails: (email: any) => dispatch(forgotPassword(email)),
  };
};
const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
export default connectComponent;
