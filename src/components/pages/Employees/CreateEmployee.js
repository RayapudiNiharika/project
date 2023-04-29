import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./createemployees.css";

function CreateEmployee() {
  const [employee_id, setEmployee_id] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [godown_id, setGodown_id] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      employee_id,
      name,
      username,
      email,
      password,
      phone,
      godown_id,
    });
    const employee = {
      employee_id: employee_id,
      name: name,
      username: username,
      email: email,
      password: password,
      phone: phone,
      godown_id: godown_id,
    };
    console.log(employee);
    try {
      await axios
        .post("http://localhost:9002/employees", employee)
        .then((res) => {
          alert("Data posted successfully!");
          console.log(res);
          navigate("/employees");
        });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="create-employee-container">
      <div className="create-employee-form">
        <form onSubmit={handleSubmit}>
          <h2 className="create-employee-form-title">Add Employee</h2>
          <div className="create-employee-form-group">
            <label htmlFor="employee_id">Employee ID</label>
            <input
              type="text"
              placeholder="Enter employee_id"
              className="create-employee-form-input"
              value={employee_id}
              onChange={(e) => setEmployee_id(e.target.value)}
            />
          </div>

          <div className="create-employee-form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Enter name"
              className="create-employee-form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="create-employee-form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="create-employee-form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="create-employee-form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              placeholder="Enter email"
              className="create-employee-form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="create-employee-form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="create-employee-form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="create-employee-form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              placeholder="Enter phone"
              className="create-employee-form-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="create-employee-form-group">
            <label htmlFor="godown_id">Godown ID</label>
            <input
              type="text"
              placeholder="Enter godown_id"
              className="create-employee-form-input"
              value={godown_id}
              onChange={(e) => setGodown_id(e.target.value)}
            />
          </div>
          <div className="create-employee-form-group">
            <button type="submit" className="create-employee-form-submit">
              Add Employee
            </button>
            <Link to="/employees" className="create-employee-form-cancel">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CreateEmployee;
