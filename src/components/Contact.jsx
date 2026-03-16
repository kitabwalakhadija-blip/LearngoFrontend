const Contact = () => {
  return (
    <div>
      

      {/* HERO SECTION */}
      <section className="hero">
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

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Phone Number" />
            <textarea placeholder="Your Message" rows="5"></textarea>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

     

         
    </div>
  );
};

export default Contact;
