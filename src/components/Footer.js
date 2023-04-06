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
      src='https://lh3.googleusercontent.com/zvXhnDsMRoFA1299tg58MigXViVVBnoVVGORNzecFxr-ZzMm58TAPA6kHhhGJfOWs_Ybiwg3XLRL8bU90XksKoqc75qlcR7vOMoUQHjM1Q'
      alt='instagram'
      className='media'
      />
      </a>
    </footer>
  );
}

export default Footer;