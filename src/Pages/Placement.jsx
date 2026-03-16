import PlaceImg1 from "../assets/Images/image1.jpg";
import PlaceImg2 from "../assets/Images/image2.jpg";
import PlaceImg3 from "../assets/Images/image3.jpg";
import PlaceImg4 from "../assets/Images/image4.jpg";
import PlaceImg5 from "../assets/Images/image5.jpg";
import PlaceImg6 from "../assets/Images/image6.jpg";
import PlaceImg7 from "../assets/Images/image7.jpg";
import PlaceImg8 from "../assets/Images/image8.jpg";

const Placement=()=>{
return(
    <>
    <section class="placement-hero">
  <h1>Placements at LearnGo</h1>
  <p>
    LearnGo provides strong placement support to help students build successful careers.
    Our placement cell focuses on industry exposure, training, and interview readiness.
  </p>
</section>

<section class="placement-grid">

  <div class="card">
    <img className="card1" src={PlaceImg1} alt="LearnGo" />
    <h3>Ankita Monga</h3>
    <span>IBM Daksh</span>
    <p>BCA</p>
  </div>

  <div class="card">
    <img className="card" src={PlaceImg2} alt="LearnGo" />
    <h3>Nikita Patidar</h3>
    <span>IT Guru Software</span>
    <p>BCA</p>
  </div>

  <div class="card">
    <img className="card" src={PlaceImg3} alt="LearnGo" />
    <h3>Archana Sugandi</h3>
    <span>TCS</span>
    <p>BCA</p>
  </div>

  <div class="card">
   <img className="card" src={PlaceImg4} alt="LearnGo" />
    <h3>Shruti Makwana</h3>
    <span>ICICI Bank</span>
    <p>PGDCA</p>
  </div>

  <div class="card">
    <img className="card" src={PlaceImg5} alt="LearnGo" />
    <h3>Simran Modi</h3>
    <span>IT Guru Software</span>
    <p>BCA</p>
  </div>

  <div class="card">
    <img className="card" src={PlaceImg6} alt="LearnGo" />
    <h3>Monika Chandel</h3>
    <span>IBM Daksh, Wipro</span>
    <p>BCA</p>
  </div>
  
  <div class="card">
   <img className="card" src={PlaceImg7} alt="LearnGo" />
    <h3>Sarrah Khan</h3>
    <span>Infosys Media Centre</span>
    <p>PGDCA</p>
  </div>

<div class="card">
    <img className="card" src={PlaceImg8} alt="LearnGo" />
    <h3>alfiya Kareem</h3>
    <span>TCS</span>
    <p>BCA</p>
  </div>

</section>
</>
)
}
export default Placement;