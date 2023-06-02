import clsx from "clsx";
import { Field } from "formik";
import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

interface Props {
  setFieldValue: any;
  setPreviousFile: any;
  setFile: any;
  file: any;
  values: any;
}

const Step1 = ({
  setFieldValue,
  setPreviousFile,
  setFile,
  file,
  values,
}: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const params = useParams();

  return (
    <>
      <div className="row mb-lg-6 mt-2">
        <div className="">
          <label className="col-form-label fw-bold fs-6 required">Resume</label>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-light"
              onClick={() => {
                fileRef?.current?.click();
              }}
            >
              <i className="fa fa-upload"></i> Upload File
            </button>
            <input
              ref={fileRef}
              type="file"
              name="resume_id"
              autoComplete="off"
              className={clsx("form-control bg-transparent d-none")}
              onChange={(event: any) => {
                if (event.target.files[0]) {
                  setFieldValue("resume_id", event.target.files[0]);
                  setFile(event.target.files[0]);
                  setPreviousFile(event.target.files[0]?.name);
                }
              }}
            />
            <div className="d-flex justify-content-center align-items-center mx-2">
              <span className="text2 fs-6 text-gray">{file?.name}</span>
            </div>
            {params.id && !file?.name && (
              <div className="d-flex justify-content-center align-items-center mx-2">
                <a href={values.resume_id} target="_blank">
                  <span className="text2 fs-6 text-gray">View Resume</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="row mb-lg-6 mt-2">
        <div className="col-lg-4">
          <label className="col-form-label fw-bold fs-6 required">
            Candidate Name
          </label>
          <div className="">
            <Field
              placeholder="Candidate Name"
              type="text"
              name="name"
              autoComplete="off"
              className={clsx("form-control bg-transparent")}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="col-form-label fw-bold fs-6 required">Email</label>
          <div className="">
            <Field
              placeholder="Email"
              type="text"
              name="email"
              autoComplete="off"
              className={clsx("form-control bg-transparent")}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="col-form-label fw-bold fs-6 required">
            Contact Number
          </label>
          <div className="">
            <Field
              placeholder="Contact Number"
              type="text"
              name="contect_no"
              autoComplete="off"
              className={clsx("form-control bg-transparent")}
            />
          </div>
        </div>
      </div>

      <div className="row mb-lg-6 mt-2">
        <div className="col-lg-4">
          <label className="col-form-label fw-bold fs-6 required">
            Address
          </label>
          <div className="">
            <Field
              placeholder="Address"
              type="text"
              name="address"
              autoComplete="off"
              className={clsx("form-control bg-transparent")}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="col-form-label fw-bold fs-6 required">City</label>
          <div className="">
            <Field
              placeholder="City"
              type="text"
              name="city"
              autoComplete="off"
              className={clsx("form-control bg-transparent")}
            />
          </div>
        </div>
        <div className="col-lg-4">
          <label className="col-form-label fw-bold fs-6 required">State</label>
          <div className="">
            <Field
              placeholder="State"
              type="text"
              name="state"
              autoComplete="off"
              className={clsx("form-control bg-transparent")}
            />
          </div>
        </div>
      </div>
      <div className="row mb-lg-6 mt-2">
        <div className="col-lg-4">
          <label className="col-form-label fw-bold fs-6 required">
            Remarks
          </label>
          <div className="">
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
    </>
  );
};

export default Step1;
