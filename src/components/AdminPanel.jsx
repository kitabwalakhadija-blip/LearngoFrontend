// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";

// export default function AdminPanel() {
//   const ADMIN_ID = "Khadija";
//   const ADMIN_PASS = "Khadija5253";

//   const [loggedIn, setLoggedIn] = useState(false);
//   const [adminId, setAdminId] = useState("");
//   const [adminPass, setAdminPass] = useState("");
//   const [loginError, setLoginError] = useState(false);

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
//     "Occupation_father",
//     "designation",
//     "organisation",
//     "mother_name",
//     "Occupation_mother",
//     "Siblings",
//     "HowDidYouComeToKnowAboutUs",
//   ];

//   const FOLLOWUP_FIELDS = [
//     "Eid",
//     "student_name",
//     "phone",
//     "Department",
//     "ConsellerName",
//     "WantToTakeAdmission",
//     "SuggestedCourse",
//     "followup_detail",
//     "response",
//     "Cname",
//     "permanent_address",
//     "Response",
//     "FollowupDate",
//     "EnquiryDate",
//   ];

//   const CONTACT_FIELDS = ["name", "email", "phoneNo", "message"];

//   const FACULTY_FIELDS = [
//     "Name",
//     "Email",
//     "Student assign",
//     "Department",
//     "Experience",
//     "Qualification",
//     "Address",
//     "Contact no",
//     "UserID",
//     "Password",
//   ];

//   const COURSE_FIELDS = ["_id", "Name", "Duration", "CourseDetail"];

//   const [page, setPage] = useState("dashboard");
//   const [formData, setFormData] = useState(null);
//   const [editIndex, setEditIndex] = useState(null);

//   const [enquiries, setEnquiries] = useState([]);
//   const [followups, setFollowups] = useState([]);
//   const [contacts, setContacts] = useState([]);
//   const [faculty, setFaculty] = useState([]);
//   const [courses, setCourses] = useState([]);

//   const [searchText, setSearchText] = useState("");

//   const login = () => {
//     if (adminId === ADMIN_ID && adminPass === ADMIN_PASS) {
//       setLoggedIn(true);
//       setLoginError(false);
//     } else {
//       setLoginError(true);
//     }
//   };

//   const logout = () => {
//     setLoggedIn(false);
//     setAdminId("");
//     setAdminPass("");
//   };

//   const fetchEnquiries = async () => {
//     const res = await axios.get("http://localhost:5000/api/enquirytable");
//     setEnquiries(res.data);
//   };

//   const fetchFollowups = async () => {
//     const res = await axios.get("http://localhost:5000/api/Followuptable");
//     setFollowups(res.data);
//   };

//   const fetchContacts = async () => {
//     const res = await axios.get("http://localhost:5000/api/ContactUstable");
//     setContacts(res.data);
//   };

//   const fetchFaculty = async () => {
//     const res = await axios.get("http://localhost:5000/api/faculty");
//     setFaculty(res.data);
//   };

//   const fetchCourses = async () => {
//     const res = await axios.get("http://localhost:5000/api/Coursetable");
//     setCourses(res.data);
//   };

//   useEffect(() => {
//     fetchEnquiries();
//     fetchFollowups();
//     fetchContacts();
//     fetchFaculty();
//     fetchCourses();
//   }, []);

//   const getTable = () => {
//     if (page === "enquiry") return [ENQUIRY_FIELDS, enquiries, setEnquiries];
//     if (page === "followup") return [FOLLOWUP_FIELDS, followups, setFollowups];
//     if (page === "contact") return [CONTACT_FIELDS, contacts, setContacts];
//     if (page === "faculty") return [FACULTY_FIELDS, faculty, setFaculty];
//     if (page === "courses") return [COURSE_FIELDS, courses, setCourses];
//     return [];
//   };

//   const saveData = async () => {
//     try {
//       const [fields, data, setData] = getTable();

//       if (!formData) return;

//       if (page === "contact") {
//         const res = await axios.post(
//           "http://localhost:5000/api/ContactUstable",
//           formData,
//         );
//         setContacts([...contacts, res.data]);
//       }

//       if (page === "faculty") {
//         const res = await axios.post(
//           "http://localhost:5000/api/faculty",
//           formData,
//         );
//         setFaculty([...faculty, res.data]);
//       }

//       if (page === "courses") {
//         const res = await axios.post(
//           "http://localhost:5000/api/Coursetable",
//           formData,
//         );
//         setCourses([...courses, res.data]);
//       }

