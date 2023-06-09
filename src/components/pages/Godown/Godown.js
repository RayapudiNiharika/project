import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from "../../home/navbar";

function Godown() {
  const [godown, setGodown] = useState([]);

  // useEffect(()=>
  // {
  //     axios.get('http://localhost:9002/godown')
  //     .then(res=>setGodown(res.data))
  //     .then(err=>console.log(err))
  // }, [])

  useEffect(() => {
    fetch("http://localhost:9002/godown")
      .then((response) => response.json())
      .then((godown) => setGodown(godown));
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you like to delete?");
    console.log(confirm);
    if (confirm) {
      axios.delete(`http://localhost:9002/godown/${id}`).then((res) => {
        alert("Record Deleted");
        Navigate("/Welcome");
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex vh-100 bg-none justify-content-center aligh-items-center my-2 opacity-90 shadow-lg p-3 mb-5  rounded">
        <div className="w-70 bg-white rounded p-3">
          <h3 className="p-3 mb-2 bg-secondary text-white">Godown Data</h3>
          <Link to="/creategodown" className="btn btn-success">
            Add+
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th>godown_id</th>
                <th>location</th>
                <th>capacity</th>
                <th>manager</th>
                <th>start_date</th>
              </tr>
            </thead>
            <tbody>
              {godown.map((data, i) => (
                <tr key={i}>
                  <td>{data.godown_id}</td>
                  <td>{data.location}</td>
                  <td>{data.capacity}</td>
                  <td>{data.manager}</td>
                  <td>{data.start_date}</td>
                  <td>
                    {/* <Link to={`/update/${data.employee_id}`} className='btn btn-primary'>Update</Link> */}
                    {/* <button className='btn btn-danger ms-2' onClick={handleDelete(data.employee_id)}>Delete</button> */}
                    <button className="btn btn-danger" type="submit">
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

export default Godown;
