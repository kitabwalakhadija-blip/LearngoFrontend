// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function FacultyPanel() {
//   /* ---------- FIELD DEFINITIONS ---------- */

//   const ENQUIRY_FIELDS = [
//     "Eid",
//     "student_name",
//     "phone",
//     "CID",
//     "Department",
//     "ConsellerName",
//     "Percentage",
//     "Qualification",
//     "WantToTakeAdmission",
//     "PurposeOfCourse",
//     "SuggestedCourse",
//     "email",
//     "Cname",
//     "permanent_address",
//     "temporary_address",
//     "ContactNo",
//     "father_name",
//     "designation",
//     "organisation",
//     "mother_name",
//   ];

//   const FOLLOWUP_FIELDS = [
//     "Eid",
//     "student_name",
//     "phone",
//     "Department",
//     "ConsellerName",
//     "SuggestedCourse",
//     "followup_detail",
//     "response",
//     "FollowUpDate",
//     "EnquiryDate",
//   ];

//   const COURSE_FIELDS = ["Name", "Duration"];
//   const PROFILE_FIELDS = [
//     "Name",
//     "Email",
//     "Department",
//     "Experience",
//     "Qualification",
//     "Address",
//     "Contact no",
//   ];

//   /* ---------- STATES ---------- */

//   const [page, setPage] = useState("home");

//   const [enquiries, setEnquiries] = useState([]);
//   const [followups, setFollowups] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [profile, setProfile] = useState([]);

//   const [formData, setFormData] = useState(null);
//   const [editIndex, setEditIndex] = useState(null);

//   const [searchText, setSearchText] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   /* ---------- FETCH ---------- */

//   const fetchEnquiry = async () => {
//     const res = await axios.get("http://localhost:5000/api/enquirytable");
//     setEnquiries(res.data);
//   };

//   const fetchFollowup = async () => {
//     const res = await axios.get("http://localhost:5000/api/Followuptable");
//     setFollowups(res.data);
//   };

//   const fetchCourses = async () => {
//     const res = await axios.get("http://localhost:5000/api/Coursetable");
//     setCourses(res.data);
//   };

//   const fetchProfile = async () => {
//     const res = await axios.get("http://localhost:5000/api/faculty");
//     setProfile(res.data);
//   };

//   useEffect(() => {
//     fetchEnquiry();
//     fetchFollowup();
//     fetchCourses();
//     fetchProfile();
//   }, []);

//   /* ---------- TABLE ---------- */

//   const getTable = () => {
//     if (page === "enquiry") return [ENQUIRY_FIELDS, enquiries, setEnquiries];
//     if (page === "followup") return [FOLLOWUP_FIELDS, followups, setFollowups];
//     if (page === "course") return [COURSE_FIELDS, courses, setCourses];
//     if (page === "profile") return [PROFILE_FIELDS, profile, setProfile];
//     return [];
//   };

//   /* ---------- SAVE ---------- */

//   const saveData = async () => {
//     try {
//       if (page === "enquiry") {
//         // ✅ SAVE ENQUIRY
//         const res = await axios.post(
//           "http://localhost:5000/api/enquirytable",
//           formData,
//         );

//         // ✅ ALSO SAVE FOLLOWUP (IMPORTANT FIX)
//         await axios.post("http://localhost:5000/api/Followuptable", {
//           ...formData,
//           followup_detail: "",
//           response: "",
//           EnquiryDate: new Date(),
//           FollowUpDate: null,
//         });

//         fetchEnquiry();
//         fetchFollowup();
//       }

//       if (page === "followup") {
//         await axios.post("http://localhost:5000/api/Followuptable", formData);
//         fetchFollowup();
//       }

//       setFormData(null);
//       setEditIndex(null);
//     } catch (err) {
//       console.error(err);
//       alert("Error saving data");
//     }
//   };

//   /* ---------- DELETE ---------- */

//   const deleteRow = async (row) => {
//     if (page === "enquiry") {
//       await axios.delete(`http://localhost:5000/api/enquirytable/${row._id}`);
//       fetchEnquiry();
//     }

//     if (page === "followup") {
//       await axios.delete(`http://localhost:5000/api/Followuptable/${row._id}`);
//       fetchFollowup();
//     }
//   };

