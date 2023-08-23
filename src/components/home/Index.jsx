import LogoTitle from '../../assets/images/rainey-logo.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] =useState('text-animate');
  const nameArray = ['J', 'o', 'n', 'a', 't', 'h', 'a', 'n', ' ', 'R', 'a', 'i', 'n','e','y']
  const jobArray = ['W','e','b', ' ','D','e','v','e','l','o','p','e','r'];

  return(
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hello, <br/> I'm 
        Jonathan Rainey
        {/* <img src={LogoTitle} alt="developer" /> */}
        {/* <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15} 
        />
        <br/> */}
        A Web Developer
        </h1>
        <h2>Frontend Developer / Javascript / CSS / React </h2>
        <br/> 
        <h2>Backend Developer / MongoDB / MySQL </h2>
        <Link to='/contact' className='flat-button'>Contact Me </Link>
      </div>
    </div>
  )

} 

export default Home;




