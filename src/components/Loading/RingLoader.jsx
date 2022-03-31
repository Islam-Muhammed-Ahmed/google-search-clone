import React from "react";
import { Rings } from "react-loader-spinner";

const RingLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Rings type="Puff" color="#00BFFF" height={550} width={80} />
    </div>
  );
};

export default RingLoader;
