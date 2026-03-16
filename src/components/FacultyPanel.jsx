import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export default function FacultyPanel() {
  /* ---------- FIELD DEFINITIONS ---------- */

  const ENQUIRY_FIELDS = [
    "Eid",
    "student_name",
    "phone",
    "CID",
    "Department",
    "ConsellerName",
    "Percentage",
    "Qualification",
    "WantToTakeAdmission",
    "PurposeOfCourse",
    "SuggestedCourse",
    "email",
    "Cname",
    "permanent_address",
    "temporary_address",
    "ContactNo",
    "father_name",
    "designation",
    "organisation",
    "mother_name",
  ];

  const FOLLOWUP_FIELDS = [
    "Eid",
    "student_name",
    "phone",
    "Department",
    "ConsellerName",
    "SuggestedCourse",
    "followup_detail",
    "response",
    "FollowUpDate",
    "EnquiryDate",
  ];

  const COURSE_FIELDS = ["Cid", "Name", "Duration"];

  const PROFILE_FIELDS = [
    "Name",
    "Email",
    "Department",
    "Experience",
    "Qualification",
    "Address",
    "Contact no",
  ];

  /* ---------- STATES ---------- */

  const [page, setPage] = useState("home");

  const [enquiries, setEnquiries] = useState([]);
  const [followups, setFollowups] = useState([]);
  const [courses, setCourses] = useState([]);
  const [profile, setProfile] = useState([]);

  const [formData, setFormData] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const [searchText, setSearchText] = useState("");
  const [newPassword, setNewPassword] = useState("");

  /* ---------- FETCH DATABASE ---------- */

  const fetchEnquiry = async () => {
    const res = await axios.get("http://localhost:5000/api/enquirytable");
    setEnquiries(res.data);
  };

  const fetchFollowup = async () => {
    const res = await axios.get("http://localhost:5000/api/followup");
    setFollowups(res.data);
  };

  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:5000/api/course");
    setCourses(res.data);
  };

  const fetchProfile = async () => {
    const res = await axios.get("http://localhost:5000/api/faculty");
    setProfile(res.data);
  };

  useEffect(() => {
    fetchEnquiry();
    fetchFollowup();
    fetchCourses();
    fetchProfile();
  }, []);

  /* ---------- TABLE SELECTOR ---------- */

  const getTable = () => {
    if (page === "enquiry") return [ENQUIRY_FIELDS, enquiries, setEnquiries];
    if (page === "followup") return [FOLLOWUP_FIELDS, followups, setFollowups];
    if (page === "course") return [COURSE_FIELDS, courses, setCourses];
    if (page === "profile") return [PROFILE_FIELDS, profile, setProfile];
    return [];
  };

  /* ---------- SAVE DATA ---------- */

  const saveData = async () => {
    if (page === "enquiry") {
      await axios.post("http://localhost:5000/api/enquirytable", formData);
      fetchEnquiry();
    }

    if (page === "followup") {
      await axios.post("http://localhost:5000/api/followup", formData);
      fetchFollowup();
    }

    setFormData(null);
    setEditIndex(null);
  };

  /* ---------- DELETE DATA ---------- */

  const deleteRow = async (row) => {
    if (page === "enquiry") {
      await axios.delete(`http://localhost:5000/api/enquirytable/${row._id}`);
      fetchEnquiry();
    }

    if (page === "followup") {
      await axios.delete(`http://localhost:5000/api/followup/${row._id}`);
      fetchFollowup();
    }
  };

  /* ---------- SEARCH ---------- */

  const searchData = () => {
    if (page === "enquiry") {
      fetchEnquiry();
      setTimeout(() => {
        setEnquiries((prev) =>
          prev.filter((e) =>
            e.student_name?.toLowerCase().includes(searchText.toLowerCase()),
          ),
        );
      }, 200);
    }

    if (page === "followup") {
      fetchFollowup();
      setTimeout(() => {
        setFollowups((prev) =>
          prev.filter((f) =>
            f.student_name?.toLowerCase().includes(searchText.toLowerCase()),
          ),
        );
      }, 200);
    }
  };

  /* ---------- CHANGE PASSWORD ---------- */

  const changePassword = async () => {
    if (profile.length === 0) return;

    const facultyId = profile[0]._id;

    await axios.put(`http://localhost:5000/api/faculty/${facultyId}`, {
      Password: newPassword,
    });

    alert("Password Updated");
  };

  /* ---------- TABLE DATA ---------- */

  const [fields, data] = getTable();

  /* ---------- UI ---------- */

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* SIDEBAR */}

      <div
        style={{
          width: "240px",
          background: "#1e293b",
          color: "white",
          padding: "20px",
        }}
      >
        <h4>Faculty Panel</h4>

        {["home", "profile", "enquiry", "followup", "course", "password"].map(
          (p) => (
            <button
              key={p}
              className="btn btn-dark w-100 mb-2"
              onClick={() => setPage(p)}
            >
              {p}
            </button>
          ),
        )}
      </div>

      {/* MAIN */}

      <div style={{ flex: 1, padding: "25px", overflow: "auto" }}>
        {/* HOME */}

        {page === "home" && (
          <div className="row">
            <div className="col-md-4">
              <div className="card p-3">
                Total Enquiries: {enquiries.length}
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                Total Followups: {followups.length}
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">Courses: {courses.length}</div>
            </div>
          </div>
        )}

        {/* CHANGE PASSWORD */}

        {page === "password" && (
          <div className="card p-4" style={{ maxWidth: "400px" }}>
            <h4>Change Password</h4>

            <input
              type="password"
              className="form-control mb-2"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button className="btn btn-primary" onClick={changePassword}>
              Update Password
            </button>
          </div>
        )}

        {/* TABLE PAGES */}

        {page !== "home" && page !== "password" && (
          <>
            <div className="d-flex justify-content-between mb-3">
              <h4>{page} Table</h4>

              <button
                className="btn btn-success"
                onClick={() => {
                  setFormData({});
                }}
              >
                Add
              </button>
            </div>

            <div className="mb-3 d-flex gap-2">
              <input
                className="form-control"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />

              <button className="btn btn-primary" onClick={searchData}>
                Search
              </button>
            </div>

            {/* FORM */}

            {formData && (
              <div className="card p-3 mb-3">
                {fields.map((f, i) => (
                  <div key={i} className="mb-2">
                    <label>{f}</label>

                    <input
                      className="form-control"
                      value={formData[f] || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, [f]: e.target.value })
                      }
                    />
                  </div>
                ))}

                <button className="btn btn-primary" onClick={saveData}>
                  Save
                </button>

                <button
                  className="btn btn-secondary ms-2"
                  onClick={() => setFormData(null)}
                >
                  Cancel
                </button>
              </div>
            )}

            {/* TABLE */}

            <table className="table table-bordered">
              <thead>
                <tr>
                  {fields.map((f, i) => (
                    <th key={i}>{f}</th>
                  ))}

                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={fields.length + 1} className="text-center">
                      No Data
                    </td>
                  </tr>
                ) : (
                  data.map((row, i) => (
                    <tr key={i}>
                      {fields.map((f, j) => (
                        <td key={j}>{row[f]}</td>
                      ))}

                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => deleteRow(row)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}
