import './index.scss';
import React from 'react'; // Don't forget to import React

const AnimatedLetters = ({ lettersClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${lettersClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
