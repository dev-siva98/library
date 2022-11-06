import React, { useRef, useState } from "react";

function EditProfle() {
  const [changePassword, setChangePassword] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    dob: false,
    currentPassword: false,
    password: false,
    confirmPassword: false,
  });

  const nameRef = useRef();
  const dobRef = useRef();
  const currentRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const date = new Date("09-10-1998");
  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1 className="form-header">Edit profile</h1>
      <div className="form-floating mb-2">
        <input
          type="text"
          id="name"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          ref={nameRef}
          defaultValue="Siva"
        />
        <label htmlFor="name">Name</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="email"
          id="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          defaultValue="siva@gmail.com"
          disabled
        />
        <label htmlFor="email">E-mail</label>
      </div>

      <div className="form-floating mb-2">
        <input
          type="date"
          id="dob"
          className={`form-control ${errors.dob ? "is-invalid" : ""}`}
          ref={dobRef}
          defaultValue={date.toLocaleDateString("en-CA")}
        />
        <label htmlFor="dob">Date of Birth</label>
      </div>

      <div className="form-check form-switch change-password-checkbox">
        <input
          className="form-check-input"
          type="checkbox"
          id="changePasssword"
          onChange={() => setChangePassword(!changePassword)}
        />
        <label className="form-check-label" htmlFor="changePasssword">
          Change password
        </label>
      </div>

      {changePassword && (
        <>
          <div className="form-floating mb-2">
            <input
              type="password"
              id="currentPassword"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              ref={currentRef}
              minLength={4}
            />
            <label htmlFor="currentPassword">Current password</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="password"
              id="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              ref={passwordRef}
              minLength={4}
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-floating mb-2">
            <input
              type="password"
              id="confirmPassword"
              className={`form-control ${
                errors.confirmPassword ? "is-invalid" : ""
              }`}
              ref={confirmRef}
              minLength={4}
            />
            <label htmlFor="confirmPassword">Confirm password</label>
          </div>
        </>
      )}
      <div className="signup-action-container">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

export default EditProfle;