//   /* ---------- SEARCH ---------- */

//   const filteredData =
//     page === "enquiry" || page === "followup"
//       ? getTable()[1].filter((row) =>
//           row.student_name?.toLowerCase().includes(searchText.toLowerCase()),
//         )
//       : getTable()[1];

//   /* ---------- PASSWORD ---------- */

//   const changePassword = async () => {
//     if (!profile.length) return;

//     await axios.put(`http://localhost:5000/api/faculty/${profile[0]._id}`, {
//       Password: newPassword,
//     });

//     alert("Password Updated");
//   };

//   const [fields, data] = getTable();

//   /* ---------- UI ---------- */

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* SIDEBAR */}

//       <div
//         style={{
//           width: "240px",
//           background: "linear-gradient(180deg,#1e293b,#0f172a)",
//           color: "white",
//           padding: "20px",
//         }}
//       >
//         <h4 className="mb-4">Faculty Panel</h4>

//         {["home", "profile", "enquiry", "followup", "course", "password"].map(
//           (p) => (
//             <button
//               key={p}
//               className="btn btn-outline-light w-100 mb-2"
//               onClick={() => setPage(p)}
//             >
//               {p}
//             </button>
//           ),
//         )}
//       </div>

//       {/* MAIN */}

//       <div style={{ flex: 1, padding: "25px", background: "#f1f5f9" }}>
//         {/* HOME */}

//         {page === "home" && (
//           <div className="row g-3">
//             <div className="col-md-4">
//               <div className="card p-3 shadow">
//                 Enquiries: {enquiries.length}
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card p-3 shadow">
//                 Followups: {followups.length}
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card p-3 shadow">Courses: {courses.length}</div>
//             </div>
//           </div>
//         )}

//         {/* PASSWORD */}

//         {page === "password" && (
//           <div className="card p-4 shadow" style={{ maxWidth: "400px" }}>
//             <h4>Change Password</h4>

//             <input
//               type="password"
//               className="form-control mb-2"
//               placeholder="New Password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />

//             <button className="btn btn-success" onClick={changePassword}>
//               Update
//             </button>
//           </div>
//         )}

//         {/* TABLES */}

//         {page !== "home" && page !== "password" && (
//           <>
//             <div className="d-flex justify-content-between mb-3">
//               <h4>{page} Table</h4>

//               <button
//                 className="btn btn-success"
//                 onClick={() => setFormData({})}
//               >
//                 + Add
//               </button>
//             </div>

//             <input
//               className="form-control mb-3"
//               placeholder="Search..."
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />

//             {/* FORM */}

//             {formData && (
//               <div className="card p-3 mb-3 shadow">
//                 {fields.map((f, i) => (
//                   <input
//                     key={i}
//                     className="form-control mb-2"
//                     placeholder={f}
//                     value={formData[f] || ""}
//                     onChange={(e) =>
//                       setFormData({ ...formData, [f]: e.target.value })
//                     }
//                   />
//                 ))}

//                 <button className="btn btn-primary" onClick={saveData}>
//                   Save
//                 </button>

//                 <button
//                   className="btn btn-secondary ms-2"
//                   onClick={() => setFormData(null)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             )}

//             {/* TABLE */}

//             <table className="table table-bordered table-hover shadow">
//               <thead className="table-dark">
//                 <tr>
//                   {fields.map((f, i) => (
//                     <th key={i}>{f}</th>
//                   ))}
//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredData.map((row, i) => (
//                   <tr key={i}>
//                     {fields.map((f, j) => (
//                       <td key={j}>{row[f]}</td>
//                     ))}

//                     <td>
//                       {/* ✅ EDIT BUTTON ADDED */}
//                       <button
//                         className="btn btn-warning btn-sm me-2"
//                         onClick={() => {
//                           setFormData(row);
//                           setEditIndex(i);
//                         }}
//                       >
//                         Edit
//                       </button>

//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => deleteRow(row)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function FacultyPanel() {
//   /* ---------- FIELD DEFINITIONS ---------- */

