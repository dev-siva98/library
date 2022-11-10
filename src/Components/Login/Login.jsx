import axios from "../../axios";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });
  const [loginError, setLoginError] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const errorSet = { ...errors };

    email ? (errorSet.email = false) : (errorSet.email = true);
    password ? (errorSet.password = false) : (errorSet.password = true);
    setErrors(errorSet);

    if (email && password) {
      const data = { email, password };
      axios({
        method: "post",
        url: "/user/login",
        data: data,
      })
        .then((response) => {
          if (response.data) {
            setLoginError(false);

            localStorage.setItem("userId", response.data._id);
            localStorage.setItem("isLoggedIn", true);
          } else {
            setLoginError(true);
          }
        })
        .catch((err) => {
          console.log("Error" + err);
        });
    }
  };
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1 className="form-header">Login</h1>

      <div className="form-error-container">
        {loginError && <p>Invalid email or password</p>}
      </div>

      <div className="form-floating mb-3">
        <input
          type="email"
          className={`form-control ${
            errors.email || loginError ? "is-invalid" : ""
          }`}
          id="email"
          placeholder="name@example.com"
          required={true}
          ref={emailRef}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="form-floating">
        <input
          type="password"
          className={`form-control ${
            errors.password || loginError ? "is-invalid" : ""
          }`}
          id="password"
          placeholder="Password"
          required={true}
          ref={passwordRef}
        />
        <label htmlFor="password">Password</label>
      </div>
      <div className="login-action-container">
        <p>
          New here ?{" "}
          <Link to={"/signup"} className="swap-link">
            Signup
          </Link>
        </p>
        <button className="btn btn-primary login-button">Login</button>
      </div>
    </form>
  );
}

export default Login;
