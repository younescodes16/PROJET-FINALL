import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartslice";
import "./Productcard.css";

const Productcard = ({ product }) => {
  const dispash = useDispatch();

  return (
    <>
      <div className="card">
        <img src={product.image} />
        <h2>{product.title}</h2>
        <p className="category">{product.category}</p>
        
        {/* <p className="description">{product.description}</p> */}
        <p className="price"> Price: {product.price} DA</p>
        <button onClick={()=> dispash(addToCart(product))}>Add to Cart</button>
      </div>
    </>
  );
};

export default Productcard;
