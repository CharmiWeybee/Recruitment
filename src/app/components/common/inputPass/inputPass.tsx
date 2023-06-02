import clsx from "clsx";
import React, { useState } from "react";

export interface Props {
  formik: any;
  placeholder: string;
  fieldProp: any;
  touched: any; 
  errors:any
}
const InputPass: React.FC<Props> = ({ formik, fieldProp, placeholder, touched, errors }) => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };


  return (
    <div className="position-relative">
      <input
        type={passwordType}
        placeholder={placeholder}
        autoComplete="off"
        {...formik.getFieldProps(fieldProp)}
        className={clsx(
          "form-control bg-transparent",
          {
            "is-invalid password-icon": touched && errors,
          },
          {
            "is-valid password-icon": touched && !errors,
          }
        )}
      />
      <span className="position-absolute" style={{ right: "10px", top: "13px" }} onClick={togglePassword}>
        {passwordType === "password" ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
      </span>
    </div>
  );
};

export default InputPass;
