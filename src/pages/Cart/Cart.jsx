import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { remove, setQuantity } from "../../redux/slice/cartslice";

export default function Cart() {
  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(setQuantity({ id, quantity: newQuantity }));
    }
  };
  return (
    <>
      <div>
        {cart.length === 0 ? (
          <h1 className="empy">your cart is empty</h1>
        ) : (
          <div className="product-list">
            {cart.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="category">{product.category}</p>
                <p className="price">{product.price} DA</p>
                <div>
                  <p>
                   
                    <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                    <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                  </p>
                  <button onClick={() => dispatch(remove(product))}>
                    remove
                  </button>

                  <p>Quantity: {product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <button className="btn-price">Total: {total.toFixed(2)} DA</button>
      </div>
    </>
  );
}
