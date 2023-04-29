import { useState, useEffect } from "react";
import "./Login.css";
import { BsPersonCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function Login({ handleLogin }) {
  const initialValues = { userId: "", password: "" };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [signInSuccess, setSignInSuccess] = useState(false);
  const userIdRegex = /^[a-zA-Z0-9]+$/;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmit(true);
      // handleLogin();
      navigate("/Welcome");
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const validationErrors = validate(values);
  //   setErrors(validationErrors);
  //   if (Object.keys(validationErrors).length === 0) {
  //     setIsSubmit(true);
  //     fetch("http://192.168.1.5:8085/employees", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({ userId: values.userId, password: values.password }),
  //     })
  //       .then((response) => response.json())
  //       .then((result) => {
  //         console.log(result);
  //         if (result.success) {
  //           setSignInSuccess(true);
  //           handleLogin(); // call this function to set authenticated state in your app
  //           navigate("/Welcome");
  //         } else {
  //           setSignInSuccess(false);
  //           setErrors({ signIn: result.message });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setSignInSuccess(false);
  //         setErrors({ signIn: "Error signing in. Please try again." });
  //       });
  //   }
  // };

  const resetForm = (e) => {
    e.preventDefault();
    setValues(initialValues);
    setErrors({});
    setIsSubmit(false);
    setSignInSuccess(false);
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && isSubmit) {
  //     fetch("http://localhost:8080/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(values),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.success) {
  //           setSignInSuccess(true);
  //           // handleLogin();
  //           navigate("/welcome");
  //         } else {
  //           setSignInSuccess(false);
  //           setErrors({ userId: "Incorrect User ID" });
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }
  // }, [errors]);

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
              // required
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
              // required
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
