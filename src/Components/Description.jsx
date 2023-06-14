import React from "react";

const Description = ({ description }) => {
  return (
    <div className="description" style={{ margin: "auto" }}>
      <div className="product-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Description;
