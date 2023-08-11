import React from "react";

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <form
        action="mailto:Jonathan.rainey5@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
