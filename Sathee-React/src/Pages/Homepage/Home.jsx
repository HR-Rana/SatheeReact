import React from 'react'
import Hero from './Sections/Hero'

export default function Home() {
  return (
   <div>
    {/* Hero section */}
    <Hero/>
  {/* WHY CHOOSE US SECTION */}
  <section className="why-choose-us">
    <div className="container">
      <div className="section-title">
        <small>Our Services</small>
        <h3>Why choose Shathee?</h3>
        <p>High-quality preventive care for the individuals with diabetes, hypertension, or those at risk</p>
      </div>
      <div className="chooseUs-content-box flex-box">
        <div className="content">
          <div className="icon">
            <img src="./assets/image/service/Group 35628.svg" alt="icon" />
          </div>
          <p>Expert in house medical doctors</p>
        </div>
        <div className="content">
          <div className="icon">
            <img src="./assets/image/service/Group 35637.svg" alt="icon" />
          </div>
          <p>Evidence based strategies via telehealth</p>
        </div>
        <div className="content">
          <div className="icon">
            <img src="./assets/image/service/Group 35638.svg" alt="icon" />
          </div>
          <p>Support for lifestyle modifications</p>
        </div>
        <div className="content">
          <div className="icon">
            <img src="./assets/image/service/Group 35639.svg" alt="icon" />
          </div>
          <p>Regular health tracking for early intervention</p>
        </div>
        <div className="content">
          <div className="icon">
            <img src="./assets/image/service/Group 35640.svg" alt="icon" />
          </div>
          <p>Preventive medicine backed by human genetics</p>
        </div>
      </div>
    </div>
  </section>
  {/* WHY CHOOSE US SECTION END */}
  {/* join waitinglist tody section */}
  <section className="join-waitinglist-today">
    <div className="container">
      <div className="flex-box">
        <div className="left-content">
          <span>
            <h3>Join our waiting list today!</h3>
            <p>Be the first to access Shathee's transformative preventive healthcare services upon launch.
            </p>
            <h6>Don't miss out – sign up now!</h6>
            <div className="singup-button button">
              <button>Sign UP</button>
            </div>
          </span>
        </div>
        <div className="right-content">
          <div className="main-img">
            <img src="./assets/image/Home/Group woman.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* TESTIMONIALS SECTION START */}
  <section className="what-people-think-aboutus">
    <div className="container">
      <div className="qoutation">
        <img src="./assets/image/testimonial/left-quote 1 (Traced).png" alt="qoute" />
      </div>
      <div className="section-title">
        <small>Customer Testimonial</small>
        <h4>What people think about us</h4>
      </div>
      <div className="testimonials-box">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="review-heading">
              <div className="flex-box">
                <div className="profile flex-box">
                  <img src="./assets/image/testimonial/Image (1).png" alt="img" />
                  <span>
                    <h6>Esther Hills</h6>
                    <p>Lead Intranet Technician</p>
                  </span>
                </div>
                <div className="rating">
                  <span>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
              </div>
            </div>
            <div className="review-body">
              <h6>Couldn’t Cope Alone</h6>
              <p>Before joining Shathee, I struggled to manage my diabetes on my own. The expert guidance
                and personalised care I received from their professionals have made a significant
                difference in my life. My blood sugar levels are now stable, and I feel more confident
                in managing my condition. Shathee has truly transformed my health journey.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="review-heading">
              <div className="flex-box">
                <div className="profile flex-box">
                  <img src="./assets/image/testimonial/Image (2).png" alt="img" />
                  <span>
                    <h6>Esther Hills</h6>
                    <p>Lead Intranet Technician</p>
                  </span>
                </div>
                <div className="rating">
                  <span>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
              </div>
            </div>
            <div className="review-body">
              <h6>Couldn’t Cope Alone</h6>
              <p>Before joining Shathee, I struggled to manage my diabetes on my own. The expert guidance
                and personalised care I received from their professionals have made a significant
                difference in my life. My blood sugar levels are now stable, and I feel more confident
                in managing my condition. Shathee has truly transformed my health journey.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="review-heading">
              <div className="flex-box">
                <div className="profile flex-box">
                  <img src="./assets/image/testimonial/Image.png" alt="img" />
                  <span>
                    <h6>Esther Hills</h6>
                    <p>Lead Intranet Technician</p>
                  </span>
                </div>
                <div className="rating">
                  <span>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
              </div>
            </div>
            <div className="review-body">
              <h6>Couldn’t Cope Alone</h6>
              <p>Before joining Shathee, I struggled to manage my diabetes on my own. The expert guidance
                and personalised care I received from their professionals have made a significant
                difference in my life. My blood sugar levels are now stable, and I feel more confident
                in managing my condition. Shathee has truly transformed my health journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* TESTIMONIALS SECTION END */}
  {/* FAQ SECTION START */}
  <section className="faq-section">
    <div className="container">
      <div className="section-title">
        <small>FAQ</small>
        <h4>Frequently asked questions</h4>
        <p>Visit our <span>FAQ page</span> for more questions and answers</p>
      </div>
      <div className="faq-box flex-box">
        <div className="left-img">
          <img src="./assets/image/faq/Group 35644.png" alt="faq-img" />
        </div>
        <div className="right-site-FAQs">
          <div className="faq-item active">
            <div className="question">
              <h4>What services do we offer?</h4>
              <span>
                <i className="fa-solid fa-chevron-down" />
              </span>
              <div className="answer">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="question">
              <h4>How much does it cost? </h4>
              <span>
                <i className="fa-solid fa-chevron-down" />
              </span>
              <div className="answer">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="question">
              <h4>How does telehealth work?</h4>
              <span>
                <i className="fa-solid fa-chevron-down" />
              </span>
              <div className="answer">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
          <div className="faq-item">
            <div className="question">
              <h4>Are our doctors qualified?</h4>
              <span>
                <i className="fa-solid fa-chevron-down" />
              </span>
              <div className="answer">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* FAQ SECTION END */}
  {/* DOCTORS TESTIMONIALS SECTION */}
  <section className="what-people-think-aboutus Doctors-testimonials">
    <div className="container">
      <div className="qoutation">
        <img src="./assets/image/testimonial/left-quote 1 (Traced).png" alt="qoute" />
      </div>
      <div className="section-title">
        <small>Doctor Testimonial</small>
        <h4>Hear from our doctors</h4>
      </div>
      <div className="testimonials-box">
        <div className="owl-carousel owl-theme">
          <div className="item">
            <div className="review-heading">
              <div className="flex-box">
                <div className="profile flex-box">
                  <img src="./assets/image/testimonial/Image (2).png" alt="img" />
                  <span>
                    <h6>Dr. Abida Parwin</h6>
                    <p>Medicine Specialist</p>
                  </span>
                </div>
                <div className="rating">
                  <span>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
              </div>
            </div>
            <div className="review-body">
              <h6>Preventive Approach</h6>
              <p>Before joining Shathee, I struggled to manage my diabetes on my own. The expert guidance
                and personalised care I received from their professionals have made a significant
                difference in my life. My blood sugar levels are now stable, and I feel more confident
                in managing my condition. Shathee has truly transformed my health journey.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="review-heading">
              <div className="flex-box">
                <div className="profile flex-box">
                  <img src="./assets/image/testimonial/image.png" alt="img" />
                  <span>
                    <h6>Dr. Kamal Hossain</h6>
                    <p>Diabetes Specialist</p>
                  </span>
                </div>
                <div className="rating">
                  <span>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
              </div>
            </div>
            <div className="review-body">
              <h6>Maximising Healthspan</h6>
              <p>Before joining Shathee, I struggled to manage my diabetes on my own. The expert guidance
                and personalised care I received from their professionals have made a significant
                difference in my life. My blood sugar levels are now stable, and I feel more confident
                in managing my condition. Shathee has truly transformed my health journey.
              </p>
            </div>
          </div>
          <div className="item">
            <div className="review-heading">
              <div className="flex-box">
                <div className="profile flex-box">
                  <img src="./assets/image/testimonial/Image (1).png" alt="img" />
                  <span>
                    <h6>Dr. Farzana Shahid</h6>
                    <p>ENT Specialist</p>
                  </span>
                </div>
                <div className="rating">
                  <span>
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </span>
                </div>
              </div>
            </div>
            <div className="review-body">
              <h6>Evidence-Based Preventive care</h6>
              <p>Before joining Shathee, I struggled to manage my diabetes on my own. The expert guidance
                and personalised care I received from their professionals have made a significant
                difference in my life. My blood sugar levels are now stable, and I feel more confident
                in managing my condition. Shathee has truly transformed my health journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* DOCTORS TESTIMONIALS SECTION END*/}
  {/* BLOG SECTION START */}
  <section className="Blog-section Featured-month-section">
    <div className="container">
      <div className="section-title">
        <small>BLOG</small>
        <h4>Stay updated With Shathee</h4>
      </div>
      <div className="flex-box">
        <div className="left-site-content">
          <div className="content-card">
            <div className="left-img">
              <img src="./assets/image/blog/Rectangle 2961.png" alt="blog" />
            </div>
            <div className="content-texts">
              <div className="card-title">
                <small>Diabetes</small>
                <h5>set video playback speed
                  with javascript</h5>
              </div>
              <div className="card-body">
                <div className="img flex">
                  <img src="./assets/image/blog/Ellipse 322.png" alt="img" />
                  <p>Jesica Koli</p>
                </div>|
                <p>
                  02 December 2022
                </p>|
                <p>
                  3Min. to Read
                </p>
              </div>
              <p>Did you come here for something in particular or just general Riker-bashing</p>
            </div>
          </div>
          <div className="content-card">
            <div className="left-img">
              <img src="./assets/image/blog/Rectangle 3015.png" alt="blog" />
            </div>
            <div className="content-texts">
              <div className="card-title">
                <small>life style</small>
                <h5>set video playback speed
                  with javascript</h5>
              </div>
              <div className="card-body">
                <div className="flex">
                  <img src="./assets/image/blog/Ellipse 322.png" alt="img" />
                  <p>Jesica Koli</p>
                </div>|
                <p>
                  02 December 2022
                </p>|
                <p>
                  3Min. to Read
                </p>
              </div>
              <p>Did you come here for something in particular or just general Riker-bashing</p>
            </div>
          </div>
        </div>
        <div className="right-site-videos">
          <div className="video-contents">
            <h5>Popular Now</h5>
            <div className="items">
              <div className="video">
                <img src="./assets/image/Home/Rectangle 2965.png" alt="vieo" />
              </div>
              <div className="texts">
                <h6>set video playback speed with javascript version</h6>
                <div className="bottom flex">
                  <div className="flex">
                    <img src="./assets/image/blog/Ellipse 322.png" alt="img" />
                    <p>Jesica Koli</p>
                  </div>|
                  <p>3 Min to Read</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <img src="./assets/image/Home/Rectangle 2965.png" alt="vieo" />
              </div>
              <div className="texts">
                <h6>set video playback speed with javascript version</h6>
                <div className="bottom flex">
                  <div className="flex">
                    <img src="./assets/image/blog/Ellipse 322.png" alt="img" />
                    <p>Jesica Koli</p>
                  </div>|
                  <p>3 Min to Read</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <img src="./assets/image/Home/Rectangle 2965.png" alt="vieo" />
              </div>
              <div className="texts">
                <h6>set video playback speed with javascript version</h6>
                <div className="bottom flex">
                  <div className="flex">
                    <img src="./assets/image/blog/Ellipse 322.png" alt="img" />
                    <p>Jesica Koli</p>
                  </div>|
                  <p>3 Min to Read</p>
                </div>
              </div>
            </div>
            <div className="items">
              <div className="video">
                <img src="./assets/image/Home/Rectangle 2965.png" alt="vieo" />
              </div>
              <div className="texts">
                <h6>set video playback speed with javascript version</h6>
                <div className="bottom flex">
                  <div className="flex">
                    <img src="./assets/image/blog/Ellipse 322.png" alt="img" />
                    <p>Jesica Koli</p>
                  </div>|
                  <p>3 Min to Read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button">
        <button>See more</button>
      </div>
    </div>
  </section>
  {/* BLOG SECTION END */}
</div>

  )
}
