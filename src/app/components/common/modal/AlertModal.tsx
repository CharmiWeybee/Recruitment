import React from "react";
import Modal from "react-bootstrap/Modal";

export interface Props {
  alertType: "success" | "error" | "alert";
  alertTitle: string;
  alertBody: string;
  cancelBtn: string;
  confirmBtn?: string;
  cancelFun: Function;
  confirmFun?: Function;
  show: boolean;
  onHide: Function;
}

export const AlertModal: React.FC<Props> = (props: any) => {
  const { alertType, alertTitle, alertBody, cancelBtn, confirmFun, ...rest } = props;
  return (
    // <div className="alert-model">
    <Modal {...rest} aria-labelledby="contained-modal-title-vcenter" centered data-toggle="modal" backdrop="static" keyboard={false}>
      <div className="c-modal-container">
        <div className="f-modal-alert">
          {props.alertType === "success" ? (
            <div className="f-modal-icon f-modal-success animate">
              <span className="f-modal-line f-modal-tip animateSuccessTip"></span>
              <span className="f-modal-line f-modal-long animateSuccessLong"></span>
              <div className="f-modal-placeholder"></div>
              <div className="f-modal-fix"></div>
            </div>
          ) : props.alertType === "error" ? (
            <div className="f-modal-icon f-modal-error animate">
              <span className="f-modal-x-mark">
                <span className="f-modal-line f-modal-left animateXLeft"></span>
                <span className="f-modal-line f-modal-right animateXRight"></span>
              </span>
              <div className="f-modal-placeholder"></div>
              <div className="f-modal-fix"></div>
            </div>
          ) : (
            props.alertType === "alert" && (
              <div className="f-modal-icon f-modal-warning scaleWarning">
                <span className="f-modal-body pulseWarningIns"></span>
                <span className="f-modal-dot pulseWarningIns"></span>
              </div>
            )
          )}
        </div>

        <div className="c-title d-flex justify-content-center align-items-center pb-5">
          <p className="display-6">{props.alertTitle}</p>
        </div>

        <div className="c-body py-5 h5 d-flex justify-content-center">
          <p className="">{props.alertBody}</p>
        </div>
        <div className="c-footer d-flex justify-content-end align-items-center gap-3">
          <button
            type="button"
            className={`btn ${props.alertType === "alert" ? "btn-light btn-active-light-primary" : "btn-primary"}`}
            onClick={() => props.cancelFun()}
          >
            {props.cancelBtn}
          </button>
          {props.alertType === "alert" && (
            <button type="button" className="btn btn-primary" onClick={() => props.confirmFun()}>
              {props.confirmBtn}
            </button>
          )}
        </div>
      </div>
    </Modal>
    // </div>
  );
};
