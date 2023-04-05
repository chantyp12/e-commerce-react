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
          <img className="Si" src="images/Slider1.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img className="Si" src="images/Slider3.webp" alt="Slide 2" />
        </div>
        <div>
          <img className="Si" src="images/Slider2.jpeg" alt="Slide 3" />
        </div>
      </Slider>


      <h2>Welcome to our website!</h2>

      <section>
        <p>We offer a wide variety of computer components and accessories for all your computing needs.</p>
        {/* <p>Our selection includes:</p>
        <ul>
          <li>Processors (CPUs)</li>
          <li>Graphics Cards (GPUs)</li>
          <li>Motherboards</li>
          <li>Memory (RAM)</li>
          <li>Storage (HDDs, SSDs)</li>
          <li>Power Supplies (PSUs)</li>
          <li>Cases</li>
          <li>Cooling Solutions (Fans, Liquid Cooling)</li>
          <li>Accessories (Keyboards, Mice, Speakers, Monitors)</li>
        </ul> */}
        <p>Feel free to browse our selection and contact us if you have any questions or concerns.</p>
      </section>

    </>
  );
}

export default Home;