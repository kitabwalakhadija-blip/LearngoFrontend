// import { useState } from "react";
// import axios from "axios";

// const Enquire = () => {
//   const [formData, setFormData] = useState({
//     Department: "",
//     ConsellerName: "",
//     WantToTakeAdmission: "",
//     Qualification: "",
//     Percentage: "",
//     SuggestedCourse: "",
//     PurposeOfCourse: [],
//     student_name: "",
//     phone: "",
//     mobile: "",
//     email: "",
//     permanent_address: "",
//     temporary_address: "",
//     ContactNo: "",
//     father_name: "",
//     Occupation_father: [],
//     organisation: "",
//     designation: "",
//     mother_name: "",
//     Occupation_mother: [],
//     Siblings: "",
//     HowDidYouComeToKnowAboutUs: [],
//   });

//   /* HANDLE INPUT CHANGE */

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === "checkbox") {
//       setFormData((prev) => {
//         let arr = [...prev[name]];

//         if (checked) {
//           arr.push(value);
//         } else {
//           arr = arr.filter((item) => item !== value);
//         }

//         return {
//           ...prev,
//           [name]: arr,
//         };
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value,
//       });
//     }
//   };

//   /* SUBMIT */

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const payload = {
//         ...formData,

//         PurposeOfCourse: formData.PurposeOfCourse.join(", "),
//         Occupation_mother: formData.Occupation_mother.join(", "),
//         Occupation_father: formData.Occupation_father.join(", "),
//         HowDidYouComeToKnowAboutUs:
//           formData.HowDidYouComeToKnowAboutUs.join(", "),
//       };

//       await axios.post("http://localhost:5000/api/enquirytable", payload);

//       alert("Enquiry Submitted Successfully");
//     } catch (err) {
//       console.log(err);
//       alert("Error submitting enquiry");
//     }
//   };

//   return (
//     <div className="form-wrapper">
//       <h1>Enquiry Form</h1>
//       <p className="sub-title">LearnGo</p>

//       <form onSubmit={handleSubmit}>
//         {/* BASIC DETAILS */}

//         <div className="row">
//           <div>
//             <label>Want To Take Admission</label>
//             <input name="WantToTakeAdmission" onChange={handleChange} />
//           </div>

//           <div>
//             <label>Qualification</label>
//             <input name="Qualification" onChange={handleChange} />
//           </div>

//           <div>
//             <label>Percentage</label>
//             <input name="Percentage" onChange={handleChange} />
//           </div>
//         </div>

//         <label>Suggested Course</label>
//         <input name="SuggestedCourse" onChange={handleChange} />

//         {/* PURPOSE */}

//         <label>Purpose Of Course</label>

//         <div className="checkbox-group">
//           <label>
//             <input
//               type="checkbox"
//               name="PurposeOfCourse"
//               value="Career"
//               onChange={handleChange}
//             />
//             Career
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="PurposeOfCourse"
//               value="Technical Upgradation"
//               onChange={handleChange}
//             />
//             Technical Upgradation
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="PurposeOfCourse"
//               value="Business"
//               onChange={handleChange}
//             />
//             Business
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="PurposeOfCourse"
//               value="Job"
//               onChange={handleChange}
//             />
//             Job
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="PurposeOfCourse"
//               value="Any Other"
//               onChange={handleChange}
//             />
//             Any Other
//           </label>
//         </div>

//         <div>
//           <div>
//             <label>Student Name</label>
//             <input name="student_name" onChange={handleChange} />
//           </div>
//         </div>

//         <div className="row">
//           <div>
//             <label>Phone</label>
//             <input name="phone" onChange={handleChange} />
//           </div>

//           <div>
//             <label>Mobile</label>
//             <input name="mobile" onChange={handleChange} />
//           </div>

//           <div>
//             <label>Email</label>
//             <input name="email" onChange={handleChange} />
//           </div>
//         </div>

//         <label>Permanent Address</label>
//         <textarea name="permanent_address" onChange={handleChange}></textarea>

//         <label>Temporary Address</label>
//         <textarea name="temporary_address" onChange={handleChange}></textarea>

//         <div className="row">
//           <div>
//             <label>Contact No</label>
//             <input name="ContactNo" onChange={handleChange} />
//           </div>

//           <div>
//             <label>Father Name</label>
//             <input name="father_name" onChange={handleChange} />
//           </div>
//         </div>
//         <label>Father Occupation</label>

//         <div className="checkbox-group">
//           <label>
//             <input
//               type="checkbox"
//               name="Occupation_father"
//               value="Business"
//               onChange={handleChange}
//             />
//             Business
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="Occupation_father"
//               value="Service"
//               onChange={handleChange}
//             />
//             Service
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="Occupation_father"
//               value="Professional"
//               onChange={handleChange}
//             />
//             Professional
//           </label>
//         </div>

//         <div className="row">
//           <div>
//             <label>Organisation</label>
//             <input name="organisation" onChange={handleChange} />
//           </div>

//           <div>
//             <label>Designation</label>
//             <input name="designation" onChange={handleChange} />
//           </div>
//         </div>

//         <label>Mother Name</label>
//         <input name="mother_name" onChange={handleChange} />

//         <label>Mother Occupation</label>

//         <div className="checkbox-group">
//           <label>
//             <input
//               type="checkbox"
//               name="Occupation_mother"
//               value="Housewife"
//               onChange={handleChange}
//             />
//             Housewife
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="Occupation_mother"
//               value="Service"
//               onChange={handleChange}
//             />
//             Service
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="Occupation_mother"
//               value="Professional"
//               onChange={handleChange}
//             />
//             Professional
//           </label>

//         </div>

//         <label>Siblings</label>
//         <input name="Siblings" onChange={handleChange} />

//         <label>How Did You Come To Know About Us</label>

//         <div className="checkbox-group">
//           <label>
//             <input
//               type="checkbox"
//               name="HowDidYouComeToKnowAboutUs"
//               value="Newspaper"
//               onChange={handleChange}
//             />
//             Newspaper
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="HowDidYouComeToKnowAboutUs"
//               value="Internet"
//               onChange={handleChange}
//             />
//             Internet
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="HowDidYouComeToKnowAboutUs"
//               value="Friend"
//               onChange={handleChange}
//             />
//             Friend
//           </label>

//           <label>
//             <input
//               type="checkbox"
//               name="HowDidYouComeToKnowAboutUs"
//               value="Representative"
//               onChange={handleChange}
//             />
//             Representative
//           </label>
//         </div>

//         <button type="submit">Submit Enquiry</button>
//       </form>
//     </div>
//   );
// };

// export default Enquire;
import { useState, useEffect } from "react";
import axios from "axios";

const Enquire = () => {
  const [formData, setFormData] = useState({
    CID: "",
    Department: "",
    ConsellerName: "",
    WantToTakeAdmission: "",
    Qualification: "",
    Percentage: "",
    SuggestedCourse: "",
    PurposeOfCourse: [],
    student_name: "",
    phone: "",
    mobile: "",
    email: "",
    permanent_address: "",
    temporary_address: "",
    ContactNo: "",
    father_name: "",
    Occupation_father: [],
    organisation: "",
    designation: "",
    mother_name: "",
    Occupation_mother: [],
    Siblings: "",
    HowDidYouComeToKnowAboutUs: [],
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/Coursetable");
        setCourses(res.data);
      } catch (error) {
        console.log("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        let arr = [...prev[name]];

        if (checked) {
          arr.push(value);
        } else {
          arr = arr.filter((item) => item !== value);
        }

        return {
          ...prev,
          [name]: arr,
        };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const selectedCourse = courses.find(
        (course) => String(course.Id) === String(formData.CID),
      );

      const payload = {
        ...formData,

        CID: formData.WantToTakeAdmission, // ✅ direct ID

        PurposeOfCourse: formData.PurposeOfCourse.join(", "),
        Occupation_mother: formData.Occupation_mother.join(", "),
        Occupation_father: formData.Occupation_father.join(", "),
        HowDidYouComeToKnowAboutUs:
          formData.HowDidYouComeToKnowAboutUs.join(", "),
      };
      payload.CID = Number(formData.CID) || Number(selectedCourse?.Id) || "";
      await axios.post("http://localhost:5000/api/enquirytable", payload);

      alert("Enquiry Submitted Successfully");

      setFormData({
        CID: "",
        Department: "",
        ConsellerName: "",
        WantToTakeAdmission: "",
        Qualification: "",
        Percentage: "",
        SuggestedCourse: "",
        PurposeOfCourse: [],
        student_name: "",
        phone: "",
        mobile: "",
        email: "",
        permanent_address: "",
        temporary_address: "",
        ContactNo: "",
        father_name: "",
        Occupation_father: [],
        organisation: "",
        designation: "",
        mother_name: "",
        Occupation_mother: [],
        Siblings: "",
        HowDidYouComeToKnowAboutUs: [],
      });
    } catch (err) {
      console.log(err);
      alert("Error submitting enquiry");
    }
  };

  return (
    <div className="form-wrapper">
      <h1>Enquiry Form</h1>
      <p className="sub-title">LearnGo</p>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label></label>
          </div>

          <div>
            <label></label>
          </div>
        </div>

        <div className="row">
          <div>
            <label>Want To Take Admission</label>
            <select
              value={formData.CID}
              onChange={(e) => {
                const selectedId = e.target.value;

                const selectedCourse = courses.find(
                  (c) => String(c.Id) === selectedId,
                );

                setFormData((prev) => ({
                  ...prev,
                  CID: selectedId, // ✅ saves ID
                  WantToTakeAdmission: selectedCourse?.title || "", // ✅ saves NAME
                }));
              }}
            >
              <option value="">Select Course</option>

              {courses.map((course) => (
                <option key={course._id} value={course.Id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Qualification</label>
            <input
              name="Qualification"
              value={formData.Qualification}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Percentage</label>
            <input
              name="Percentage"
              value={formData.Percentage}
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Suggested Course</label>
        <select
          name="SuggestedCourse"
          value={formData.SuggestedCourse}
          onChange={handleChange}
        >
          <option value="">Select Suggested Course</option>
          {courses.map((course) => (
            <option key={`suggested-${course._id}`} value={course.title}>
              {course.title}
            </option>
          ))}
        </select>

        <label>Purpose Of Course</label>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Career"
              checked={formData.PurposeOfCourse.includes("Career")}
              onChange={handleChange}
            />
            Career
          </label>

          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Technical Upgradation"
              checked={formData.PurposeOfCourse.includes(
                "Technical Upgradation",
              )}
              onChange={handleChange}
            />
            Technical Upgradation
          </label>

          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Business"
              checked={formData.PurposeOfCourse.includes("Business")}
              onChange={handleChange}
            />
            Business
          </label>

          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Job"
              checked={formData.PurposeOfCourse.includes("Job")}
              onChange={handleChange}
            />
            Job
          </label>

          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Any Other"
              checked={formData.PurposeOfCourse.includes("Any Other")}
              onChange={handleChange}
            />
            Any Other
          </label>
        </div>

        <label>Student Name</label>
        <input
          name="student_name"
          value={formData.student_name}
          onChange={handleChange}
        />

        <div className="row">
          <div>
            <label>Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Mobile</label>
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Permanent Address</label>
        <textarea
          name="permanent_address"
          value={formData.permanent_address}
          onChange={handleChange}
        />

        <label>Temporary Address</label>
        <textarea
          name="temporary_address"
          value={formData.temporary_address}
          onChange={handleChange}
        />

        <div className="row">
          <div>
            <label>Contact No</label>
            <input
              name="ContactNo"
              value={formData.ContactNo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Father Name</label>
            <input
              name="father_name"
              value={formData.father_name}
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Father Occupation</label>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="Occupation_father"
              value="Business"
              checked={formData.Occupation_father.includes("Business")}
              onChange={handleChange}
            />
            Business
          </label>

          <label>
            <input
              type="checkbox"
              name="Occupation_father"
              value="Service"
              checked={formData.Occupation_father.includes("Service")}
              onChange={handleChange}
            />
            Service
          </label>

          <label>
            <input
              type="checkbox"
              name="Occupation_father"
              value="Professional"
              checked={formData.Occupation_father.includes("Professional")}
              onChange={handleChange}
            />
            Professional
          </label>
        </div>

        <div className="row">
          <div>
            <label>Organisation</label>
            <input
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Designation</label>
            <input
              name="designation"
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
        </div>

        <label>Mother Name</label>
        <input
          name="mother_name"
          value={formData.mother_name}
          onChange={handleChange}
        />

        <label>Mother Occupation</label>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="Occupation_mother"
              value="Housewife"
              checked={formData.Occupation_mother.includes("Housewife")}
              onChange={handleChange}
            />
            Housewife
          </label>

          <label>
            <input
              type="checkbox"
              name="Occupation_mother"
              value="Service"
              checked={formData.Occupation_mother.includes("Service")}
              onChange={handleChange}
            />
            Service
          </label>

          <label>
            <input
              type="checkbox"
              name="Occupation_mother"
              value="Professional"
              checked={formData.Occupation_mother.includes("Professional")}
              onChange={handleChange}
            />
            Professional
          </label>
        </div>

        <label>Siblings</label>
        <input
          name="Siblings"
          value={formData.Siblings}
          onChange={handleChange}
        />

        <label>How Did You Come To Know About Us</label>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="HowDidYouComeToKnowAboutUs"
              value="Newspaper"
              checked={formData.HowDidYouComeToKnowAboutUs.includes(
                "Newspaper",
              )}
              onChange={handleChange}
            />
            Newspaper
          </label>

          <label>
            <input
              type="checkbox"
              name="HowDidYouComeToKnowAboutUs"
              value="Internet"
              checked={formData.HowDidYouComeToKnowAboutUs.includes("Internet")}
              onChange={handleChange}
            />
            Internet
          </label>

          <label>
            <input
              type="checkbox"
              name="HowDidYouComeToKnowAboutUs"
              value="Friend"
              checked={formData.HowDidYouComeToKnowAboutUs.includes("Friend")}
              onChange={handleChange}
            />
            Friend
          </label>

          <label>
            <input
              type="checkbox"
              name="HowDidYouComeToKnowAboutUs"
              value="Representative"
              checked={formData.HowDidYouComeToKnowAboutUs.includes(
                "Representative",
              )}
              onChange={handleChange}
            />
            Representative
          </label>
        </div>

        <button type="submit">Submit Enquiry</button>
      </form>
    </div>
  );
};

export default Enquire;
