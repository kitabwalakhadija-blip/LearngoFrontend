import { useState } from "react";
import axios from "axios";


const Enquire = () => {
  const [formData, setFormData] = useState({
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

  /* HANDLE INPUT CHANGE */

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
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  /* SUBMIT */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,

        PurposeOfCourse: formData.PurposeOfCourse.join(", "),
        Occupation_mother: formData.Occupation_mother.join(", "),
        Occupation_father: formData.Occupation_father.join(", "),
        HowDidYouComeToKnowAboutUs:
          formData.HowDidYouComeToKnowAboutUs.join(", "),
      };

      await axios.post("http://localhost:5000/api/enquirytable", payload);

      alert("Enquiry Submitted Successfully");
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
        {/* BASIC DETAILS */}

        <div className="row">
          <div>
            <label>Want To Take Admission</label>
            <input name="WantToTakeAdmission" onChange={handleChange} />
          </div>

          <div>
            <label>Qualification</label>
            <input name="Qualification" onChange={handleChange} />
          </div>

          <div>
            <label>Percentage</label>
            <input name="Percentage" onChange={handleChange} />
          </div>
        </div>

        <label>Suggested Course</label>
        <input name="SuggestedCourse" onChange={handleChange} />

        {/* PURPOSE */}

        <label>Purpose Of Course</label>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Career"
              onChange={handleChange}
            />
            Career
          </label>

          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Technical Upgradation"
              onChange={handleChange}
            />
            Technical Upgradation
          </label>

          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Business"
              onChange={handleChange}
            />
            Business
          </label>

          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Job"
              onChange={handleChange}
            />
            Job
          </label>

          <label>
            <input
              type="checkbox"
              name="PurposeOfCourse"
              value="Any Other"
              onChange={handleChange}
            />
            Any Other
          </label>
        </div>

        <div>
          <div>
            <label>Student Name</label>
            <input name="student_name" onChange={handleChange} />
          </div>
        </div>

        <div className="row">
          <div>
            <label>Phone</label>
            <input name="phone" onChange={handleChange} />
          </div>

          <div>
            <label>Mobile</label>
            <input name="mobile" onChange={handleChange} />
          </div>

          <div>
            <label>Email</label>
            <input name="email" onChange={handleChange} />
          </div>
        </div>

        <label>Permanent Address</label>
        <textarea name="permanent_address" onChange={handleChange}></textarea>

        <label>Temporary Address</label>
        <textarea name="temporary_address" onChange={handleChange}></textarea>

        <div className="row">
          <div>
            <label>Contact No</label>
            <input name="ContactNo" onChange={handleChange} />
          </div>

          <div>
            <label>Father Name</label>
            <input name="father_name" onChange={handleChange} />
          </div>
        </div>
        <label>Father Occupation</label>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="Occupation_father"
              value="Business"
              onChange={handleChange}
            />
            Business
          </label>

          <label>
            <input
              type="checkbox"
              name="Occupation_father"
              value="Service"
              onChange={handleChange}
            />
            Service
          </label>

          <label>
            <input
              type="checkbox"
              name="Occupation_father"
              value="Professional"
              onChange={handleChange}
            />
            Professional
          </label>
        </div>

        <div className="row">
          <div>
            <label>Organisation</label>
            <input name="organisation" onChange={handleChange} />
          </div>

          <div>
            <label>Designation</label>
            <input name="designation" onChange={handleChange} />
          </div>
        </div>

        <label>Mother Name</label>
        <input name="mother_name" onChange={handleChange} />

        <label>Mother Occupation</label>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="Occupation_mother"
              value="Housewife"
              onChange={handleChange}
            />
            Housewife
          </label>

          <label>
            <input
              type="checkbox"
              name="Occupation_mother"
              value="Service"
              onChange={handleChange}
            />
            Service
          </label>

          <label>
            <input
              type="checkbox"
              name="Occupation_mother"
              value="Professional"
              onChange={handleChange}
            />
            Professional
          </label>
          
        </div>

        <label>Siblings</label>
        <input name="Siblings" onChange={handleChange} />

        <label>How Did You Come To Know About Us</label>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="HowDidYouComeToKnowAboutUs"
              value="Newspaper"
              onChange={handleChange}
            />
            Newspaper
          </label>

          <label>
            <input
              type="checkbox"
              name="HowDidYouComeToKnowAboutUs"
              value="Internet"
              onChange={handleChange}
            />
            Internet
          </label>

          <label>
            <input
              type="checkbox"
              name="HowDidYouComeToKnowAboutUs"
              value="Friend"
              onChange={handleChange}
            />
            Friend
          </label>

          <label>
            <input
              type="checkbox"
              name="HowDidYouComeToKnowAboutUs"
              value="Representative"
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
