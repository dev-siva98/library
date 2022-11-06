import React, { useState, useRef } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

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
    <form className="form-container" onSubmit={handleSubmit}>
      <h1 className="form-header">Create account</h1>
      <div className="form-floating mb-2">
        <input
          type="text"
          id="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          placeholder="John Samuel"
          required={true}
          ref={nameRef}
        />
        <label htmlFor="name">Name</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="example@example.com"
          required={true}
          ref={emailRef}
        />
        <label htmlFor="email">E-mail</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="date"
          id="dob"
          className={`form-control ${errors.dob ? "is-invalid" : ""}`}
          required={true}
          ref={dobRef}
        />
        <label htmlFor="dob">Date of Birth</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="password"
          id="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="Minimum 4 characters"
          required={true}
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
          className={`form-control ${
            errors.confirmPassword ? "is-invalid" : ""
          }`}
          required={true}
          ref={confirmRef}
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
