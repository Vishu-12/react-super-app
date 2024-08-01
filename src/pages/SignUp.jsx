import React, { useState } from "react";
import "./css/SignUp.css";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/heroImage.png";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [erros, setErros] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCheckbox = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };
  function handleSubmit(e) {
    e.preventDefault();
    let new_errors = { ...erros };
    if (
      formData.name.trim().length === 0 ||
      formData.name === undefined ||
      formData.name === null
    ) {
      new_errors.name = "Name is required";
    } else {
      new_errors.name = "";
    }
    if (
      formData.username.trim().length === 0 ||
      formData.username === undefined ||
      formData.username === null
    ) {
      new_errors.username = "UserName is required";
    } else {
      new_errors.username = "";
    }
    if (
      formData.email.trim().length === 0 ||
      formData.email === undefined ||
      formData.email === null
    ) {
      new_errors.email = "Email is required";
    } else {
      new_errors.email = "";
    }
    if (
      formData.mobile.trim().length === 0 ||
      formData.mobile === undefined ||
      formData.mobile === null
    ) {
      new_errors.mobile = "Mobile is required";
    } else {
      new_errors.mobile = "";
    }
    if (!formData.checkbox) {
      new_errors.checkbox = "Please accept the terms and conditions";
    } else {
      new_errors.checkbox = "";
    }
    setErros({ ...new_errors });
    if (
      new_errors.name === "" &&
      new_errors.email === "" &&
      new_errors.username === "" &&
      new_errors.mobile === "" &&
      new_errors.checkbox === ""
    ) {
      localStorage.setItem("userData", JSON.stringify(formData));
      navigate("/genre");
    }
  }
  return (
    <div className="signup-page">
      <div className="left-side">
        <img src={heroImage} alt="not found image" />
        <div className="image-text">
          <p className="heroimage-text">Discover new things on Superapp</p>
        </div>
      </div>
      <div className="right-side">
        <form
          action=""
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
            width: "400px",
          }}
        >
          <h1 className="heading">Super app</h1>
          <p className="sub-heading">Create your new account</p>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={onChangeHandler}
            value={formData?.name}
            style={{
              border: `1px solid ${erros.name.length > 0 ? "red" : "#72db73"}`,
            }}
          />
          {erros.name && (
            <p className="error-message">This field is required</p>
          )}
          <input
            type="text"
            name="username"
            placeholder="UserName"
            onChange={onChangeHandler}
            value={formData?.username}
            style={{
              border: `1px solid ${
                erros.username.length > 0 ? "red" : "#72db73"
              }`,
            }}
          />
          {erros.username && (
            <p className="error-message">This field is required</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChangeHandler}
            value={formData?.email}
            style={{
              border: `1px solid ${erros.email.length > 0 ? "red" : "#72db73"}`,
            }}
          />
          {erros.email && (
            <p className="error-message">This field is required</p>
          )}
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            onChange={onChangeHandler}
            value={formData?.mobile}
            style={{
              border: `1px solid ${
                erros.mobile.length > 0 ? "red" : "#72db73"
              }`,
            }}
          />
          {erros.mobile && (
            <p className="error-message">This field is required</p>
          )}
          <div className="checkbox">
            <input
              type="checkbox"
              name="checkbox"
              onChange={handleCheckbox}
              value={formData?.checkbox}
            />
            <label className="checkbox-label">
              Share my registration data with Superapp
            </label>
            {erros.checkbox && (
              <p className="error-message">This field is required</p>
            )}
          </div>
          <button onClick={handleSubmit} className="signup-button">
            SIGN UP
          </button>
          <p className="terms-conditions">
            By clicking on Sign up. you agree to Superapp{" "}
            <span> Terms and Conditions of Use</span>
          </p>
          <p className="terms-conditions">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp <span> Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
}
