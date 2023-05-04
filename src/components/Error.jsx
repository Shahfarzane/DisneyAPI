import React from "react";

const Error = ({ error }) => {
  return (
    <div className="default-container">
      <h2 className="error">Error Fetching data..{error}</h2>
      <Link to="/">
        <button className="btn-error">Refresh</button>
      </Link>
    </div>
  );
};

export default Error;
