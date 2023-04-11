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
          <img className="Si" src= "https://www.geekawhat.com/wp-content/uploads/2022/09/White-Themed-RTX-3060Ti-PC-Build-Featured-Image-1250x700.jpg"  alt="Slide 1" />
        </div>
        <div>
          <img className="Si" src="https://helpdeskgeek.com/wp-content/pictures/2022/05/pc-build.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img className="Si" src="https://www.createpcs.co.uk/wp-content/uploads/2022/05/lian-li-o11-dynamic-evo-i7-12700kf-rtx3050-white-custom-pc-27-Large.jpg" alt="Slide 3" />
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