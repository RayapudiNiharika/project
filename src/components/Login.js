import { useState, useEffect } from "react";
import "./Login.css";


function Login() {
  const initialValues = {  Userid: "", Password: "" };
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmit(true);
  };


  const resetForm=(e)=>{
    // e.preventDefault();
     setValues({Userid: "", Password: ""});
     
     
    
   
   
  }

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && isSubmit) {
      console.log(values);
    }
  }, [errors]);


  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

   
    if (!values.Userid) {
      errors.Userid = "Userid is required!";
    } else if (!regex.test(values.Userid)) {
      errors.Userid = " Not a valid format!";
    }


    if (!values.Password) {
      errors.Password = "Password is required!";
    } else if (values.Password.length < 4) {
      errors.Password = "Password must be more than 4 characters";
    } else if (values.Password.length > 10) {
      errors.Password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {/* {
      Object.keys(errors).length === 0 && isSubmit ? 
      (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(values, undefined, 2)}</pre>
      )
      } */}

      <form onSubmit={handleSubmit}>
        <center><h6 >Enter Credentials</h6></center>
        <br></br>
        <div className="ui divider"></div>
        <div className="ui form">
          
          
          <div className="field">
            <center>
            <label>Userid</label>
            <br></br>
            <input
              type="text"
              name="Userid"
              placeholder="Userid"
              value={values.Userid}
              onChange={handleChange}
            />
            </center>
          </div>
          <center><p>{errors.Userid}</p></center>


          <div className="field">
            <center>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="Password"
              placeholder="Password"
              value={values.Password}
              onChange={handleChange}
            />
            </center>
          </div>
          <center><p>{errors.Password}</p></center>
          
         
          <center>
          {/* <input type="submit" value="Sign-In"></input> */}
          <button className="btn btn-success">Sign-In</button>
          
         {/* <br></br>  */}
          {/* <input type="button" value="Reset Form" onClick={() => resetForm()}/> */}
          <button className="btn btn-success" value="Reset Form" onClick={() => resetForm()}>Reset </button>
          
          </center>
          
        </div>
        
      </form>
    </div>
  );
}

export default Login;