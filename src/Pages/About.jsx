import aboutImg from "../assets/Images/about-image.avif";

const About = () => {
  return (
    <>
    
      <section class="about-hero">
        <h1>About LearnGo</h1>
      </section>

      <section class="about-main">
        <div class="about-wrapper">
          <div class="about-image">
            <img className="about" src={aboutImg} alt="LearnGo" />
         
          </div>

          <div class="about-text">
            <h2>Who We Are</h2>
            <p>
              LearnGo is a smart course enquiry platform designed to help
              students explore available courses and connect directly with the
              institute.
            </p>

            <p>
              Students can search, explore and enquire about courses easily
              without confusion. Our goal is to simplify the admission enquiry
              process and make information accessible in one place.
            </p>

            <p>
              LearnGo bridges the gap between students and institutes through a
              simple, clean and user-friendly interface.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
