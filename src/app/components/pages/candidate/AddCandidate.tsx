import React, { useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import * as Yup from "yup";
import { Form, Formik } from "formik";

import { BACK, NEXT, PLEASE_WAIT } from "../../../helpers/globalConstant";
import { useWindowSize } from "../../../helpers/useWindowSize";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import {
  addCandidate,
  fetchCandidateById,
  updateCandidate,
} from "../../../reducers/Candidates/candidateAction";
import { getFormData } from "../../../helpers/helperFunction";
import Loader from "../../common/loader/Loader";

export interface Props {
  addCandidate: any;
  getCandidateById: any;
  candidateRes: any;
  candidateLoading: any;
  updateCandidate: any;
}

const AddCandidate: React.FC<Props> = ({
  addCandidate,
  getCandidateById,
  candidateRes,
  candidateLoading,
  updateCandidate,
}) => {
  const steps = [
    "Personal Details",
    "Educational Qualifications",
    "Professional Details",
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const { isMobile, windowSize } = useWindowSize();
  const navigate = useNavigate();
  const params = useParams();
  const [previousFile, setPreviousFile] = useState(null);
  const [file, setFile] = useState();

  useEffect(() => {
    params.id && getCandidateById(params.id);
  }, [params.id]);

  const initialValues = {
    name: "",
    resume_id: "",
    remarks: "",
    email: "",
    contect_no: "",
    dob: "",
    mode_of_work_id: "",
    degree_id: "",
    passing_year: "",
    passing_grade: "",
    total_experience: "",
    current_salary: "",
    expected_salary: "",
    is_negotiable: 0,
    notice_period: "",
    address: "",
    city: "",
    state: "",
    recruitment_status_id: "",
    source_id: "",
    status: true,
    skills: [
      {
        id: "",
        candidate_master_id: "",
        skill_master_id: "",
        experience: "",
        self_rating: "",
      },
    ],
    previs_companies: [
      {
        id: "",
        candidate_master_id: "",
        coumpany_name: "",
        from: "",
        to: "",
      },
    ],
  };

  function _renderStepContent(
    step: any,
    setFieldValue: any,
    values: any,
    touched: any,
    errors: any
  ) {
    switch (step) {
      case 0:
        return (
          <Step1
            values={values}
            setFieldValue={setFieldValue}
            setPreviousFile={setPreviousFile}
            setFile={setFile}
            file={file}
            // errors={errors}
            // touched={touched}
          />
        );
      case 1:
        return (
          <Step2
            isMobile={isMobile}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            values={values}
          />
        );
      case 2:
        return (
          <Step3
            isMobile={isMobile}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
            values={values}
          />
        );
      default:
        return <div>Error</div>;
    }
  }

  const handlePrev = () => {
    setCurrentStep(currentStep == 0 ? currentStep : currentStep - 1);
  };

  const onSubmit = async (values: any) => {
    if (currentStep === 0) {
    } else if (currentStep === 2) {
      const formdata = file
        ? getFormData({ ...values, resume_id: file })
        : getFormData(values);
      if (params.id) {
        updateCandidate(formdata, params.id, navigate);
      }
      if (!params.id) {
        addCandidate(formdata, navigate);
      }
    }
    if (currentStep !== 2) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div className="app-container contanier-xxl form-container">
      <div className="stepper stepper-pills stepper-column d-flex justify-content-center">
        <div className="my-5">
          <div className="card-body">
            <div className="d-flex justify-content-center">
              {isMobile ? (
                steps.map((label: string, index: any) => {
                  return (
                    <div
                      key={index}
                      className="stepper-item current"
                      data-kt-stepper-element="nav"
                    >
                      <div className="stepper-wrapper">
                        <div className="stepper-label-parent">
                          <div
                            className={`stepper-icon ${
                              index < currentStep
                                ? "bg-success"
                                : index == currentStep
                                ? "bg-primary"
                                : "bg-secondary"
                            }`}
                          >
                            <span className="stepper-number">
                              {index < currentStep ? (
                                <i className="fa-solid fa-check text-white fs-4"></i>
                              ) : (
                                index + 1
                              )}
                            </span>
                          </div>
                          <div className="stepper-label">
                            <h3
                              style={{ margin: "0" }}
                              className={`stepper-title ${
                                index < currentStep
                                  ? "text-success"
                                  : index == currentStep
                                  ? "text-dark"
                                  : "text-gray-400"
                              } text-center`}
                            >
                              {label}
                            </h3>
                          </div>
                        </div>
                        {index != steps.length - 1 && (
                          <div className="hr-line-parent">
                            <hr
                              style={{
                                height: `${index < currentStep ? "2px" : ""}`,
                              }}
                              className={`stepper-hr ${
                                index < currentStep
                                  ? "bg-success border-success"
                                  : "bg-dark border-dark-300 border-dashed"
                              }`}
                            ></hr>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="d-flex justify-content-center">
                  {steps.map((label: string, index: any) => {
                    return (
                      <div
                        className="stepper-item current "
                        data-kt-stepper-element="nav"
                      >
                        <div className="stepper-wrapper">
                          <div className="stepper-label-parent flex-row align-items-center d-flex">
                            <div
                              className={
                                index < currentStep
                                  ? "stepper-icon w-40px h-40px mx-1 bg-success"
                                  : "stepper-icon w-40px h-40px mx-1"
                              }
                            >
                              <span className="stepper-number fs-5">
                                {index < currentStep ? (
                                  <i className="fa-solid fa-check text-white fs-4"></i>
                                ) : (
                                  index + 1
                                )}
                              </span>
                            </div>
                            <div className="stepper-label">
                              <h3
                                className="stepper-title text-center"
                                style={{ margin: "0px" }}
                              >
                                {label}
                              </h3>
                            </div>
                            {index != steps.length - 1 && (
                              <div className="hr-line-parent">
                                <hr
                                  style={{
                                    height: `${
                                      index < currentStep ? "2px" : ""
                                    }`,
                                  }}
                                  className={`stepper-hr ${
                                    index < currentStep
                                      ? "bg-success border-success"
                                      : "bg-dark border-dark-300 border-dashed"
                                  }`}
                                ></hr>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isMobile && (
        <div className="progress h-2px w-100 bg-white">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: `${currentStep * (100 / steps.length)}%` }}
          ></div>
        </div>
      )}
      <div id="kt_account_profile_details" className="card collapse show">
        {candidateLoading && <Loader />}
        {!candidateLoading && candidateRes && (
          <Formik
            enableReinitialize={true}
            initialValues={
              params.id
                ? {
                    ...candidateRes,
                    name: candidateRes.candidate?.name,
                    resume_id: candidateRes.candidate?.resume_id,
                    email: candidateRes.candidate?.email,
                    contect_no: candidateRes.candidate?.contect_no,
                    address: candidateRes.candidate?.address,
                    city: candidateRes.candidate?.city,
                    state: candidateRes.candidate?.state,
                    remarks: candidateRes.candidate?.remarks,
                    degree_id: candidateRes.candidate?.degree?.id,
                    passing_year: candidateRes.candidate?.passing_year,
                    passing_grade: candidateRes.candidate?.passing_grade,
                    skills: candidateRes.candidate?.skills,
                    current_salary: candidateRes.candidate?.current_salary,
                    expected_salary: candidateRes.candidate?.expected_salary,
                    total_experience: candidateRes.candidate?.total_experience,
                    notice_period: candidateRes.candidate?.notice_period,
                    previs_companies: candidateRes.candidate?.previs_companies,
                    mode_of_work_id: candidateRes.candidate?.mode_of_work?.id,
                    source_id: candidateRes.candidate?.source?.id,
                    recruitment_status_id:
                      candidateRes.candidate?.recruitment_status?.id,
                  }
                : initialValues
            }
            // validationSchema={
            //   currentStep === 0
            //     ? step1Validate
            //     : currentStep === 1
            //     ? step2Validate
            //     : step3Validate
            // }
            onSubmit={(values: any) => onSubmit(values)}
            render={({
              errors,
              values,
              setFieldValue,
              isSubmitting,
              touched,
            }) => (
              <Form className="form">
                <>
                  <div className="row mb-6">
                    <div className="card-body add-post-card">
                      {_renderStepContent(
                        currentStep,
                        setFieldValue,
                        values,
                        touched,
                        errors
                      )}
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-5 card-body py-0 add-post-card">
                      <div>
                        <button
                          className={`${
                            currentStep !== 0 ? "btn btn-light" : "hidden"
                          }`}
                          type="button"
                          disabled={currentStep == 0}
                          onClick={() => handlePrev()}
                        >
                          {BACK}
                        </button>
                      </div>
                      <div>
                        <button className="btn btn-primary" type="submit">
                          {currentStep == 2 && isSubmitting && (
                            <span
                              className="indicator-progress"
                              style={{ display: "block" }}
                            >
                              {PLEASE_WAIT}
                            </span>
                          )}
                          {!isSubmitting && (
                            <>{currentStep == 2 ? "Submit" : NEXT}</>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              </Form>
            )}
          />
        )}
      </div>
      <div className="d-flex justify-content-end align-items-center p-4"></div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    candidateLoading: state.getCandidateByIDReducer.loading,
    candidateRes: state.getCandidateByIDReducer.data,
    candidateResPagination: state.getCandidateByIDReducer,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    addCandidate: (details: any, callback: any) =>
      dispatch(addCandidate(details, callback)),
    updateCandidate: (details: any, id: any, callback: any) =>
      dispatch(updateCandidate(details, id, callback)),
    getCandidateById: (id: any) => dispatch(fetchCandidateById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidate);
