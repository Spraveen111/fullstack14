import React from "react";
import "./App.css";
import SignUpPage from "./SignUpPage/SignUpPage.js";
import SignInPage from "./SignInPage/SignInPage.js";
import CheckOutPage from "./CheckOutPage/CheckOutPage.js";
import Hoome from "./Hoome/Hoome.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./CartContext/CartContext.js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import JustHome from "./JustHome/JustHome.js";

const initialOptions = {
  "client-id": "your-client-id", // Replace with your PayPal client ID
  currency: "USD",
  intent: "capture",
};

function App() {
  return (
    <CartProvider>
      <PayPalScriptProvider options={initialOptions}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/justhome" element={<JustHome />} />

            <Route path="/hoome" element={<Hoome />} />
            <Route path="/checkout" element={<CheckOutPage />} />
          </Routes>
        </BrowserRouter>
      </PayPalScriptProvider>
    </CartProvider>
  );
}

export default App;
