import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="about-us-container">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d56181.807386644185!2d77.32920307372918!3d28.34787420008995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1snear%20hotel!5e0!3m2!1sen!2sin!4v1731830294316!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div class="container my-5" style={{backgroundColor:"#d7d7d7"}}>
        <footer class="text-center text-lg-start text-color" >
          <div class="container-fluid p-4 pb-0">
            <section class="">
              <div class="row">
                <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color">
                    Hotel Booking System
                  </h5>

                  <p>
                    Being a 24/7 Hotel is one of our best amenities because we
                    can offer our customer unrestricted freedom of access from
                    sun up to sun down and everywhere in between. You no longer
                    have to worry about anything in Hotel at any time!
                  </p>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Top Cities</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Faridabad
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        New Delhi
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Rohtak
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Gurgaon
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Rohtak
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Support & FAQs</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Your Booking
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        FAQs
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Review's
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Others</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Travels
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Guide
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="col-lg-2 col-md-6 mb-4 mb-md-0">
                  <h5 class="text-uppercase text-color-4">Policies</h5>

                  <ul class="list-unstyled mb-0">
                    <li>
                      <a href="#!" class="text-color">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Privacy
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Cookies
                      </a>
                    </li>
                    <li>
                      <a href="#!" class="text-color">
                        Newrooms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr class="mb-4" />

            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3 text-color">Register for free</span>
                <Link to="/user/customer/register" class="active">
                  <button
                    type="button"
                    class="btn btn-outline-light btn-rounded bg-color text-color"
                  >
                    Sign up!
                  </button>
                </Link>
              </p>
            </section>

            <hr class="mb-4" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
