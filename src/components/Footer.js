import React from 'react';
import "../styles/Footer.css";

function Footer(){
  return(
    <footer>
      <a href="https://www.facebook/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://cdn-icons-png.flaticon.com/512/179/179319.png'
      className='media'
      />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://louisville.edu/philosophy/images/icons-for-footer/twittericon2.png/image_preview'
      className='media'
      />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://e7.pngegg.com/pngimages/115/1008/png-clipart-instagram-application-logo-computer-icons-logo-instagram-miscellaneous-purple.png'
      alt='instagram'
      className='media'
      />
      </a>
    </footer>
  );
}

export default Footer;