//   const ENQUIRY_FIELDS = [
//     "Eid",
//     "student_name",
//     "phone",
//     "CID",
//     "Department",
//     "ConsellerName",
//     "Percentage",
//     "Qualification",
//     "WantToTakeAdmission",
//     "PurposeOfCourse",
//     "SuggestedCourse",
//     "email",
//     "Cname",
//     "permanent_address",
//     "temporary_address",
//     "ContactNo",
//     "father_name",
//     "designation",
//     "organisation",
//     "mother_name",
//   ];

//   const FOLLOWUP_FIELDS = [
//     "Eid",
//     "student_name",
//     "phone",
//     "Department",
//     "ConsellerName",
//     "SuggestedCourse",
//     "followup_detail",
//     "response",
//     "FollowUpDate",
//     "EnquiryDate",
//   ];

//   const COURSE_FIELDS = ["Name", "Duration"];
//   const PROFILE_FIELDS = [
//     "Name",
//     "Email",
//     "Department",
//     "Experience",
//     "Qualification",
//     "Address",
//     "Contact no",
//   ];

//   /* ---------- STATES ---------- */

//   const [page, setPage] = useState("home");

//   const [enquiries, setEnquiries] = useState([]);
//   const [followups, setFollowups] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [profile, setProfile] = useState([]);

//   const [formData, setFormData] = useState(null);
//   const [editIndex, setEditIndex] = useState(null);

//   const [searchText, setSearchText] = useState("");
//   const [newPassword, setNewPassword] = useState("");

//   /* ---------- FETCH ---------- */

//   const fetchEnquiry = async () => {
//     const res = await axios.get("http://localhost:5000/api/enquirytable");
//     setEnquiries(res.data);
//   };

//   const fetchFollowup = async () => {
//     const res = await axios.get("http://localhost:5000/api/Followuptable");
//     setFollowups(res.data);
//   };

//   const fetchCourses = async () => {
//     const res = await axios.get("http://localhost:5000/api/Coursetable");
//     setCourses(res.data);
//   };

//   const fetchProfile = async () => {
//     const res = await axios.get("http://localhost:5000/api/faculty");
//     setProfile(res.data);
//   };

//   useEffect(() => {
//     fetchEnquiry();
//     fetchFollowup();
//     fetchCourses();
//     fetchProfile();
//   }, []);

//   /* ---------- TABLE ---------- */

//   const getTable = () => {
//     if (page === "enquiry") return [ENQUIRY_FIELDS, enquiries, setEnquiries];
//     if (page === "followup") return [FOLLOWUP_FIELDS, followups, setFollowups];
//     if (page === "course") return [COURSE_FIELDS, courses, setCourses];
//     if (page === "profile") return [PROFILE_FIELDS, profile, setProfile];
//     return [];
//   };

//   /* ---------- SAVE ---------- */

//   const saveData = async () => {
//     try {
//       if (page === "enquiry") {
//         // ✅ SAVE ENQUIRY
//         const res = await axios.post(
//           "http://localhost:5000/api/enquirytable",
//           formData,
//         );

//         // ✅ ALSO SAVE FOLLOWUP (IMPORTANT FIX)
//         await axios.post("http://localhost:5000/api/Followuptable", {
//           ...formData,
//           followup_detail: "",
//           response: "",
//           EnquiryDate: new Date(),
//           FollowUpDate: null,
//         });

//         fetchEnquiry();
//         fetchFollowup();
//       }

//       if (page === "followup") {
//         await axios.post("http://localhost:5000/api/Followuptable", formData);
//         fetchFollowup();
//       }

//       setFormData(null);
//       setEditIndex(null);
//     } catch (err) {
//       console.error(err);
//       alert("Error saving data");
//     }
//   };

//   /* ---------- DELETE ---------- */

//   const deleteRow = async (row) => {
//     if (page === "enquiry") {
//       await axios.delete(`http://localhost:5000/api/enquirytable/${row._id}`);
//       fetchEnquiry();
//     }

//     if (page === "followup") {
//       await axios.delete(`http://localhost:5000/api/Followuptable/${row._id}`);
//       fetchFollowup();
//     }
//   };

//   /* ---------- SEARCH ---------- */

//   const filteredData =
//     page === "enquiry" || page === "followup"
//       ? getTable()[1].filter((row) =>
//           row.student_name?.toLowerCase().includes(searchText.toLowerCase()),
//         )
//       : getTable()[1];

