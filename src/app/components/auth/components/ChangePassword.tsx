/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { IUpdatePassword, updatePassword } from "../../common/SettingsModal";
import { DISCARD, REQUIRED } from "../../../helpers/globalConstant";
import { connect } from "react-redux";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required(REQUIRED),
  newPassword: Yup.string()
    .required(REQUIRED)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/,
      "Wrong password format"
    )
    .notOneOf(
      [Yup.ref("currentPassword"), null],
      "New password must be different from current password"
    ),
  passwordConfirmation: Yup.string()
    .required(REQUIRED)
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
});

export interface props {
  // postChangePassDetails: Function;
  res: any;
  error: any;
  loading: boolean;
}
const ChangePassword: React.FC<props> = ({ res, error, loading }) => {
  const [showPasswordForm, setPasswordForm] = useState<boolean>(false);

  const formik2 = useFormik<IUpdatePassword>({
    initialValues: updatePassword,
    validationSchema,
    onSubmit: (values) => {
      // postChangePassDetails(values);
    },
  });

  return (
    <div className="card mb-5 mb-xl-10">
      <div
        className="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_signin_method"
      >
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Update Password</h3>
        </div>
      </div>

      <div id="kt_account_signin_method" className="collapse show">
        <div className="card-body border-top p-9">
          <div className="d-flex flex-wrap align-items-center mb-10">
            {/* {error && (
              <div className="mb-lg-8 alert alert-danger">
                <div className="alert-text font-weight-bold">{error}</div>
              </div>
            )} */}
            <div
              id="kt_signin_password"
              className={" " + (showPasswordForm && "d-none")}
            >
              <div className="fs-6 fw-bolder mb-1">Password</div>
              <div className="fw-bold text-gray-600">************</div>
            </div>

            <div
              id="kt_signin_password_edit"
              className={"flex-row-fluid " + (!showPasswordForm && "d-none")}
            >
              <form
                onSubmit={formik2.handleSubmit}
                id="kt_signin_change_password"
                className="form"
                noValidate
              >
                <div className="row mb-1">
                  <div className="col-lg-4">
                    <div className="fv-row mb-0">
                      <label
                        htmlFor="currentpassword "
                        className="form-label fs-6 fw-bolder mb-3 required "
                      >
                        Current Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg form-control-solid "
                        id="currentpassword"
                        {...formik2.getFieldProps("currentPassword")}
                      />
                      {formik2.touched.currentPassword &&
                        formik2.errors.currentPassword && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik2.errors.currentPassword}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="fv-row mb-0">
                      <label
                        htmlFor="newpassword"
                        className="form-label fs-6 fw-bolder mb-3 required"
                      >
                        New Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg form-control-solid "
                        id="newpassword"
                        {...formik2.getFieldProps("newPassword")}
                      />
                      {formik2.touched.newPassword &&
                        formik2.errors.newPassword && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik2.errors.newPassword}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="fv-row mb-0">
                      <label
                        htmlFor="confirmpassword"
                        className="form-label fs-6 fw-bolder mb-3 required"
                      >
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg form-control-solid "
                        id="confirmpassword"
                        {...formik2.getFieldProps("passwordConfirmation")}
                      />
                      {formik2.touched.passwordConfirmation &&
                        formik2.errors.passwordConfirmation && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik2.errors.passwordConfirmation}
                            </div>
                          </div>
                        )}
                    </div>
                  </div>
                </div>

                <div className="form-text mb-5">
                  Password must be at least 8 character and contain symbols
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    onClick={() => {
                      setPasswordForm(false);
                    }}
                    id="kt_password_cancel"
                    type="button"
                    className="btn btn-light btn-active-light-primary me-4"
                  >
                    {DISCARD}
                  </button>
                  <button
                    id="kt_password_submit"
                    type="submit"
                    className="btn btn-primary  px-6"
                  >
                    {!loading && "Update Password"}
                    {loading && (
                      <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                      >
                        Please wait...{" "}
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div
              id="kt_signin_password_button"
              className={"ms-auto " + (showPasswordForm && "d-none")}
            >
              <button
                onClick={() => {
                  setPasswordForm(true);
                }}
                className="btn btn-light btn-active-light-primary"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ChangePassword };
const mapStateToProps = (state: any) => {
  return {
    loading: state.changePasswordReducer.loading,
    error: state.changePasswordReducer.error,
    res: state.changePasswordReducer.res,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // postChangePassDetails: (newPass: any) => dispatch(changePassword(newPass)),
  };
};
const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword);
export default connectComponent;
