import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FacultyLogin() {
  const [UserID, setUserID] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedUserId = UserID.trim();
    const trimmedPassword = Password.trim();

    if (!trimmedUserId || !trimmedPassword) {
      setError("UserID and Password are required");
      return;
    }

    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/facultylogin", {
        UserID: trimmedUserId,
        Password: trimmedPassword,
      });

      // ✅ store faculty data
      localStorage.setItem("faculty", JSON.stringify(res.data.faculty));

      // ✅ redirect
      window.location.href = "/facultypanel";
    } catch (err) {
      console.log(err);
      setError("Invalid UserID or Password");
    }
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}
    >
      <div className="card shadow p-4" style={{ width: "350px" }}>
        <h4 className="text-center mb-3">Faculty Login</h4>

        {/* ✅ FORM START */}
        <form onSubmit={handleSubmit}>
          {/* USER ID */}
          <div className="mb-2">
            <label>User ID</label>
            <input
              type="text"
              className="form-control"
              value={UserID}
              onChange={(e) => setUserID(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-2">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* ERROR */}
          {error && <div className="text-danger mb-2">{error}</div>}

          {/* BUTTON */}
          <button type="submit" className="btn btn-success w-100">
            Login
          </button>
        </form>
        {/* ✅ FORM END */}
      </div>
    </div>
  );
}