//   /* ---------- PASSWORD ---------- */

//   const changePassword = async () => {
//     if (!profile.length) return;

//     await axios.put(`http://localhost:5000/api/faculty/${profile[0]._id}`, {
//       Password: newPassword,
//     });

//     alert("Password Updated");
//   };

//   const [fields, data] = getTable();

//   /* ---------- UI ---------- */

//   return (
//     <div style={{ display: "flex", height: "100vh" }}>
//       {/* SIDEBAR */}

//       <div
//         style={{
//           width: "240px",
//           background: "linear-gradient(180deg,#1e293b,#0f172a)",
//           color: "white",
//           padding: "20px",
//         }}
//       >
//         <h4 className="mb-4">Faculty Panel</h4>

//         {["home", "profile", "enquiry", "followup", "course", "password"].map(
//           (p) => (
//             <button
//               key={p}
//               className="btn btn-outline-light w-100 mb-2"
//               onClick={() => setPage(p)}
//             >
//               {p}
//             </button>
//           ),
//         )}
//       </div>

//       {/* MAIN */}

//       <div style={{ flex: 1, padding: "25px", background: "#f1f5f9" }}>
//         {/* HOME */}

//         {page === "home" && (
//           <div className="row g-3">
//             <div className="col-md-4">
//               <div className="card p-3 shadow">
//                 Enquiries: {enquiries.length}
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card p-3 shadow">
//                 Followups: {followups.length}
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card p-3 shadow">Courses: {courses.length}</div>
//             </div>
//           </div>
//         )}

//         {/* PASSWORD */}

//         {page === "password" && (
//           <div className="card p-4 shadow" style={{ maxWidth: "400px" }}>
//             <h4>Change Password</h4>

//             <input
//               type="password"
//               className="form-control mb-2"
//               placeholder="New Password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//             />

//             <button className="btn btn-success" onClick={changePassword}>
//               Update
//             </button>
//           </div>
//         )}

//         {/* TABLES */}

//         {page !== "home" && page !== "password" && (
//           <>
//             <div className="d-flex justify-content-between mb-3">
//               <h4>{page} Table</h4>

//               <button
//                 className="btn btn-success"
//                 onClick={() => setFormData({})}
//               >
//                 + Add
//               </button>
//             </div>

//             <input
//               className="form-control mb-3"
//               placeholder="Search..."
//               value={searchText}
//               onChange={(e) => setSearchText(e.target.value)}
//             />

//             {/* FORM */}

//             {formData && (
//               <div className="card p-3 mb-3 shadow">
//                 {fields.map((f, i) => (
//                   <input
//                     key={i}
//                     className="form-control mb-2"
//                     placeholder={f}
//                     value={formData[f] || ""}
//                     onChange={(e) =>
//                       setFormData({ ...formData, [f]: e.target.value })
//                     }
//                   />
//                 ))}

//                 <button className="btn btn-primary" onClick={saveData}>
//                   Save
//                 </button>

//                 <button
//                   className="btn btn-secondary ms-2"
//                   onClick={() => setFormData(null)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             )}

//             {/* TABLE */}

//             <table className="table table-bordered table-hover shadow">
//               <thead className="table-dark">
//                 <tr>
//                   {fields.map((f, i) => (
//                     <th key={i}>{f}</th>
//                   ))}
//                   <th>Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {filteredData.map((row, i) => (
//                   <tr key={i}>
//                     {fields.map((f, j) => (
//                       <td key={j}>{row[f]}</td>
//                     ))}

//                     <td>
//                       {/* ✅ EDIT BUTTON ADDED */}
//                       <button
//                         className="btn btn-warning btn-sm me-2"
//                         onClick={() => {
//                           setFormData(row);
//                           setEditIndex(i);
//                         }}
//                       >
//                         Edit
//                       </button>

