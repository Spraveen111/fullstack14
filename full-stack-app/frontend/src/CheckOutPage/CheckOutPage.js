import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import "./checkoutpage.css";
import PayPalButton from "./PaypalButton"; // Ensure case matches the actual file name

export default function CheckOutPage() {
  const { cart } = useContext(CartContext);

  // Calculate the total price of items in the cart
  const totalBill = cart.reduce((total, item) => total + item.Price, 0);
  const handleSuccess = (details) => {
    console.log("Transaction completed by ", details.payer.name.given_name);
    // Handle the transaction success (e.g., update the order status in your backend)
  };

  return (
    <div>
      {cart.length === 0 ? (
        <div className="empty-checkout">
          <div className="">
            <h1>Check Out Page</h1>
            <p>Your Cart Is Empty</p>
          </div>
        </div>
      ) : (
        <div className="main-container">
          <div>
            <h1>Check Out Page</h1>
            <ul>
              {cart.map(({ _id, VegitableName, Price, imageUrl }) => (
                <li key={_id} style={{ paddingBottom: "30px" }}>
                  <img src={imageUrl} alt={VegitableName} width="150" />
                  <p className="v-name">{VegitableName}</p>
                  <p className="v-price">Price: ${Price}</p>
                </li>
              ))}
              <h2>Total Bill: ${totalBill.toFixed(2)}</h2>
            </ul>
          </div>
          <div>
            <PayPalButton
              amount={totalBill.toFixed(2)}
              onSuccess={handleSuccess}
            />
          </div>
        </div>
      )}
    </div>
  );
}