//       setFormData(null);
//       setEditIndex(null);
//     } catch (err) {
//       console.error("Save Error:", err);
//       alert("Error saving data. Check backend.");
//     }
//   };

//   const deleteRow = async (i, row) => {
//     if (page === "contact") {
//       await axios.delete(`http://localhost:5000/api/ContactUstable/${row._id}`);
//       fetchContacts();
//     }

//     const [fields, data, setData] = getTable();
//     let updated = [...data];
//     updated.splice(i, 1);
//     setData(updated);
//   };

//   const filteredData =
//     page === "enquiry" || page === "followup"
//       ? getTable()[1].filter(
//           (row) =>
//             row.student_name
//               ?.toLowerCase()
//               .includes(searchText.toLowerCase()) ||
//             row.phone?.toString().includes(searchText) ||
//             row._id?.includes(searchText),
//         )
//       : getTable()[1];

//   if (!loggedIn) {
//     return (
//       <div
//         className="vh-100 d-flex justify-content-center align-items-center"
//         style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}
//       >
//         <div className="card p-4 shadow" style={{ width: "350px" }}>
//           <h4 className="text-center mb-3">LearnGo Admin</h4>

//           <input
//             className="form-control mb-2"
//             placeholder="Admin ID"
//             value={adminId}
//             onChange={(e) => setAdminId(e.target.value)}
//           />

//           <input
//             type="password"
//             className="form-control mb-2"
//             placeholder="Password"
//             value={adminPass}
//             onChange={(e) => setAdminPass(e.target.value)}
//           />

//           {loginError && (
//             <div className="alert alert-danger py-1">Invalid Credentials</div>
//           )}

//           <button className="btn btn-success w-100" onClick={login}>
//             Login
//           </button>
//         </div>
//       </div>
//     );
//   }

//   const [fields, data] = getTable();

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
//         <h4 className="mb-4">LearnGo</h4>

//         {[
//           "dashboard",
//           "enquiry",
//           "followup",
//           "contact",
//           "courses",
//           "faculty",
//         ].map((p) => (
//           <button
//             key={p}
//             className="w-100 mb-2"
//             style={{
//               background: page === p ? "#22c55e" : "transparent",
//               border: "1px solid #334155",
//               color: "white",
//               padding: "10px",
//               borderRadius: "8px",
//             }}
//             onClick={() => setPage(p)}
//           >
//             {p}
//           </button>
//         ))}

//         <button className="btn btn-danger w-100 mt-4" onClick={logout}>
//           Logout
//         </button>
//       </div>

//       {/* MAIN CONTENT */}

//       <div
//         style={{
//           flex: 1,
//           background: "#f1f5f9",
//           padding: "25px",
//           overflow: "auto",
//         }}
//       >
//         {/* DASHBOARD */}

//         {page === "dashboard" && (
//           <div className="row g-4">
//             <div className="col-md-3">
//               <div
//                 className="card p-4 text-white text-center"
//                 style={{
//                   background: "linear-gradient(135deg,#2563eb,#60a5fa)",
//                 }}
//               >
//                 <h5>Total Students</h5>
//                 <h2>{enquiries.length}</h2>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div
//                 className="card p-4 text-white text-center"
//                 style={{
//                   background: "linear-gradient(135deg,#16a34a,#22c55e)",
//                 }}
//               >
//                 <h5>Total Followups</h5>
//                 <h2>{followups.length}</h2>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div
//                 className="card p-4 text-white text-center"
//                 style={{
//                   background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
//                 }}
//               >
//                 <h5>Total Contacts</h5>
//                 <h2>{contacts.length}</h2>
//               </div>
//             </div>

//             <div className="col-md-3">
//               <div
//                 className="card p-4 text-white text-center"
//                 style={{
//                   background: "linear-gradient(135deg,#ef4444,#f87171)",
//                 }}
//               >
//                 <h5>Total Faculty</h5>
//                 <h2>{faculty.length}</h2>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* OTHER PAGES */}

//         {page !== "dashboard" && (
//           <>
//             {(page === "enquiry" || page === "followup") && (
//               <div className="mb-3 d-flex">
//                 <input
//                   className="form-control me-2"
//                   placeholder="Search by name / phone / id"
//                   value={searchText}
//                   onChange={(e) => setSearchText(e.target.value)}
//                 />
//               </div>
//             )}

