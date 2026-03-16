import { Link } from "react-router-dom";
function Home() {
  return (
    <section class="hero">
      <div class="hero-text">
        <h1>Find the Best Courses After 12th</h1>
        <p>
          Search, compare and enquire about top courses and colleges easily.
        </p>

        <Link to="/placement">
          <button class="enquiry">Our Placement</button>
        </Link>

        <Link to="/enquire">
          <button class="enquiry">Enquire Now</button>
        </Link>
      </div>
    </section>
  );
}
export default Home;
