import React from "react";
import "./justhome.css";
import { useNavigate } from "react-router-dom";
export default function JustHome() {
  const navigate = useNavigate();
  return (
    <div className="first-main-class">
    <div className="main-class">
      <h1 className="heading">
        Welcome to <span className="main-title">VEGETABLE DHUKHAN </span>
      </h1>
      <img
        src="https://res.cloudinary.com/dtt87dyj1/image/upload/v1704642606/image_123986672__1_-removebg-preview_j9nuhv.png"
        alt="emoji"
        className="image-size"
      />
      <p className="heading">Linked In : Praveen Seelaboyina</p>
      <p className="heading">Gmail : praveencan111@gmail.com</p>
      <div>
        <button className="button" onClick={() => navigate("/hoome")}>
          Vegetables
        </button>
      </div>
      </div>
    </div>
  );
}
