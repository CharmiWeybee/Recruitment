import { useFormik } from "formik";
import { connect } from "react-redux";
import { PLEASE_WAIT, REQUIRED } from "../../../helpers/globalConstant";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import * as Yup from "yup";
import Loader from "../../common/loader/Loader";
import clsx from "clsx";
import { convert } from "../../../helpers/helperFunction";

export interface Props {
  posting: boolean;
  postRes: any;
  // error: string;
  // postUserDetails: Function;
  userDetails: any;
  getUserDetailError: any;
  loading: boolean;
  // getUserDetails: Function;
}

const EditProfile: React.FC<Props> = ({
  posting,
  postRes,
  userDetails,
  loading,
}) => {
  const initialValues = {
    firstName: userDetails?.data?.firstName || "",
    lastName: userDetails?.data?.lastName || "",
    mobile: userDetails?.data?.mobile || "",
    address: userDetails?.data?.address || "",
    email: userDetails?.data?.email || "",
    dateOfBirth: userDetails?.data?.dateOfBirth || null,
    joiningDate: userDetails?.data?.joiningDate || null,
    aadharNo: userDetails?.data?.aadharNo || "",
    panNo: userDetails?.data?.panNo || "",
    role: userDetails?.data?.role,
    userCode: userDetails?.data?.userCode,
    designationId: userDetails?.data?.designationId,
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(REQUIRED).min(3, "Minimum 3 characters"),
    lastName: Yup.string().required(REQUIRED).min(3, "Minimum 3 characters"),
    mobile: Yup.string()
      .nullable()
      .required(REQUIRED)
      .matches(/^[0-9]{10}$/, "Wrong contact format"),
  });

  const navigate = useNavigate();
  // useEffect(() => {
  //   getUserDetails();
  // }, [getUserDetails]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      // postUserDetails(values, () => navigate(PROFILE));
    },
  });

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 align-items-center">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Profile Details</h3>
        </div>
      </div>
      {loading && <Loader />}
      {userDetails.data && (
        <form
          className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
          noValidate
          id="kt_login_signup_form"
          onSubmit={formik.handleSubmit}
        >
          <div className="card-body border-top p-9">
            <>
              <div className="row mb-lg-6">
                <div className="col-lg-6">
                  <label
                    className="col-form-label fw-bold fs-6 required"
                    htmlFor={"firstName"}
                  >
                    First Name
                  </label>
                  <div className="">
                    <input
                      placeholder="First Name"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("firstName")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.firstName && formik.errors.firstName,
                        },
                        {
                          "is-valid":
                            formik.touched.firstName &&
                            !formik.errors.firstName,
                        }
                      )}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{`${formik.errors.firstName}`}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className=" col-form-label fw-bold fs-6 required">
                    Last Name
                  </label>
                  <div className="">
                    <input
                      placeholder="Last Name"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("lastName")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.lastName && formik.errors.lastName,
                        },
                        {
                          "is-valid":
                            formik.touched.lastName && !formik.errors.lastName,
                        }
                      )}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{`${formik.errors.lastName}`}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-lg-6">
                <label className="col-form-label fw-bold fs-6 required">
                  Address
                </label>
                <div className="">
                  <textarea
                    placeholder="Address"
                    autoComplete="off"
                    {...formik.getFieldProps("address")}
                    className={clsx("form-control bg-transparent")}
                  />
                </div>
              </div>
              <div className="row mb-lg-6">
                <div className="col-lg-6">
                  <label className=" col-form-label fw-bold fs-6 required">
                    Email
                  </label>
                  <div className="">
                    <input
                      placeholder="Email"
                      type="email"
                      autoComplete="off"
                      {...formik.getFieldProps("email")}
                      className={clsx("form-control bg-transparent", {
                        "is-invalid":
                          formik.touched.email && formik.errors.email,
                      })}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className=" col-form-label fw-bold fs-6 required ">
                    Mobile
                  </label>
                  <div className="">
                    <input
                      placeholder="Mobile"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("mobile")}
                      className={clsx("form-control bg-transparent")}
                    />
                  </div>
                </div>
              </div>

              <div className="row mb-lg-6">
                <div className="col-lg-6">
                  <label
                    className=" col-form-label fw-bold fs-6 required"
                    htmlFor="dateOfBirth"
                  >
                    Date Of Birth
                  </label>
                  <div className="">
                    <input
                      placeholder=" Date Of Birth"
                      type="date"
                      autoComplete="off"
                      name={"dateOfBirth"}
                      value={convert(formik.values.dateOfBirth)}
                      // {...formik.getFieldProps("dateOfBirth")}
                      onChange={(e: any) =>
                        formik.setFieldValue("dateOfBirth", e.target.value)
                      }
                      className={clsx("form-control bg-transparent")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <label
                    className=" col-form-label fw-bold fs-6 required"
                    htmlFor="joiningDate"
                  >
                    Joining Date
                  </label>
                  <div className="">
                    <input
                      placeholder="joiningDate"
                      type="date"
                      value={convert(formik.values.joiningDate)}
                      onChange={(e: any) =>
                        formik.setFieldValue("joiningDate", e.target.value)
                      }
                      autoComplete="off"
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.joiningDate &&
                            formik.errors.joiningDate,
                        },
                        {
                          "is-valid":
                            formik.touched.joiningDate &&
                            !formik.errors.joiningDate,
                        }
                      )}
                    />
                    {formik.touched.joiningDate && formik.errors.joiningDate && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{`${formik.errors.joiningDate}`}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row mb-lg-6">
                <div className="col-lg-6">
                  <label className=" col-form-label fw-bold fs-6 required">
                    Aadhar Number
                  </label>
                  <div className="">
                    <input
                      placeholder="Aadhar Number"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("aadharNo")}
                      className={clsx("form-control bg-transparent")}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <label className=" col-form-label fw-bold fs-6 required">
                    Pan Number
                  </label>
                  <div className="">
                    <input
                      placeholder="Pan Number"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("panNo")}
                      className={clsx("form-control bg-transparent")}
                    />
                  </div>
                </div>
              </div>
            </>
          </div>

          <div className="card-footer d-flex justify-content-end py-6 px-9">
            {/* <Link to={PROFILE}>
              <button
                type="reset"
                className="btn btn-light btn-active-light-primary me-2"
              >
                Discard
              </button>
            </Link> */}
            <button
              type="submit"
              className="btn btn-primary"
              disabled={posting}
            >
              {!posting && " Save Changes "}
              {posting && (
                <span
                  className="indicator-progress"
                  style={{ display: "block" }}
                >
                  {PLEASE_WAIT}
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posting: state.postUserDetailReducer.loading,
    error: state.postUserDetailReducer.error,
    postRes: state.postUserDetailReducer.res,

    loading: state.userDetailsReducer.loading,
    getUserDetailError: state.userDetailsReducer.error,
    userDetails: state.userDetailsReducer.userDetails,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    // postUserDetails: (details: any, callback: Function) => dispatch(postUserDetails(details, callback)),
    // getUserDetails: () => dispatch(fetchUserDetails()),
  };
};
const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
export default connectComponent;
