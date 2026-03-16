import { useState } from "react";
import axios from "axios";

const UserForm = ({ fetchUsers }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/users", form);
    fetchUsers();
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input name="name" placeholder="Name" onChange={handleChange} />
    //   <input name="email" placeholder="Email" onChange={handleChange} />
    //   <input name="age" placeholder="Age" onChange={handleChange} />
    //   <button type="submit">Add User</button>
    // </form>
    <form onSubmit={handleSubmit}>
      <div class="row">
        <div>
          <label>Wants to Take Admission</label>
          <input type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Qualification</label>
          <input name="qual" type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Percentage</label>
          <input name="Perc" onChange={handleChange} />
        </div>
      </div>

      <label>Suggested Course</label>
      <input type="text" onChange={handleChange} />

      <label>Purpose of Course</label>
      <div class="checkbox-group">
        <label>
          <input type="checkbox" onChange={handleChange} /> Career
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Technical
          Upgradation
        </label>
        <label>
          <input type="checkbox" /> Business
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Job
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Any Other
        </label>
      </div>

      <label>Student Name</label>
      <input name="sname" type="text" onChange={handleChange} />

      <div class="row">
        <div>
          <label>Phone</label>
          <input name="Tel" type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Mobile</label>
          <input type="text" onChange={handleChange} />
        </div>
      </div>

      <label>Permanent Address</label>
      <textarea></textarea>

      <label>Temporary Address (if any)</label>
      <textarea></textarea>

      <label>Father / Husband / Guardian Name</label>
      <input type="text" onChange={handleChange} />

      <label>Occupation</label>
      <div class="checkbox-group">
        <label>
          <input type="checkbox" onChange={handleChange} /> Business
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Service
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Professional
        </label>
      </div>

      <label>Organisation</label>
      <input type="text" onChange={handleChange} />

      <label>Designation</label>
      <input type="text" onChange={handleChange} />

      <label>Mother Name</label>
      <input type="text" onChange={handleChange} />

      <label>Occupation</label>
      <div class="checkbox-group">
        <label>
          <input type="checkbox" onChange={handleChange} /> Business
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Service
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Professional
        </label>
      </div>

      {/* <!-- Siblings --> */}
      <h3>Brother / Sister</h3>

      <div class="row">
        <div>
          <label>Name</label>
          <input type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Current Profile</label>
          <input type="text" onChange={handleChange} />
        </div>
      </div>

      <div class="row">
        <div>
          <label>Name</label>
          <input type="text" onChange={handleChange} />
        </div>
        <div>
          <label>Current Profile</label>
          <input type="text" onChange={handleChange} />
        </div>
      </div>

      {/* <!-- Reference --> */}
      <label>How did you come to know about us?</label>
      <div class="checkbox-group">
        <label>
          <input type="checkbox" onChange={handleChange} /> Newspaper
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Hoarding
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Banner
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Poster
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Internet
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Friend
        </label>
        <label>
          <input type="checkbox" onChange={handleChange} /> Representative
        </label>
      </div>

      {/* <!-- Submit --> */}
      <button type="submit">Submit Enquiry</button>
    </form>
  );
};
export default UserForm;
