import React from "react";
import RatingStarIcon from "./RatingStarIcon";
import "./Component.css";

const Carousel = ({ products, onProductClick }) => {
  const cardsPerSlide = 4;

  const cardGroups = [];
  for (let i = 0; i < products.length; i += cardsPerSlide) {
    const cardGroup = products.slice(i, i + cardsPerSlide);
    cardGroups.push(cardGroup);
  }
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div
        className="carousel-inner"
        style={{ height: "350px", paddingTop: "10px" }}
      >
        {cardGroups.map((cardGroup, groupIndex) => (
          <div
            className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
            key={`group-${groupIndex}`}
          >
            <div className="card-group">
              {cardGroup.map((product, index) => (
                <div
                  className="card card-wrapper"
                  style={{ margin: "4px", padding: "5px" }}
                  key={product.id}
                  onClick={() => onProductClick(product)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{
                      width: "150px",
                      height: "150px",
                      margin: "0 auto",
                      padding: "5px",
                    }}
                  />
                  <h6 style={{ margin: "0 auto" }}>{product.title}</h6>
                  <div className="card-body">
                    <p
                      className="card-text"
                      style={{ margin: "0 auto", textAlign: "center" }}
                    >
                      <RatingStarIcon
                        rating={product.rating.rate}
                        color="#E5B80B"
                      />{" "}
                      ({product.rating.count} reviews)
                    </p>
                    <h5 className="card-text" style={{ textAlign: "center" }}>
                      Price: {product.price}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        style={{ color: "black" }}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        style={{ color: "black" }}
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
