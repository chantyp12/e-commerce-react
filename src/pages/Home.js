import React from 'react';
import '../styles/Home.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <>
      <Slider className='iHold' {...settings}>
        <div >
          <img className="Si" src= "https://lh3.googleusercontent.com/BxX5RtcNhi6bq_IqYqKYDUZPOw6T2FQrhVjeQxjo-xUo8u5xSQ9w9tJBxSSdWm_C8v1jZ7nJehmGMJRRAdL-AFe2y3pF34w9Qt2zD6Y"  alt="Slide 1" />
        </div>
        <div>
          <img className="Si" src="https://lh3.googleusercontent.com/bqCwi1xvcQwG1PdexOp_Eg4_O1EEC1gFzGZIAKGjmKDU80CJyRh_Z-JTDC48ofJrTrBw_YiOM56o8-WCdbuasRrYw5C2Sk5S0seMKDEAa3Oj" alt="Slide 2" />
        </div>
        <div>
          <img className="Si" src="https://lh3.googleusercontent.com/pNtu5bWJYO5yTqLdBuqUrCVHgbIPy57GaBwtwwvzQprr3-n16X5zb8S3s6uSn8wlr9kcvPFwaBJ7qJZ2Kv4WaciQV4ZwCy0QW_bky2s" alt="Slide 3" />
        </div>
      </Slider>


      <h2>Welcome to Chanthai's Microcenter!</h2>

      <section>
        <p>We offer a wide variety of computer components and accessories for all your computing needs.</p>
       
        <p>Feel free to browse our selection and contact us if you have any questions or concerns.</p>
      </section>

    </>
  );
}

export default Home;