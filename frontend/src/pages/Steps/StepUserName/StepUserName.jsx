import React from "react";

const StepUserName = ({ onNext }) => {
  return (
    <>
      <div>UserName Component</div>
      <button onClick={onNext}>Next</button>
    </>
  );
};

export default StepUserName;
