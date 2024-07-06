import React, { useState } from "react";
import "./signin.css";
import { useNavigate, Outlet, Link } from "react-router-dom";

export default function SignInPage() {
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signupData.email || !signupData.password) {
      setError("All Fields are Required");
      return;
    }
    if (!signupData.email.includes("@")) {
      setError("A valid email is required");
      return;
    }
    if (signupData.password.length <= 5) {
      setError("Password should be greater than 5 characters");
      return;
    }
    // Submit logic here

    try {
      const response = await fetch("http://localhost:3820/signinDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.message === "User in the Database") {
        console.log("home");
        navigate("/justhome");
      }
      console.log("Response data from backend:", data);
      // Optionally handle success response here, e.g., redirect to login page
    } catch (error) {
      console.error("Fetch error:", error.message);
      setError("Failed to communicate with the server.");
    }
  };

  return (
    <div className="signin-main-container">
      <video autoPlay loop muted playsInline className="video">
        <source
          src="https://res.cloudinary.com/dtt87dyj1/video/upload/v1719883435/Untitled_design_1_fodj2j.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <form onSubmit={handleSubmit} className="signin-form-container">
        <div className="signin-input-container-image">
          <h1 style={{ color: "white" }}>Sign In</h1>
          {/* <img
            src="https://res.cloudinary.com/dtt87dyj1/image/upload/v1704642606/image_123986672__1_-removebg-preview_j9nuhv.png"
            className="image-elemenet"
            alt="name"
          /> */}
        </div>

        <div className="signin-input-container">
          <label className="signin-label-element-email">Email</label>
          <input
            className="signin-input-element"
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="signin-input-container">
          <label className="signin-label-element-password">Password</label>
          <input
            className="signin-input-element"
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="btn-container">
          <Link to="/signup">
            <button className="signin-button-css">Sign up</button>
          </Link>
          <button className="signin-button-css" type="submit">
            Sign In
          </button>
        </div>
      </form>
      <Outlet />
    </div>
  );
}
