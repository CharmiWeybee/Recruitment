import React, { useEffect } from "react";
import clsx from "clsx";
import { useFormik } from "formik";
import { DISCARD, SUBMIT } from "../../../../helpers/globalConstant";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getFormData } from "../../../../helpers/helperFunction";
import Loader from "../../../common/loader/Loader";

import {
  fetchInterviewTypeById,
  postInterviewType,
  updateInterviewType,
} from "../../../../reducers/mastersReducers/mastersAction";
import { VIEW_INTERVIEW_TYPE } from "../../../../helpers/routesConstant";

interface Props {
  postData: any;
  getDataById: any;
  dataRes: any;
  dataLoading: any;
  updateData: any;
}

const AddInterviewType = ({
  postData,
  dataLoading,
  dataRes,
  getDataById,
  updateData,
}: Props) => {
  const navigate = useNavigate();
  const params = useParams();

  const initialValues = {
    interview_type: "",
    status: true,
  };

  useEffect(() => {
    if (params.id) {
      getDataById(params.id);
    }
  }, [params.id]);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: params.id
      ? { ...dataRes, status: dataRes.status === 0 ? false : true }
      : initialValues,
    onSubmit: async () => {
      const newFormData: any = getFormData(formik.values);
      params.id
        ? updateData(formik.values, navigate, params.id)
        : postData(newFormData, navigate);
    },
  });

  return (
    <>
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0 align-items-center">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Add Interview Type</h3>
          </div>
        </div>
        {dataLoading && <Loader />}

        {!dataLoading && formik.values && (
          <form
            className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
            noValidate
            id="kt_login_signup_form"
            onSubmit={formik.handleSubmit}
          >
            <div className="card-body border-top p-9">
              <div className="row mb-lg-6">
                <div className="col-lg-12">
                  <label className="col-form-label fw-bold fs-6 required">
                    Interview Type
                  </label>
                  <div className="">
                    <input
                      placeholder="Interview Type"
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps("interview_type")}
                      className={clsx(
                        "form-control bg-transparent",
                        {
                          "is-invalid":
                            formik.touched.interview_type &&
                            formik.errors.interview_type,
                        },
                        {
                          "is-valid":
                            formik.touched.interview_type &&
                            !formik.errors.interview_type,
                        }
                      )}
                    />
                    {formik.touched.nterview_type &&
                      formik.errors.nterview_type && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">{`${formik.errors.nterview_type}`}</span>
                          </div>
                        </div>
                      )}
                  </div>
                </div>
                <div className="col-lg-12">
                  <label className="col-form-label fw-bold fs-6 required">
                    Status
                  </label>
                  <div className="input-group-prepend">
                    <div className="">
                      <input
                        id="status"
                        name="status"
                        type="checkbox"
                        checked={formik.values.status}
                        className="form-check-input"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      <span className="col-form-label fw-bold fs-6 ">
                        &nbsp; {formik.values.status ? "Active" : "InActive"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer d-flex justify-content-end py-6 px-9">
              <button
                type="button"
                className="btn btn-light btn-active-light-primary me-4"
                onClick={() => navigate(VIEW_INTERVIEW_TYPE)}
              >
                {DISCARD}
              </button>
              <button
                type="submit"
                id="kt_sign_up_submit"
                className="btn btn-primary"
                disabled={formik.isSubmitting}
              >
                <span className="indicator-label">{SUBMIT}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    dataRes: state.getInterviewTypeByIdReducer.data,
    dataLoading: state.getInterviewTypeByIdReducer.loading,
    dataErr: state.getInterviewTypeByIdReducer.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    postData: (data: object, callback: Function) =>
      dispatch(postInterviewType(data, callback)),
    updateData: (data: object, callback: Function, id: number) =>
      dispatch(updateInterviewType(data, callback, id)),
    getDataById: (id: any) => dispatch(fetchInterviewTypeById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddInterviewType);
