// const Contact = () => {
//   return (
//     <div>
//       {/* NAVBAR */}
//       <nav className="main-navbar">
//         <div className="nav-left">
//           <div className="logo">
//             Learn<span>Go</span>
//           </div>

//           <a href="/">Home</a>
//           <a href="/explorecourses">Courses</a>
//           <a href="/about">AboutUs</a>
//           <a href="/contact">Contact</a>
//         </div>

//         <div className="nav-right">
//           <select className="login-select">
//             <option>Login</option>
//             <option>Student</option>
//             <option>Admin</option>
//           </select>

//           <input
//             type="text"
//             className="search-box"
//             placeholder="Search Courses..."
//           />
//           <button className="search-btn">Search</button>
//         </div>
//       </nav>

//       {/* HERO SECTION */}
//       <section className="hero-contact">
//         <h1>Contact Us</h1>
//         <p>We’d love to hear from you. Get in touch with LearnGo.</p>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="contact-container">
//         {/* CONTACT INFO */}
//         <div className="contact-info">
//           <h2>Get In Touch</h2>
//           <p>
//             If you have any questions about courses, placements, or admissions,
//             feel free to contact us.
//           </p>

//           <div className="info-box">
//             <strong>📍 Address</strong>
//             <p>Ujjain, Madhya Pradesh</p>
//           </div>

//           <div className="info-box">
//             <strong>📞 Phone</strong>
//             <p>+91 98987 61755</p>
//           </div>

//           <div className="info-box">
//             <strong>📧 Email</strong>
//             <p>learngo@gmail.com</p>
//           </div>
//         </div>

//         {/* CONTACT FORM */}
//         <div className="contact-form">
//           <h2>Send Us a Message</h2>

//           <form>
//             <input type="text" placeholder="Your Name" required />
//             <input type="email" placeholder="Your Email" required />
//             <input type="text" placeholder="Phone Number" />
//             <textarea placeholder="Your Message" rows="5"></textarea>

//             <button type="submit">Send Message</button>
//           </form>
//         </div>
//       </section>

//     </div>
//   );
// };

// export default Contact;
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/ContactUstable", formData);

      alert("Message sent successfully");

      setFormData({
        name: "",
        email: "",
        phoneNo: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="main-navbar">
        <div className="nav-left">
          <div className="logo">
            Learn<span>Go</span>
          </div>

          <a href="/">Home</a>
          <a href="/explorecourses">Courses</a>
          <a href="/about">AboutUs</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="nav-right">
          <select className="login-select">
            <option>Login</option>
            <option>Student</option>
            <option>Admin</option>
          </select>

          <input
            type="text"
            className="search-box"
            placeholder="Search Courses..."
          />

          <button className="search-btn">Search</button>
        </div>
      </nav>

      {/* HERO SECTION */}

      <section className="hero-contact">
        <h1>Contact Us</h1>

        <p>We’d love to hear from you. Get in touch with LearnGo.</p>
      </section>

      {/* CONTACT SECTION */}

      <section className="contact-container">
        {/* CONTACT INFO */}

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>
            If you have any questions about courses, placements, or admissions,
            feel free to contact us.
          </p>

          <div className="info-box">
            <strong>📍 Address</strong>
            <p>Ujjain, Madhya Pradesh</p>
          </div>

          <div className="info-box">
            <strong>📞 Phone</strong>
            <p>+91 98987 61755</p>
          </div>

          <div className="info-box">
            <strong>📧 Email</strong>
            <p>learngo@gmail.com</p>
          </div>
        </div>

        {/* CONTACT FORM */}

        <div className="contact-form">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="phoneNo"
              placeholder="Phone Number"
              value={formData.phoneNo}
              onChange={handleChange}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;