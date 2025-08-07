import React from "react";
import "../AboutUs.css"; // CSS file ka naam jo aap use kar rahe hain
import Footer from './Footer';

import visionImage from "../images/about1.jpg";
import missionImage from "../images/about2.jpg";
import valuesImage from "../images/about3.jpg";
import commitmentImage from "../images/about4.jpg";


const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Existing Image Section */}
      <div className="image-section">
        {/* <p className="big-text">Yeh Sabse Bada Text Hai</p>
        <p className="medium-text">Yeh Thoda Medium Text Hai</p>
        <p className="small-text">Yeh Sabse Chhota Text Hai</p> */}
      </div>

      {/* Pehle Row */}
      <div className="row-container" id="row1">
        <div className="image left">
          <img src={visionImage} alt="Vision" className="image" style={{ border: "5px solid gold" }}/>
        </div>
        <div className="text-content">
          <h2>Our Vision</h2>
          <p>Our Vision for a Sustainable Future" Text: Our vision is to be a leader in hospitality, known for offering luxury, sustainability, and exceptional guest experiences. We envision a future where every aspect of our business contributes positively to the environment and local community. Our goal is to minimize our carbon footprint, use eco-friendly materials, and promote sustainable practices in every aspect of our operations. Through responsible tourism and environmental initiatives, we aim to lead by example and create an experience that not only delights guests but also respects the planet for future generations.</p>
        </div>
      </div>

      {/* Dusra Row */}
      <div className="row-container reverse" id="row2">
        <div className="image right">
        <img src={missionImage} alt="Vision" className="image" style={{ border: "5px solid gold" }}/>        </div>
        <div className="text-content">
          <h2>Our Mission</h2>
          <p>Our Mission: To Provide Unmatched Hospitality" Text: The mission of our hotel is simple: to offer guests a premium experience, filled with comfort, warmth, and unmatched hospitality. We strive to ensure every guest feels like family, and their satisfaction is our top priority. From luxury rooms to top-notch dining, we aim to offer a complete and enriching stay. Our dedicated team is trained to meet the needs of each individual, ensuring a personalized and seamless experience. Whether you're here for business or leisure, our mission is to provide you with everything you need to make your stay unforgettable.</p>
        </div>
      </div>

      {/* Teesra Row */}
      <div className="row-container" id="row3">
        <div className="image left">
        <img src={valuesImage} alt="Vision" className="image" style={{ border: "5px solid gold" }}/>  
              </div>
        <div className="text-content">
          <h2>Our Values</h2>
          <p>Core Values That Define Us" Text: Our core values guide every decision we make and shape the way we interact with our guests. Integrity, respect, and dedication to quality are at the heart of our operations. We believe in treating our guests with kindness and respect, ensuring their needs are met promptly. We are committed to continuous improvement, constantly innovating and adapting to offer the best possible service. Our values extend beyond hospitality – they influence our relationship with the community and the environment. By upholding these principles, we ensure that every stay is more than just a visit; it’s an experience that leaves a lasting impression.</p>
        </div>
      </div>

      {/* Chautha Row */}
      <div className="row-container reverse" id="row4" >
        <div className="image right">
        <img src={commitmentImage} alt="Vision" className="image" style={{ border: "5px solid gold" }} />        </div>
        <div className="text-content">
          <h2>Our Commitment</h2>
          <p>Our Commitment to Excellence" Text: At our hotel, we are dedicated to providing exceptional service to our guests. From the moment you check in, our staff works tirelessly to ensure your stay is comfortable and memorable. We focus on the finest details, from the cleanliness of our rooms to the variety of amenities we offer. Our commitment to excellence is reflected in the glowing reviews from our guests, who trust us for their business and leisure stays. Our mission is to create lasting memories for every guest who walks through our doors, and we strive to exceed your expectations every time.</p>
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

export default AboutUs;
