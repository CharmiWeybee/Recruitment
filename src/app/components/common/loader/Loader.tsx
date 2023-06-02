import React from "react";
import { Triangle, ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center">
      {/* <Triangle height="80" width="80" color="#009ef7" ariaLabel="triangle-loading" wrapperStyle={{}} wrapperClass={""} visible={true} /> */}
      <ThreeDots height="80" width="80" radius="9" color="#009ef7" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
    </div>
  );
};

export default Loader;
