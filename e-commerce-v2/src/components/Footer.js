import React from 'react';
import "../styles/Footer.css";

function Footer(){
  return(
    <footer>
      <a href="https://www.facebook/" target="_blank" rel="noopener noreferrer">
      <img
      src='Images/facebooklogo.png'
      alt='facebook'
      className='media'
      />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='Images/twitterlogo2.png'
      alt='twitter'
      className='media'
      />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='Images/instagramlogo5.png'
      alt='instagram'
      className='media'
      />
      </a>
    </footer>
  );
}

export default Footer;