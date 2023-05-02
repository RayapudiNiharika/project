import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../../home/navbar";
import "./employees.css";

function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9002/employees")
      .then((response) => response.json())
      .then((employees) => setEmployees(employees));
  }, []);

  function handleDelete(id) {
    const confirm = window.confirm("Do you like to delete?");
    console.log(confirm);
    if (confirm) {
      axios.delete(`http://localhost:9002/employees/${id}`).then((res) => {
        alert("Record Deleted");
        Navigate("/Welcome");
      });
    }
  }

  return (
    <div>
      <Navbar />
      <div className="container-fluid vh-100 bg-none justify-content-center align-items-center my-5 opacity-90 shadow-lg p-3 mb-5 rounded">
        <div className="w-70 bg-white rounded p-3">
          <h3 className="p-3 mb-2 bg-secondary text-white">Employees Data</h3>
          <Link to="/createemployee" className="btn btn-success">
            Add+
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Phone</th>
                <th>Godown ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((data, i) => (
                <tr key={i}>
                  <td>{data.employee_id}</td>
                  <td>{data.name}</td>
                  <td>{data.username}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>{data.phone}</td>
                  <td>{data.godown_id}</td>
                  <td>
                    <Link to={`/update/${data.id}`} className="btn btn-primary">
                      Update
                    </Link>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