//             <button
//               className="btn btn-success mb-3"
//               onClick={() => {
//                 const obj = {};
//                 fields.forEach((f) => (obj[f] = ""));
//                 setFormData(obj);
//               }}
//             >
//               + Add
//             </button>

//             {formData && (
//               <div className="card p-3 mb-3">
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

//                 <button className="btn btn-primary me-2" onClick={saveData}>
//                   Save
//                 </button>

//                 <button
//                   className="btn btn-secondary"
//                   onClick={() => setFormData(null)}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             )}

//             <div style={{ overflowX: "auto" }}>
//               <table
//                 className="table table-bordered table-hover"
//                 style={{ minWidth: "1400px" }}
//               >
//                 <thead>
//                   <tr>
//                     {fields.map((f, i) => (
//                       <th key={i}>{f}</th>
//                     ))}
//                     <th>Action</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {filteredData.length === 0 ? (
//                     <tr>
//                       <td colSpan={fields.length + 1} className="text-center">
//                         No Data
//                       </td>
//                     </tr>
//                   ) : (
//                     filteredData.map((row, i) => (
//                       <tr key={i}>
//                         {fields.map((f, j) => (
//                           <td key={j}>{f === "Eid" ? row._id : row[f]}</td>
//                         ))}
//                         <td>
//                           <button
//                             className="btn btn-warning btn-sm me-2"
//                             onClick={() => {
//                               setFormData(row);
//                               setEditIndex(i);
//                             }}
//                           >
//                             Edit
//                           </button>

