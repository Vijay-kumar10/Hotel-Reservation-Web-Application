import React from "react";
import "../TravelPage.css";
import Footer from './Footer';


// Import images
import luxuryHotel from "../images/img1.jpg";
import vipTransfers from "../images/img2.jpg";
import luxuryVillas from "../images/img3.jpg";
import yachting from "../images/img4.jpg";
import safariParks from "../images/img5.jpg";
import trekking from "../images/img6.jpg";

const TravelPage = () => {
  return (
    <div>
      {/* Top Section */}
      <div className="top-section">
        <h1>Provided Services</h1>
      </div>

     

      {/* Services Grid Section */}
      <div className="services-grid">
        <div className="service-card">
          <img src={luxuryHotel} alt="Lusury Hotel" />
          <h3>Luxury Hotel</h3>
          <p>Experience unparalleled comfort and exceptional service at our luxury hotel.</p>
          <button>More</button>
        </div>
        <div className="service-card">
          <img src={vipTransfers} alt="Planning" />
          <h3>Vip Transfers</h3>
          <p>Enjoy exclusive, first-class VIP transfer service with maximum comfort guaranteed.</p>
          <button>More</button>
        </div>
        <div className="service-card">
          <img src={luxuryVillas} alt="City Tours" />
          <h3>Luxury Villas</h3>
          <p>Indulge in private luxury villas with stunning views and amenities. </p>
          <button>More</button>
        </div>
        <div className="service-card">
          <img src={yachting} alt="Trekking" />
          <h3>Yachting</h3>
          <p>Sail the seas in style with our premium yachting adventures.</p>
          <button>More</button>
        </div>
        <div className="service-card">
          <img src={safariParks} alt="Romantic Tours" />
          <h3>Safari Parks</h3>
          <p> Explore thrilling wildlife encounters and breathtaking views at safari parks.</p>
          <button>More</button>
        </div>
        <div className="service-card">
          <img src={trekking} alt="Active Tours" />
          <h3>Trekking</h3>
          <p>Discover adventurous trekking trails surrounded by nature’s captivating beauty.</p>
          <button>More</button>
        </div>
      </div>

<div className="form-background">
      <div className="contact-form-container">
      <h3>Contact Us</h3>
      <form className="contact-form">
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="Contact" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Text Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
</div>


<div className="about-us-container">
      {/* Your existing content here */}
      
      {/* Add the Footer Component */}
      <Footer />
    </div>
  

    </div>
    
  );
};

export default TravelPage;
