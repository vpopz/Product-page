import React from "react";

const Image = ({ image, title }) => {
  return (
    <div className="imageAndTitle">
      <img src={image} alt={title} style={{ width: "350px" }} />
      <h2>{title}</h2>
    </div>
  );
};

export default Image;
