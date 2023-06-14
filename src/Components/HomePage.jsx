import React, { useEffect, useState } from "react";
import { fetchProducts } from "./ApiFetch";
import Carousel from "./Carousel";
import SocialMedia from "./SocialMedia";
import Header from "./Header";
import Footer from "./Footer";
import RateAndPrice from "./RateAndPrice";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  if (products.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="homepage">
      <Header />
      <div className="container-fluid">
        <br />
        <br />
        <div className="row">
          <div
            className="col-sm-7 col-md-7 col-lg-7 col-xl-7"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src={selectedProduct ? selectedProduct.image : products[0].image}
              alt={selectedProduct ? selectedProduct.title : products[0].title}
              style={{
                width: "350px",
                height: "500px",
                transform: "scale(0.9)",
                transition: "transform 0.5s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(0.8)";
              }}
            />
          </div>
          <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
            {selectedProduct ? (
              <>
                <br />
                <br />
                <br />
                <br />
                <h2 style={{ padding: "0 0 30px 0" }}>
                  {selectedProduct.title}
                </h2>

                <p>{selectedProduct.description}</p>
                <RateAndPrice
                  rating={selectedProduct.rating}
                  price={selectedProduct.price}
                />
                <button
                  className="addToCart"
                  style={{
                    marginRight: "8px",
                    marginTop: "15px",
                  }}
                >
                  Add to Cart
                </button>
                <button className="buyNow">Buy Now</button>
              </>
            ) : (
              <>
                <br />
                <br />
                <h2 style={{ padding: "0 0 30px 0" }}>{products[0].title}</h2>
                <p>{products[0].description}</p>
                <RateAndPrice
                  rating={products[0].rating}
                  price={products[0].price}
                />
                <button
                  className="addToCart"
                  style={{
                    marginRight: "8px",
                    marginTop: "15px",
                  }}
                >
                  Add to Cart
                </button>
                <button className="buyNow">Buy Now</button>
              </>
            )}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h4>Similar Products</h4>
        <br />
        <Carousel
          products={products}
          onProductClick={(product) => setSelectedProduct(product)}
        />
        <br />
        <SocialMedia />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