//                           <button
//                             className="btn btn-danger btn-sm"
//                             onClick={() => deleteRow(i, row)}
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function AdminPanel() {
  const ADMIN_ID = "Khadija";
  const ADMIN_PASS = "Khadija5253";

  const [loggedIn, setLoggedIn] = useState(false);
  const [adminId, setAdminId] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [loginError, setLoginError] = useState(false);

  const formatDateTime = (value) => {
    if (!value) {
      return "";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return String(value);
    }

    return date.toLocaleString("en-IN");
  };

  const ENQUIRY_FIELDS = [ 
    "Eid",
    {
      key: "EnquiryDate",
      label: "EnquiryDate",
      render: (row) => formatDateTime(row.EnquiryDate),
    },
    "student_name",   
    "phone",   
    {key:"CID",
    label:"CID",
    render:(row)=>row.CID ?? "",
    },
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
    "FollowupDate",
    "EnquiryDate",
  ];

  const CONTACT_FIELDS = ["name", "email", "phoneNo", "message"];

  const FACULTY_FIELDS = [
    "FacName",
    "FacEmail",
    "StudentAssign",
    "FacDepartment",
    "Experience",
    "FacQualification",
    "Address",
    "FacPhoneNo",
    "UserID",
    "Password",
  ];

  const COURSE_FIELDS = [
    "Id",
    "title",
    "description",
    "duration",
    "link",
  ];

  const [page, setPage] = useState("dashboard");
  const [formData, setFormData] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editingRecord, setEditingRecord] = useState(null);
  const [formMode, setFormMode] = useState("add");
  const [formPage, setFormPage] = useState(null);
  const activeEditRef = useRef(null);

  const [enquiries, setEnquiries] = useState([]);
  const [followups, setFollowups] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [faculty, setFaculty] = useState([]);
  const [courses, setCourses] = useState([]);

  const [searchText, setSearchText] = useState("");

  const login = () => {
    if (adminId === ADMIN_ID && adminPass === ADMIN_PASS) {
      setLoggedIn(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const logout = () => {
    setLoggedIn(false);
    setAdminId("");
    setAdminPass("");
  };

  const fetchEnquiries = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/Enquirytable");
      setEnquiries(res.data);
    } catch (error) {
      console.error("Fetch enquiries error:", error);
      setEnquiries([]);
    }
  };

  const fetchFollowups = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/Followuptable");
      setFollowups(res.data);
    } catch (error) {
      console.error("Fetch followups error:", error);
      setFollowups([]);
    }
  };

  const fetchContacts = async () => {
    const res = await axios.get("http://localhost:5000/api/ContactUstable");
    setContacts(res.data);
  };

  const fetchFaculty = async () => {
    const res = await axios.get("http://localhost:5000/api/Facultytable");
    setFaculty(res.data);
  };

  const fetchCourses = async () => {
    const res = await axios.get("http://localhost:5000/api/Coursetable");
    setCourses(res.data);
  };

  useEffect(() => {
    fetchEnquiries();
    fetchFollowups();
    fetchContacts();
    fetchFaculty();
    fetchCourses();
  }, []);

  useEffect(() => {
    setFormData(null);
    setEditId(null);
    setEditingRecord(null);
    setFormMode("add");
    setFormPage(page);
    setSearchText("");
    activeEditRef.current = null;
  }, [page]);

  const getTable = () => {
    if (page === "enquiry") return [ENQUIRY_FIELDS, enquiries, setEnquiries];
    if (page === "followup") return [FOLLOWUP_FIELDS, followups, setFollowups];
    if (page === "contact") return [CONTACT_FIELDS, contacts, setContacts];
    if (page === "faculty") return [FACULTY_FIELDS, faculty, setFaculty];
    if (page === "courses") return [COURSE_FIELDS, courses, setCourses];
    return [];
  };

  const isEditableField = (field) => {
    const fieldName = typeof field === "object" ? field.key : field;
    return fieldName !== "_id" && fieldName !== "Eid" && fieldName !== "Id";
  };

  const isCourseSelectField = (fieldName) =>
    page === "enquiry" &&
    (fieldName === "WantToTakeAdmission" || fieldName === "SuggestedCourse");

  const replaceRowById = (rows, rowId, nextRow) =>
    rows.map((row) => (String(row._id) === String(rowId) ? nextRow : row));

  const getUpdatePayload = (data) => {
    if (!data) {
      return data;
    }

    const payload = { ...data };
    delete payload._id;
    delete payload.__v;
    delete payload.__rowId;

    return payload;
  };

  const sanitizeEnquiryPayload = (data) => {
    const payload = getUpdatePayload(data);

    if (!payload) {
      return payload;
    }

    if (!payload.CID) {
      delete payload.CID;
    }

    if (
      payload.CID &&
      !/^[a-f\d]{24}$/i.test(String(payload.CID))
    ) {
      delete payload.CID;
    }

    return payload;
  };

  const saveData = async () => {
    try {
      if (!formData) return;
      const isEditing = formMode === "edit" && formPage === page;
      const activeEdit = activeEditRef.current;
      const currentEditId =
        activeEdit?.id ??
        editId ??
        editingRecord?._id ??
        editingRecord?.Eid ??
        formData?.__rowId ??
        formData?._id ??
        formData?.Eid ??
        null;

      // CONTACT
      if (page === "contact") {
        if (isEditing && currentEditId !== null) {
          await axios.put(
            `http://localhost:5000/api/ContactUstable/${currentEditId}`,
            getUpdatePayload(formData),
          );
        } else {
          const res = await axios.post(
            "http://localhost:5000/api/ContactUstable",
            getUpdatePayload(formData),
          );

          setContacts([...contacts, res.data]);
        }

        await fetchContacts();
      }

      // FACULTY
      if (page === "faculty") {
        if (isEditing && currentEditId !== null) {
          await axios.put(
            `http://localhost:5000/api/Facultytable/${currentEditId}`,
            getUpdatePayload(formData),
          );
        } else {
          const res = await axios.post(
            "http://localhost:5000/api/Facultytable",
            getUpdatePayload(formData),
          );

          setFaculty([...faculty, res.data]);
        }

        await fetchFaculty();
      }

      // COURSE
      if (page === "courses") {
        if (isEditing && currentEditId !== null) {
          await axios.put(
            `http://localhost:5000/api/Coursetable/${currentEditId}`,
            getUpdatePayload(formData),
          );
        } else {
          const res = await axios.post(
            "http://localhost:5000/api/Coursetable",
            getUpdatePayload(formData),
          );

          setCourses([...courses, res.data]);
        }

        await fetchCourses();
      }

      // ENQUIRY
      if (page === "enquiry") {
        const enquiryId =
          currentEditId ??
          formData.__rowId ??
          formData._id ??
          formData.Eid ??
          null;
        const payload = {
          ...formData,
          Eid: enquiryId,
          CID:
            typeof formData.CID === "object" ? formData.CID._id : formData.CID,
        };

        if (isEditing) {
          if (enquiryId === null || enquiryId === undefined || enquiryId === "") {
            throw new Error("Missing enquiry id for edit.");
          }

          await axios.put(
            `http://localhost:5000/api/Enquirytable/${enquiryId}`,
            sanitizeEnquiryPayload(payload),
          );
        } else {
          const res = await axios.post(
            "http://localhost:5000/api/Enquirytable",
            sanitizeEnquiryPayload(payload),
          );

          setEnquiries([...enquiries, res.data]);
        }

        await fetchEnquiries();
      }

      // FOLLOWUP
      if (page === "followup") {
        const payload = getUpdatePayload({
          ...formData,
          FollowUpDate: formData.FollowupDate || formData.FollowUpDate || "",
        });

        delete payload.FollowupDate;

        if (isEditing && currentEditId !== null) {
          await axios.put(
            `http://localhost:5000/api/Followuptable/${currentEditId}`,
            payload,
          );
        } else {
          const res = await axios.post(
            "http://localhost:5000/api/Followuptable",
            payload,
          );

          setFollowups([...followups, res.data]);
        }

        await fetchFollowups();
      }

      setFormData(null);
      setEditId(null);
      setEditingRecord(null);
      setFormMode("add");
      activeEditRef.current = null;
    } catch (err) {
      console.error("Save Error:", err);
      const backendMessage =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Error saving data.";

      alert(`Error saving data: ${backendMessage}`);
    }
  };

  const deleteRow = async (i, row) => {
    try {
      if (page === "contact") {
        await axios.delete(
          `http://localhost:5000/api/ContactUstable/${row._id}`,
        );
        fetchContacts();
        return;
      }

      if (page === "courses") {
        await axios.delete(`http://localhost:5000/api/Coursetable/${row._id}`);
        fetchCourses();
        return;
      }

      if (page === "faculty") {
        await axios.delete(`http://localhost:5000/api/Facultytable/${row._id}`);
        fetchFaculty();
        return;
      }

      if (page === "enquiry") {
        await axios.delete(`http://localhost:5000/api/Enquirytable/${row._id}`);
        fetchEnquiries();
        return;
      }

      if (page === "followup") {
        await axios.delete(
          `http://localhost:5000/api/Followuptable/${row._id}`,
        );
        fetchFollowups();
        return;
      }

      const [fields, data, setData] = getTable();
      let updated = [...data];
      updated.splice(i, 1);
      setData(updated);
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  const filteredData =
    page === "enquiry" || page === "followup"
      ? getTable()[1].filter(
          (row) =>
            row.student_name
              ?.toLowerCase()
              .includes(searchText.toLowerCase()) ||
            row.phone?.toString().includes(searchText) ||
            row._id?.includes(searchText),
        )
      : getTable()[1];

  if (!loggedIn) {
    return (
      <div
        className="vh-100 d-flex justify-content-center align-items-center"
        style={{ background: "linear-gradient(135deg,#0f172a,#1e293b)" }}
      >
        <div className="card p-4 shadow" style={{ width: "350px" }}>
          <h4 className="text-center mb-3">LearnGo Admin</h4>

          <input
            className="form-control mb-2"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
            value={adminPass}
            onChange={(e) => setAdminPass(e.target.value)}
          />

          {loginError && (
            <div className="alert alert-danger py-1">Invalid Credentials</div>
          )}

          <button className="btn btn-success w-100" onClick={login}>
            Login
          </button>
        </div>
      </div>
    );
  }

  const [fields, data] = getTable();

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* SIDEBAR */}

      <div
        style={{
          width: "240px",
          background: "linear-gradient(180deg,#1e293b,#0f172a)",
          color: "white",
          padding: "20px",
        }}
      >
        <h4 className="mb-4">LearnGo</h4>

        {[
          "dashboard",
          "enquiry",
          "followup",
          "contact",
          "courses",
          "faculty",
        ].map((p) => (
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
            onClick={() => setPage(p)}
          >
            {p}
          </button>
        ))}

        <button className="btn btn-danger w-100 mt-4" onClick={logout}>
          Logout
        </button>
      </div>

      {/* MAIN CONTENT */}

      <div
        style={{
          flex: 1,
          background: "#f1f5f9",
          padding: "25px",
          overflow: "auto",
        }}
      >
        {/* DASHBOARD */}

        {page === "dashboard" && (
          <div className="row g-4">
            <div className="col-md-3">
              <div
                className="card p-4 text-white text-center"
                style={{
                  background: "linear-gradient(135deg,#2563eb,#60a5fa)",
                }}
              >
                <h5>Total Students</h5>
                <h2>{enquiries.length}</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card p-4 text-white text-center"
                style={{
                  background: "linear-gradient(135deg,#16a34a,#22c55e)",
                }}
              >
                <h5>Total Followups</h5>
                <h2>{followups.length}</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card p-4 text-white text-center"
                style={{
                  background: "linear-gradient(135deg,#f59e0b,#fbbf24)",
                }}
              >
                <h5>Total Contacts</h5>
                <h2>{contacts.length}</h2>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="card p-4 text-white text-center"
                style={{
                  background: "linear-gradient(135deg,#ef4444,#f87171)",
                }}
              >
                <h5>Total Faculty</h5>
                <h2>{faculty.length}</h2>
              </div>
            </div>
          </div>
        )}

        {/* OTHER PAGES */}

        {page !== "dashboard" && (
          <>
            {(page === "enquiry" || page === "followup") && (
              <div className="mb-3 d-flex">
                <input
                  className="form-control me-2"
                  placeholder="Search by name / phone / id"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
            )}

            <button
              className="btn btn-success mb-3"
              onClick={() => {
                const obj = {};

                fields.filter(isEditableField).forEach((f) => {
                  const fieldName = typeof f === "object" ? f.key : f;
                  obj[fieldName] = "";
                });

                setFormData(obj);
                setEditId(null);
                setEditingRecord(null);
                setFormMode("add");
                setFormPage(page);
                activeEditRef.current = null;
              }}
            >
              + Add
            </button>

            {formData && (
              <div className="card p-3 mb-3">
                {fields.filter(isEditableField).map((f, i) => {
                  const fieldName = typeof f === "object" ? f.key : f;

                  if (isCourseSelectField(fieldName)) {
                    return (
                      <select
                        key={i}
                        className="form-control mb-2"
                        value={formData[fieldName] || ""}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [fieldName]: e.target.value,
                          })
                        }
                      >
                        <option value="">
                          {fieldName === "WantToTakeAdmission"
                            ? "Select Course"
                            : "Select Suggested Course"}
                        </option>
                        {courses.map((course) => (
                          <option key={`${fieldName}-${course._id}`} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                    );
                  }

                  return (
                    <input
                      key={i}
                      type={
                        fieldName === "FollowupDate" ||
                        fieldName === "FollowUpDate"
                          ? "date"
                          : "text"
                      }
                      className="form-control mb-2"
                      placeholder={typeof f === "object" ? f.label : f}
                      value={
                        (fieldName === "FollowupDate" ||
                          fieldName === "FollowUpDate") &&
                        formData[fieldName]
                          ? String(formData[fieldName]).split("T")[0]
                          : formData[fieldName] || ""
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [fieldName]: e.target.value,
                        })
                      }
                    />
                  );
                })}

                <button className="btn btn-primary me-2" onClick={saveData}>
                  {formMode === "edit" ? "Update" : "Save"}
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setFormData(null);
                    setEditId(null);
                    setEditingRecord(null);
                    setFormMode("add");
                    setFormPage(page);
                    activeEditRef.current = null;
                  }}
                >
                  Cancel
                </button>
              </div>
            )}

            <div style={{ overflowX: "auto" }}>
              <table
                className="table table-bordered table-hover"
                style={{ minWidth: "1400px" }}
              >
                <thead>
                  <tr>
                    {fields.map((f, i) => (
                      <th key={i}>{typeof f === "object" ? f.label : f}</th>
                    ))}
                    <th style={{ width: "170px", whiteSpace: "nowrap" }}>
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredData.length === 0 ? (
                    <tr>
                      <td colSpan={fields.length + 1} className="text-center">
                        No Data
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((row, i) => (
                      <tr key={i}>
                        {fields.map((f, j) => {
                          if (typeof f === "object") {
                            return <td key={j}>{f.render(row)}</td>;
                          }

                          return <td key={j}>{row[f]}</td>;
                        })}
                        <td style={{ whiteSpace: "nowrap" }}>
                          <div className="d-flex gap-2 align-items-center flex-nowrap">
                          <button
                            className="btn btn-warning btn-sm"
                            onClick={() => {
                              const editableRow = {
                                ...row,
                                __rowId: row._id ?? row.Eid ?? null,
                                CID: row.CID || "",
                                FollowupDate:
                                  row.FollowupDate || row.FollowUpDate || "",
                              };

                              activeEditRef.current = {
                                id: row._id ?? row.Eid ?? null,
                                page,
                                row,
                              };
                              setFormData({ ...editableRow });
                              setEditId(row._id ?? row.Eid ?? null);
                              setEditingRecord(row);
                              setFormMode("edit");
                              setFormPage(page);
                            }}
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => deleteRow(i, row)}
                          >
                            Delete
                          </button>
                          </div>
                        </td>
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
