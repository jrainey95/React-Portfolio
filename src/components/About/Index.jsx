import React from 'react';
import "./index.scss";
import Mer from "../../assets/images/me.jpg";

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>About Me</h1>
        <p>I am a very ambitious developer with expertise in front-end development, actively seeking a role in a successful company that offers opportunities to work with the latest technologies and create stunning and successful projects.</p>
        <p>My self-confidence drives me to seek a dynamic and ever-curious work environment, where I can both challenge and be challenged by my peers.</p>
        <p>Outside of coding, you can find me playing CSGO, spending time with my family, hiking or running, or reading at the beach.</p>
      </div>
      <div className="image-container">
        <img
          src={Mer}
          alt="Jonathan"
          style={{
            maxWidth: '30%', // Ensure the image does not exceed its natural size
            height: 'auto',   // Maintain the aspect ratio
            display: 'block', // Remove any extra spacing around the image
            float: 'right',
            borderRight: '100px solid #333'   // Move the image to the right
          }}
        />
      </div>
    </div>
  );
};

export default About;