//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => deleteRow(row)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function FacultyPanel() {
  const ENQUIRY_FIELDS = [
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
    "Occupation_father",
    "designation",
    "organisation",
    "mother_name",
    "Occupation_mother",
    "Siblings",
    "HowDidYouComeToKnowAboutUs",
  ];

  const FOLLOWUP_FIELDS = [
    "Eid",
    "student_name",
    "phone",
    "Department",
    "ConsellerName",
    "WantToTakeAdmission",
    "SuggestedCourse",
    "followup_detail",
    "response",
    "Cname",
    "permanent_address",
    "Response",
    "FollowUpDate",
    "EnquiryDate",
  ];

  const COURSE_FIELDS = [
    "_id",
    "title",
    "description",
     "link",
    "duration"
    
  ];

  const PROFILE_FIELDS = [
    "FacName",
    "FacEmail",
    "FacDepartment",
    "Experience",
    "FacQualification",
    "Address",
    "FacPhoneNo",
    "UserID",
    "Password"
  ];

  const [page, setPage] = useState("home");
  const [formData, setFormData] = useState(null);
  const [editId, setEditId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [enquiries, setEnquiries] = useState([]);
  const [followups, setFollowups] = useState([]);
  const [courses, setCourses] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const logout = () => {
    localStorage.removeItem("faculty"); // clear login data
    setCurrentFaculty(null); // clear state
    window.location.href = "/facultylogin"; // redirect
  };

  const getFirstSuccess = async (configs, fallback = []) => {
    for (const config of configs) {
      try {
        const res = await axios(config);
        return res.data;
      } catch (err) {}
    }
    return fallback;
  };
  

  const fetchEnquiries = async () => {
    const data = await getFirstSuccess(
      [
        
        { method: "get", url: "http://localhost:5000/api/Enquirytable" },
      ],
      [],
    );
    setEnquiries(Array.isArray(data) ? data : []);
  };

  const fetchFollowups = async () => {
    const data = await getFirstSuccess(
      [
        { method: "get", url: "http://localhost:5000/api/Followuptable" },
        
      ],
      [],
    );
    setFollowups(Array.isArray(data) ? data : []);
  };

  const fetchCourses = async () => {
    const data = await getFirstSuccess(
      [
        { method: "get", url: "http://localhost:5000/api/Coursetable" },
        
      ],
      [],
    );
    setCourses(Array.isArray(data) ? data : []);
  };

  const fetchFaculty = async () => {
    const data = await getFirstSuccess(
      [
        
        { method: "get", url: "http://localhost:5000/api/Facultytable" },
      ],
      [],
    );
    setFaculty(Array.isArray(data) ? data : []);
  };

  const fetchAll = async () => {
    await Promise.all([
      fetchEnquiries(),
      fetchFollowups(),
      fetchCourses(),
      fetchFaculty(),
    ]);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const [currentFaculty, setCurrentFaculty] = useState(
    JSON.parse(localStorage.getItem("faculty")),
  );
  useEffect(() => {
    if (!currentFaculty) {
      window.location.href = "/facultylogin";
    }
  }, []);

  const getTable = () => {
    if (page === "enquiry") return [ENQUIRY_FIELDS, enquiries];
    if (page === "followup") return [FOLLOWUP_FIELDS, followups];
    if (page === "courses") return [COURSE_FIELDS, courses];
    return [[], []];
  };

  const [fields, data] = getTable();

  const filteredData = useMemo(() => {
    if (page !== "enquiry" && page !== "followup") return data;

    const q = searchText.trim().toLowerCase();
    if (!q) return data;

    return data.filter((row) =>
      Object.values(row || {})
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [page, data, searchText]);

  const openAddForm = () => {
    const obj = {};
    fields.forEach((f) => {
      if (f !== "_id") obj[f] = "";
    });
    setFormData(obj);
    setEditId(null);
  };

  const openEditForm = (row) => {
    setFormData({ ...row });
    setEditId(row._id || null);
  };

  const saveData = async () => {
    try {
      if (!formData) return;

      if (page === "enquiry") {
        if (editId) {
          await getFirstSuccess([
            {
              method: "put",
              url: `http://localhost:5000/api/enquirytable/${editId}`,
              data: formData,
            },
            {
              method: "put",
              url: `http://localhost:5000/api/Enquirytable/${editId}`,
              data: formData,
            },
          ]);
        } else {
          await getFirstSuccess([
            {
              method: "post",
              url: "http://localhost:5000/api/enquirytable",
              data: formData,
            },
            {
              method: "post",
              url: "http://localhost:5000/api/Enquirytable",
              data: formData,
            },
          ]);
        }
        await fetchEnquiries();
      }

      if (page === "followup") {
        if (editId) {
          await getFirstSuccess([
            {
              method: "put",
              url: `http://localhost:5000/api/Followuptable/${editId}`,
              data: formData,
            },
            {
              method: "put",
              url: `http://localhost:5000/api/followup/${editId}`,
              data: formData,
            },
          ]);
        } else {
          await getFirstSuccess([
            {
              method: "post",
              url: "http://localhost:5000/api/Followuptable",
              data: formData,
            },
            {
              method: "post",
              url: "http://localhost:5000/api/followup",
              data: formData,
            },
          ]);
        }
        await fetchFollowups();
      }

      setFormData(null);
      setEditId(null);
    } catch (err) {
      console.error("Save error:", err);
      alert("Error saving data");
    }
  };

  const deleteRow = async (row) => {
    try {
      if (page === "enquiry") {
        await getFirstSuccess([
          {
            method: "delete",
            url: `http://localhost:5000/api/enquirytable/${row._id}`,
          },
          {
            method: "delete",
            url: `http://localhost:5000/api/Enquirytable/${row._id}`,
          },
        ]);
        await fetchEnquiries();
      }

      if (page === "followup") {
        await getFirstSuccess([
          {
            method: "delete",
            url: `http://localhost:5000/api/Followuptable/${row._id}`,
          },
          {
            method: "delete",
            url: `http://localhost:5000/api/followup/${row._id}`,
          },
        ]);
        await fetchFollowups();
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting data");
    }
  };

  const saveProfile = async () => {
    try {
      if (!currentFaculty?._id) {
        alert("No faculty profile found");
        return;
      }

      await getFirstSuccess([
        {
          method: "put",
          url: `http://localhost:5000/api/faculty/${currentFaculty._id}`,
          data: currentFaculty,
        },
        {
          method: "put",
          url: `http://localhost:5000/api/facultytable/${currentFaculty._id}`,
          data: currentFaculty,
        },
        {
          method: "put",
          url: `http://localhost:5000/api/Facultytable/${currentFaculty._id}`,
          data: currentFaculty,
        },
      ]);

      alert("Profile updated");
      await fetchFaculty();
    } catch (err) {
      console.error("Profile update error:", err);
      alert("Error updating profile");
    }
  };

  const changePassword = async () => {
    try {
      if (!currentFaculty?._id) {
        alert("No faculty profile found");
        return;
      }

      await getFirstSuccess([
        {
          method: "put",
          url: `http://localhost:5000/api/faculty/${currentFaculty._id}`,
          data: { Password: newPassword },
        },
        {
          method: "put",
          url: `http://localhost:5000/api/facultytable/${currentFaculty._id}`,
          data: { Password: newPassword },
        },
        {
          method: "put",
          url: `http://localhost:5000/api/Facultytable/${currentFaculty._id}`,
          data: { Password: newPassword },
        },
      ]);

      // ✅ IMPORTANT FIX
      const updated = { ...currentFaculty, Password: newPassword };
      setCurrentFaculty(updated);
      localStorage.setItem("faculty", JSON.stringify(updated));

      alert("Password updated");
      setNewPassword("");
    } catch (err) {
      console.error("Password update error:", err);
      alert("Error updating password");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "240px",
          background: "linear-gradient(180deg,#1e293b,#0f172a)",
          color: "white",
          padding: "20px",
        }}
      >
        <h4 className="mb-4">Faculty Panel</h4>

        {["home", "profile", "enquiry", "followup", "courses", "password"].map(
          (p) => (
            <button
              key={p}
              className="w-100 mb-2"
              style={{
                background: page === p ? "#22c55e" : "transparent",
                border: "1px solid #334155",
                color: "white",
                padding: "10px",
                borderRadius: "8px",
              }}
              onClick={() => {
                setPage(p);
                setFormData(null);
                setEditId(null);
                setSearchText("");
              }}
            >
              {p}
            </button>
          ),
        )}
        <button
          className="w-100 mt-3"
          style={{
            background: "#ef4444",
            border: "none",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
          }}
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div
        style={{
          flex: 1,
          background: "#f1f5f9",
          padding: "25px",
          overflow: "auto",
        }}
      >
        {page === "home" && (
          <div className="row g-4">
            <div className="col-md-4">
              <div
                className="card p-4 text-white text-center shadow"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#60a5fa)",
                }}
              >
                <h5>Total Enquiries</h5>
                <h2>{enquiries.length}</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card p-4 text-white text-center shadow"
                style={{
                  background: "linear-gradient(135deg,#16a34a,#22c55e)",
                }}
              >
                <h5>Total Followups</h5>
                <h2>{followups.length}</h2>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="card p-4 text-white text-center shadow"
                style={{
                  background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
                }}
              >
                <h5>Total Courses</h5>
                <h2>{courses.length}</h2>
              </div>
            </div>
          </div>
        )}

        {page === "profile" && (
          <div className="card p-4 shadow" style={{ maxWidth: "700px" }}>
            <h4 className="mb-3">Profile</h4>

            {!currentFaculty ? (
              <div className="alert alert-warning mb-0">
                No faculty profile found.
              </div>
            ) : (
              <>
                {PROFILE_FIELDS.map((f, i) => (
                  <div key={i} className="mb-2">
                    <label className="form-label">{f}</label>
                    <input
                      className="form-control"
                      value={currentFaculty[f] || ""}
                      onChange={(e) =>
                        setCurrentFaculty({
                          ...currentFaculty,
                          [f]: e.target.value,
                        })
                      }
                    />
                  </div>
                ))}

                <button className="btn btn-success mt-2" onClick={saveProfile}>
                  Save Profile
                </button>
              </>
            )}
          </div>
        )}

        {page === "password" && (
          <div className="card p-4 shadow" style={{ maxWidth: "450px" }}>
            <h4 className="mb-3">Change Password</h4>

            {!currentFaculty ? (
              <div className="alert alert-warning mb-0">
                No faculty profile found.
              </div>
            ) : (
              <>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />

                <button className="btn btn-success" onClick={changePassword}>
                  Update Password
                </button>
              </>
            )}
          </div>
        )}

        {(page === "enquiry" || page === "followup" || page === "courses") && (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="mb-0 text-capitalize">{page} Table</h4>

              {(page === "enquiry" || page === "followup") && (
                <button className="btn btn-success" onClick={openAddForm}>
                  + Add
                </button>
              )}
            </div>

            {(page === "enquiry" || page === "followup") && (
              <div className="mb-3">
                <input
                  className="form-control"
                  placeholder="Search by name / phone / id / any field"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            )}

            {formData && (page === "enquiry" || page === "followup") && (
              <div className="card p-3 mb-3 shadow">
                {fields.map((f, i) => (
                  <div key={i} className="mb-2">
                    <label className="form-label">{f}</label>
                    <input
                      className="form-control"
                      value={formData[f] || ""}
                      onChange={(e) =>
                        setFormData({ ...formData, [f]: e.target.value })
                      }
                    />
                  </div>
                ))}

                <div className="mt-2">
                  <button className="btn btn-primary me-2" onClick={saveData}>
                    Save
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setFormData(null);
                      setEditId(null);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div style={{ overflowX: "auto" }}>
              <table
                className="table table-bordered table-hover bg-white shadow-sm"
                style={{ minWidth: "1600px" }}
              >
                <thead className="table-dark">
                  <tr>
                    {fields.map((f, i) => (
                      <th key={i}>{f}</th>
                    ))}
                    {(page === "enquiry" || page === "followup") && (
                      <th>Action</th>
                    )}
                  </tr>
                </thead>

                <tbody>
                  {filteredData.length === 0 ? (
                    <tr>
                      <td
                        colSpan={
                          fields.length +
                          (page === "enquiry" || page === "followup" ? 1 : 0)
                        }
                        className="text-center"
                      >
                        No Data
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((row, i) => (
                      <tr key={i}>
                        {fields.map((f, j) => (
                          <td key={j}>{row[f] ?? ""}</td>
                        ))}

                        {(page === "enquiry" || page === "followup") && (
                          <td>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() => openEditForm(row)}
                            >
                              Edit
                            </button>

                            <button
                              className="btn btn-danger btn-sm"
                              onClick={() => deleteRow(row)}
                            >
                              Delete
                            </button>
                          </td>
                        )}
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
}