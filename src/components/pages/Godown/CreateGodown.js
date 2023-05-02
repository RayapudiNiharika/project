import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function CreateGodown() {
  const [godown_id, setGodown_id] = useState("");
  const [location, setLocation] = useState("");
  const [capacity, setCapacity] = useState("");
  const [manager, setManager] = useState("");
  const [start_date, setStart_date] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ godown_id, location, capacity, manager, start_date });
    const godown = {
      godown_id: godown_id,
      location: location,
      capacity: capacity,
      manager: manager,
      start_date: start_date,
    };
    console.log(godown);
    try {
      await axios.post("http://localhost:9002/godown", godown).then((res) => {
        alert("Data posted successfully!");
        console.log(res);
        navigate("/godown");
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add Godown</h2>
          <div className="mb-2">
            <label htmlFor="godown_id">godown_id</label>
            <input
              type="text"
              placeholder="Enter godown_id"
              className="form-control"
              value={godown_id}
              onChange={(e) => setGodown_id(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="location">location</label>
            <input
              type="text"
              placeholder="Enter location"
              className="form-control"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="capacity">capacity</label>
            <input
              type="text"
              placeholder="Enter capacity"
              className="form-control"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="manager">manager</label>
            <input
              type="text"
              placeholder="manager"
              className="form-control"
              value={manager}
              onChange={(e) => setManager(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="start_date">start_date</label>
            <input
              type="date"
              placeholder="Enter satrt_date"
              className="form-control"
              value={start_date}
              onChange={(e) => setStart_date(e.target.value)}
            />
          </div>

          <div className="form-group">
            <button className="btn btn-success" type="submit">
              Submit
            </button>
            <Link to="/godown" className="btn btn-danger">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateGodown;
