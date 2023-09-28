import './index.scss';
import {  useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'

const Contact = () => {
  
  const form = useRef();



  const [isSubmitting, setIsSubmitting] = useState(false);



    const sendEmail = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  
  const serviceID = 'service_ygdpg6o'; 
  const templateID = 'template_r3m6vq6'; 
  const apiKey = 'd5aPEPQw2_WQ8ITgg'

 
  const formData = new FormData(form.current);


  const templateParams = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  emailjs
    .send(serviceID, templateID, templateParams, apiKey)
    .then(
      (response) => {
        console.log('Email sent successfully:', response);
        setIsSubmitting(false); 
        alert('Message successfully sent!');
        window.location.reload(false);
      },
      (error) => {
        console.error('Error sending email:', error);
        setIsSubmitting(false); 
        alert('Failed to send the message, please try again');
      }
    );
};


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>Contact Me</h1>
          {/* <p>Actively looking for opportunities!</p> */}

          <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input
                    type="submit"
                    className="flat-button"
                    value="SEND"
                    disabled={isSubmitting} // Disable the button while submitting
                  />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
