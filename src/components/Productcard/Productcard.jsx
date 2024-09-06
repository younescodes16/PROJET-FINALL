import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartslice";
import "./Productcard.css";

const Productcard = ({ product }) => {
  const dispatch = useDispatch();
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className={`card-container ${isFlipped ? "flipped" : ""}`}>
      <div className="card-content">
        <div className="card-front">
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p className="category">{product.category}</p>
          <p className="price">Price: {product.price} DA</p>
          <button className="btn" onClick={handleAddToCart}>Add to Cart</button>
          <button  className="btn" onClick={handleFlip}>View Details</button>
        </div>
        <div className="card-back">
          <h2>{product.title}</h2>
          <p className="category">{product.category}</p>
          <p className="price">Price: {product.price} DA</p>
          <p className="description">{product.description}</p>
          <button className="btn" onClick={handleFlip}>Back</button>
        </div>
      </div>
    </div>
  );
};

export default Productcard;
