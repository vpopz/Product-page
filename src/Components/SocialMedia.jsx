import React from "react";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <h4 style={{ textAlign: "center" }}>Join Us On Social Media</h4>
      <div className="social-icons" style={{ textAlign: "center" }}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-facebook"
            style={{ fontSize: "44px", padding: "10px", color: "#c72931" }}
          ></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i
            className="fab fa-twitter"
            style={{ fontSize: "44px", padding: "10px", color: "#c72931" }}
          ></i>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className="fab fa-instagram"
            style={{ fontSize: "44px", padding: "10px", color: "#c72931" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
