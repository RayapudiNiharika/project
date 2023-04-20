import { useState, useEffect } from "react";
import "./Login.css";
import { BsPersonCircle } from "react-icons/bs";

function Login() {
  const initialValues = { userId: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const userIdRegex = /^[a-zA-Z0-9]+$/;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };

  const resetForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
    setErrors({});
    setIsSubmit(false);
    setSignInSuccess(false);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmit) {
      fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setSignInSuccess(true);
          } else {
            setSignInSuccess(false);
            setErrors({ userId: "Incorrect User ID" });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [errors]);

  const validate = (values) => {
    const errors = {};

    if (!values.userId) {
      errors.userId = "User ID is required!";
    } else if (!userIdRegex.test(values.userId)) {
      errors.userId = "User ID can only contain letters and numbers!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password.length < 4) {
      errors.password = "Password must be at least 4 characters!";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed 10 characters!";
    }

    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="login-header">
          <BsPersonCircle className="login-icon" />
        </div>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label></label>
            <input
              type="text"
              name="userId"
              placeholder="User ID"
              value={values.userId}
              onChange={handleChange}
            />
            {errors.userId && <p style={{ color: "red" }}>{errors.userId}</p>}
          </div>

          <div className="field">
            <label></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password}</p>
            )}
          </div>

          <div className="field">
            <button className="btn btn-success">Sign In</button>
            <button
              type="button"
              className="btn btn-success"
              onClick={resetForm}
            >
              Reset
            </button>
            {Object.keys(errors).length === 0 && isSubmit && (
              <p style={{ color: "green" }}>Signed in successfully!</p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
