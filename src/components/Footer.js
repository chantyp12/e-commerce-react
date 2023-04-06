import React from 'react';
import "../styles/Footer.css";

function Footer(){
  return(
    <footer>
      <a href="https://www.facebook/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Ffacebook_179319&psig=AOvVaw1_61j-IQFnQHZL6IjJoY-8&ust=1680837629406000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjwxZ-mlP4CFQAAAAAdAAAAABAE'
      alt='facebook'
      className='media'
      />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3DTWITTER&psig=AOvVaw2cp2jz1dNbW8DaOF6iINvz&ust=1680838061819000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNCY1-2nlP4CFQAAAAAdAAAAABAE'
      alt='twitter'
      className='media'
      />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <img
      src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-bbhwk&psig=AOvVaw3CbG3JDiXww8f5vXEmdyO5&ust=1680838087194000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKjy0fmnlP4CFQAAAAAdAAAAABAE'
      alt='instagram'
      className='media'
      />
      </a>
    </footer>
  );
}

export default Footer;