import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <>
     <h2>Contact Us</h2>
      <section>
       

        <form className="contact-form" action="submit-form.php" method="post">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <input type="submit" value="Send" />
        </form>
      </section>
   
    </>
  );
}

export default Contact;
