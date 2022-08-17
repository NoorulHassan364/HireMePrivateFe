import React from "react";

const ErrorValidationMessage = ({ message, show }) => {
  return (
    <>
      {show ? (
        <div
          role="alert"
          className="ant-form-item-explain-error"
          style={{ color: "red" }}
        >
          {message}
        </div>
      ) : null}
    </>
  );
};

export default ErrorValidationMessage;
