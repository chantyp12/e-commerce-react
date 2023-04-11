import React from 'react';
import "../styles/Footer.css";

function Footer(){
  return(
    <footer>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://cdn-icons-png.flaticon.com/512/179/179319.png'
      alt='facebook'
      className='media'
      />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://louisville.edu/philosophy/images/icons-for-footer/twittericon2.png/image_preview'
      alt='twitter'
      className='media'
      />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png'
      alt='instagram'
      className='media'
      />
      </a>
    </footer>
  );
}

export default Footer;