import React, { useState, useRef } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../axios";

function Signup() {
  const [nameError, setNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [signupError, setSignupError] = useState(false);

  const nameRef = useRef();
  const emailRef = useRef();
  const dateOfBirthRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = nameRef.current.value.trim();
    const email = emailRef.current.value;
    const dateOfBirth = dateOfBirthRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    userName ? setNameError(false) : setNameError(true);

    if (userName && email && dateOfBirth && password && confirmPassword) {
      if (password === confirmPassword) {
        const data = {
          userName,
          email,
          dateOfBirth,
          password,
        };

        axios({
          method: "post",
          url: "/user/signup",
          data: data,
        }).then((response) => {
          if (response.data) {
            alert("created");
            navigate("/login");
          } else {
            setSignupError(true);
          }
        });
      } else {
        // passwords not matching, setting error on both true

        setPasswordError(true);
        alert("Passwords should match");
      }
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-header">Create account</h1>
      <div className="form-error-container">
        {signupError && (
          <p className="signup-error-message">Email is already taken</p>
        )}
      </div>
      <div className="form-floating mb-2">
        <input
          type="text"
          id="name"
          className={`form-control ${nameError ? "is-invalid" : ""}`}
          placeholder="John Samuel"
          required
          ref={nameRef}
        />
        <label htmlFor="name">Name</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="email"
          id="email"
          className={`form-control ${signupError ? "is-invalid" : ""}`}
          placeholder="example@example.com"
          required
          ref={emailRef}
        />
        <label htmlFor="email">E-mail</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="date"
          id="dateOfBirth"
          className={"form-control"}
          required
          ref={dateOfBirthRef}
        />
        <label htmlFor="dateOfBirth">Date of Birth</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="password"
          id="password"
          className={`form-control ${passwordError ? "is-invalid" : ""}`}
          placeholder="Minimum 4 characters"
          required
          ref={passwordRef}
          minLength={4}
        />
        <label htmlFor="password">Password</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          className={`form-control ${passwordError ? "is-invalid" : ""}`}
          required
          ref={confirmPasswordRef}
          minLength={4}
        />
        <label htmlFor="confirmPassword">Confirm password</label>
      </div>
      <div className="form-action-container">
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
        <p>
          Already have an account ?{" "}
          <Link to={"/login"} className="swap-link">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
}

export default Signup;
