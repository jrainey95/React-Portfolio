import LogoTitle from '../../assets/images/rainey-logo.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['J', 'o', 'n', 'a', 't', 'h', 'a', 'n', ' ', 'R', 'a', 'i', 'n','e','y']
  const jobArray = ['W','e','b', ' ','D','e','v','e','l','o','p','e','r'];

  return(
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hello, <br/> I'm 
        Jonathan Rainey
        {/* <img src={LogoTitle} alt="developer" /> */}
        <br/>
        A Web Developer
        </h1>
        <h2>Frontend Developer / Javascript / React </h2>
        <Link to='/contact' className='flat-button'>Contact Me </Link>
      </div>
    </div>
  )

} 

export default Home;






// import LogoTitle from '../../assets/images/rainey-logo.png';
// import { Link } from 'react-router-dom';
// import './index.scss';
// import { useState } from 'react';

// const Home = () => {
//   const [letterClass, setLetterClass] =useState('text-animate');
//   const nameArray = ['J', 'o', 'n', 'a', 't', 'h', 'a', 'n', ' ', 'R', 'a', 'i', 'n','e','y']
//   const jobArray = ['W','e','b', ' ','D','e','v','e','l','o','p','e','r'];

//   return(
//     <div className='container home-page'>
//       <div className='text-zone'>
//         <h1>Hello, <br/> I'm 
//         Jonathan Rainey
//         {/* <img src={LogoTitle} alt="developer" /> */}
//         <br/>
//         A Web Developer
//         </h1>
//         <h2>Frontend Developer / Javascript / React </h2>
//         <Link to='/contact' className='flat-button'>Contact Me </Link>
//       </div>
//     </div>
//   )

// } 

// export default Home;




