import { Field, Form, Formik } from "formik";
import {
  fetchActiveInterviewMode,
  fetchActiveInterviewType,
  fetchActiveInterviewer,
} from "../../../reducers/mastersReducers/mastersAction";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import {
  NO_RECORDS_FOUND,
  PLEASE_WAIT,
  SUBMIT,
} from "../../../helpers/globalConstant";
import clsx from "clsx";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { getFormData } from "../../../helpers/helperFunction";
import {
  addInterview,
  fetchInterviewsByCandidateId,
  fetchInterviewsById,
  updateInterview,
} from "../../../reducers/Interviews/interviewAction";
import Loader from "../../common/loader/Loader";
import { KTCard, KTCardBody, KTSVG } from "../../../../_metronic/helpers";

interface Props {
  interviewTypeRes: any;
  getActiveInterviewTypes: any;
  getActiveInterviewModes: any;
  getActiveInterviewer: any;
  interviewModeRes: any;
  interviewerRes: any;
  addInterview: any;
  getInterviewById: any;
  interviewLoading: any;
  interviewRes: any;
  updateInterview: any;
  getInterviewByCandidateId: any;
  interviewListRes: any;
  interviewListLoading: any;
  addInterviewloading: any;
}

const AddInterview = ({
  interviewTypeRes,
  getActiveInterviewTypes,
  getActiveInterviewModes,
  getActiveInterviewer,
  interviewerRes,
  interviewModeRes,
  addInterview,
  getInterviewById,
  interviewLoading,
  interviewRes,
  updateInterview,
  getInterviewByCandidateId,
  interviewListLoading,
  interviewListRes,
  addInterviewloading,
}: Props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    getActiveInterviewTypes();
    getActiveInterviewModes();
    getActiveInterviewer();
    params.interviewId && getInterviewById(params.interviewId);
    params.candidateId && getInterviewByCandidateId(params.candidateId);
  }, []);

  const initialValues = {
    interview_type_id: "",
    interviewer_id: "",
    interview_mode_id: "",
    date: new Date().toISOString().slice(0, 16),
    remarks: "",
    location_link: "",
    candidate_master_id: "",
  };
  const onSubmit = async (values: any) => {
    const updatedValues = {
      ...values,
      candidate_master_id:
        typeof params.candidateId === "string"
          ? parseInt(params.candidateId)
          : params.candidateId,
    };

    const formdata = getFormData(updatedValues);
    if (params.interviewId) {
      updateInterview(
        updatedValues,
        params.interviewId,
        navigate,
        params.candidateId
      );
    }
    if (!params.interviewId) {
      addInterview(formdata, navigate, params.candidateId);
    }
  };
  return (
    <>
      <div className="p-4">
        <span className="fw-bold fs-3">Add Interview</span>
      </div>
      <div className="card collapse show p-9">
        {interviewLoading && <Loader />}
        <Formik
          enableReinitialize={true}
          initialValues={
            params.interviewId
              ? {
                  ...interviewRes,
                  date: interviewRes?.date,
                  interview_mode_id: interviewRes?.interview_mode_id,
                  interview_type_id: interviewRes?.interview_type_id,
                  interviewer_id: interviewRes?.interviewer_id.id,
                  location_link: interviewRes?.location_link,
                  remarks: interviewRes?.remarks,
                }
              : initialValues
          }
          onSubmit={(values: any) => onSubmit(values)}
          render={({ setFieldValue, isSubmitting }) => (
            <Form className="form">
              <>
                <div className="row">
                  <div className="row mb-lg-6 mt-2">
                    <div className="col-lg-4">
                      <label className="col-form-label fw-bold fs-6 required">
                        Interview Type
                      </label>
                      <Field
                        as="select"
                        name="interview_type_id"
                        className={clsx(
                          "form-control bg-transparent form-select"
                        )}
                      >
                        <option value={""} disabled>
                          Select Interview Type
                        </option>
                        {interviewTypeRes && interviewTypeRes.length > 0 ? (
                          interviewTypeRes?.map((list: any, i: any) => (
                            <>
                              <option key={i} value={list.id}>
                                {list.interview_type}
                              </option>
                            </>
                          ))
                        ) : (
                          <option>{NO_RECORDS_FOUND}</option>
                        )}
                      </Field>
                    </div>
                    <div className="col-lg-4">
                      <label className="col-form-label fw-bold fs-6 required">
                        Interviewer
                      </label>
                      <Field
                        as="select"
                        name="interviewer_id"
                        className={clsx(
                          "form-control bg-transparent form-select"
                        )}
                      >
                        <option value={""} disabled>
                          Select Interviewer
                        </option>
                        {interviewerRes && interviewerRes.length > 0 ? (
                          interviewerRes?.map((list: any, i: any) => (
                            <>
                              <option key={i} value={list.id}>
                                {list.name}
                              </option>
                            </>
                          ))
                        ) : (
                          <option>{NO_RECORDS_FOUND}</option>
                        )}
                      </Field>
                    </div>
                    <div className="col-lg-4">
                      <label className="col-form-label fw-bold fs-6 required">
                        Interview Mode
                      </label>
                      <Field
                        as="select"
                        name="interview_mode_id"
                        className={clsx(
                          "form-control bg-transparent form-select"
                        )}
                      >
                        <option value={""} disabled>
                          Select Interview Mode
                        </option>
                        {interviewModeRes && interviewModeRes.length > 0 ? (
                          interviewModeRes?.map((list: any, i: any) => (
                            <>
                              <option key={i} value={list.id}>
                                {list.interview_mode}
                              </option>
                            </>
                          ))
                        ) : (
                          <option>{NO_RECORDS_FOUND}</option>
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="row mb-lg-6 mt-2">
                    <div className="col-lg-4">
                      <label className="col-form-label fw-bold fs-6 required">
                        Date
                      </label>

                      <Datetime
                        value={startDate}
                        onChange={(date) => {
                          const momentDate = moment(date);
                          const selectedDate = momentDate.isValid()
                            ? momentDate.toDate()
                            : null;
                          selectedDate && setStartDate(selectedDate);
                          setFieldValue(
                            "date",
                            moment(date).format("YYYY-MM-DDTHH:mm")
                          );
                        }}
                        dateFormat="DD/MM/YYYY"
                        timeFormat="hh:mm A"
                      />
                    </div>
                    <div className="col-lg-4">
                      <label className="col-form-label fw-bold fs-6 required">
                        Location/Link
                      </label>
                      <Field
                        placeholder="Location/Link"
                        type="text"
                        name="location_link"
                        autoComplete="off"
                        className={clsx("form-control bg-transparent")}
                      />
                    </div>
                    <div className="col-lg-4">
                      <label className="col-form-label fw-bold fs-6">
                        Remarks
                      </label>
                      <Field
                        placeholder="Remarks"
                        type="text"
                        name="remarks"
                        autoComplete="off"
                        className={clsx("form-control bg-transparent")}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={addInterviewloading}
                >
                  {!addInterviewloading && SUBMIT}
                  {addInterviewloading && (
                    <span
                      className="indicator-progress"
                      style={{ display: "block" }}
                    >
                      {PLEASE_WAIT}
                    </span>
                  )}
                </button>
              </>
            </Form>
          )}
        />
      </div>
      <div className="p-4">
        <span className="fw-bold fs-3">Scheduled Interviews</span>
      </div>
      <KTCard>
        <KTCardBody className="py-4">
          {interviewListLoading && <Loader />}
          {!interviewListLoading &&
            interviewListRes &&
            interviewListRes.length > 0 && (
              <table className="table align-middle table-row-dashed fs-6 gy-5 dataTable no-footer">
                <thead>
                  <tr>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Id
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Interview Type
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Date
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Interview Mode
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Interviewer
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Location/ Link
                    </th>
                    <th className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                      Remarks
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 fw-bold">
                  {!interviewListLoading &&
                    interviewListRes &&
                    interviewListRes.map((list: any, index: any) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{list.id}</th>
                          <td>{list.interview_type.interview_type}</td>
                          <td>{list.date}</td>
                          <td>{list.interview_mode.interview_mode}</td>
                          <td>{list.interviewer_id.name}</td>
                          <td>{list.location_link}</td>
                          <td>{list.remarks}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            )}
        </KTCardBody>
      </KTCard>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    interviewTypeRes: state.getActiveInterviewTypeReducer.data,
    interviewerRes: state.getActiveInterviewerReducer.data,
    interviewModeRes: state.getActiveInterviewModeReducer.data,

    interviewLoading: state.getInterviewByIdReducer.loading,
    interviewRes: state.getInterviewByIdReducer.data.interview,

    interviewListLoading: state.getInterviewByCandidateIdReducer.loading,
    interviewListRes: state.getInterviewByCandidateIdReducer.data.interviews,

    addInterviewloading: state.addInterviewReducer.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getActiveInterviewTypes: () => dispatch(fetchActiveInterviewType()),
    getActiveInterviewer: () => dispatch(fetchActiveInterviewer()),
    getActiveInterviewModes: () => dispatch(fetchActiveInterviewMode()),

    getInterviewById: (id: any) => dispatch(fetchInterviewsById(id)),
    getInterviewByCandidateId: (id: any) =>
      dispatch(fetchInterviewsByCandidateId(id)),

    addInterview: (formData: any, callback: any, candidateId: any) =>
      dispatch(addInterview(formData, callback, candidateId)),
    updateInterview: (
      formData: any,
      id: any,
      callback: any,
      candidateId: any
    ) => dispatch(updateInterview(formData, id, callback, candidateId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddInterview);
