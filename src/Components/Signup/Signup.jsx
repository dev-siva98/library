import React from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const dobRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value;
    const dob = dobRef.current.value;
    const password = passwordRef.current.value.trim();
    const confirmPassword = confirmRef.current.value.trim();

    const errorSet = { ...errors };

    if (name && email && dob && password && confirmPassword) {
      if (password === confirmPassword) {
        const data = {
          name,
          email,
          dob,
          password,
        };
        console.log(data);
      } else {
        // passwords not matching, setting error on both true

        errorSet.password = true;
        errorSet.confirmPassword = true;
        alert("Passwords should match");
      }
    }

    name ? (errorSet.name = false) : (errorSet.name = true);

    setErrors(errorSet);
  };

  return (
    <div className="signup-container">
      <h1 className="signup-form-header">Create account</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="signup-form-sections">
          <label htmlFor="name">Name :</label>
          <input
            required={true}
            type="text"
            placeholder="John Samuel"
            className={`form-control ${errors.name ? "input-error" : ""}`}
            ref={nameRef}
          />
        </div>

        <div className="signup-form-sections">
          <label htmlFor="email">E-mail :</label>
          <input
            required={true}
            type="email"
            placeholder="example@example.com"
            className={`form-control ${errors.email ? "input-error" : ""}`}
            ref={emailRef}
          />
        </div>

        <div className="signup-form-sections">
          <label htmlFor="dob">Date of Birth :</label>
          <input
            required={true}
            type="date"
            className={`form-control ${errors.dob ? "input-error" : ""}`}
            ref={dobRef}
          />
        </div>

        <div className="signup-form-sections">
          <label htmlFor="password">Password :</label>
          <input
            required={true}
            type="password"
            minLength={4}
            placeholder="Minimum 4 characters"
            className={`form-control ${errors.password ? "input-error" : ""}`}
            ref={passwordRef}
          />
        </div>

        <div className="signup-form-sections">
          <label htmlFor="confirmPassword">Re-type password :</label>
          <input
            required={true}
            type="password"
            minLength={4}
            placeholder="********"
            className={`form-control ${
              errors.confirmPassword ? "input-error" : ""
            }`}
            ref={confirmRef}
          />
        </div>
        <div className="signup-form-sections signup-action-container">
          <p>
            Already have an account ? <span className="swap-link">login</span>
          </p>
          <button type="submit" className="btn btn-primary">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
