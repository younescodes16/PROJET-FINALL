import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { remove, setQuantity } from "../../redux/slice/cartslice";
import jsPDF from "jspdf";

import { SlBasket } from "react-icons/sl";

export default function Cart() {
  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity >= 1) {
      dispatch(setQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleGenerateInvoice = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);

    const columns = ["Produit", "Quantité", "Prix unitaire", "Total"];
    const columnWidths = [80, 30, 40, 30];
    const startX = 10;
    const startY = 20;
    const rowHeight = 10;
    const maxProductNameWidth = 80;

    
    const headerColor = [255, 200, 0]; 
    const rowColor = [240, 240, 240];  
    const borderColor = [0, 0, 0];     

    
    doc.setFillColor(...headerColor);
    doc.rect(startX, startY - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight, 'F'); 
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    columns.forEach((col, i) => {
      doc.text(col, startX + columnWidths.slice(0, i).reduce((a, b) => a + b, 0), startY);
    });

    doc.setDrawColor(...borderColor);
    doc.rect(startX, startY - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight); 

    
    cart.forEach((product, index) => {
      const y = startY + rowHeight * (index + 1);
      const productText = doc.splitTextToSize(product.title, maxProductNameWidth);

      doc.setFillColor(...rowColor);
      doc.rect(startX, y - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight, 'F'); 

      productText.forEach((line, lineIndex) => {
        doc.text(line, startX, y + lineIndex * 10);
      });

      doc.text(product.quantity.toString(), startX + columnWidths[0], y);
      doc.text(`${product.price} DA`, startX + columnWidths[0] + columnWidths[1], y);
      doc.text(`${(product.quantity * product.price).toFixed(2)} DA`, startX + columnWidths[0] + columnWidths[1] + columnWidths[2], y);

      doc.setDrawColor(...borderColor);
      doc.rect(startX, y - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight); 
    });

  
    const totalY = startY + rowHeight * (cart.length + 1);
    doc.setFillColor(...headerColor);
    doc.rect(startX, totalY - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight, 'F'); 
    doc.setTextColor(0, 0, 0); 
    doc.text("Total", startX, totalY);
    doc.text(`${total.toFixed(2)} DA`, startX + columnWidths.reduce((a, b) => a + b, 0) - 30, totalY);

    doc.setDrawColor(...borderColor)
    doc.rect(startX, totalY - 5, columnWidths.reduce((a, b) => a + b, 0), rowHeight);

    doc.save("facture.pdf");
  };

  return (
    <>
      <div>
        {cart.length === 0 ? (
          <div className="empy">
          <h1 className="empty">your cart is empty</h1>
          
          <  SlBasket className="icons" />
          </div>
           
        ) : (
          <div className="product-list">
            {cart.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="category">{product.category}</p>
                <p className="price">{product.price} DA</p>
                <div>
                  <button onClick={() => handleQuantityChange(product.id, product.quantity - 1)}>-</button>
                  <button onClick={() => handleQuantityChange(product.id, product.quantity + 1)}>+</button>
                  <button onClick={() => dispatch(remove(product))}>remove</button>
                  <p>Quantity: {product.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="btn-cart">
        <button className="btn-price">Total: {total.toFixed(2)} DA</button>
        <button className="facture" onClick={handleGenerateInvoice}>FACTURE</button>
        <button>paye</button>
        </div>
      </div>
    </>
  );
}
