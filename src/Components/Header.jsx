import React from "react";
import "./Component.css";
const Header = () => {
  return (
    <div className="header-element">
      <div style={{ padding: "0px 0px 0px 0px", marginTop: "-8px" }}>
        <nav className="navbar navbar-expand-md  ">
          <div
            className="container-fluid"
            style={{ backgroundColor: "#303A40 ", height: "50px" }}
          >
            <a className="navbar-brand" style={{ color: "#c72931" }} href="/">
              <h4>E-Cart</h4>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarNavAltMarkup"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="navbar-nav">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ color: "white" }}
                  href="/"
                >
                  Home
                </a>
                <a className="nav-link" style={{ color: "white" }} href="/">
                  Categories
                </a>
                <a className="nav-link" style={{ color: "white" }} href="/">
                  Cart
                </a>
                <a className="nav-link" style={{ color: "white" }} href="/">
                  {" "}
                  Wishlist
                </a>
                <a className="nav-link" style={{ color: "white" }} href="/">
                  {" "}
                  Login
                </a>
                <a className="nav-link" style={{ color: "white" }} href="/">
                  {" "}
                  Contact Us
                </a>
                <a className="nav-link" style={{ color: "white" }} href="/">
                  {" "}
                  Location
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
