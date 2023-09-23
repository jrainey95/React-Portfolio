// import LogoTitle from '../../assets/images/rainey-logo.png';
// import { Link } from 'react-router-dom';
// import './index.scss';
// import { useState } from 'react';
// // import AnimatedLetters from '../AnimatedLetters/Index';

// const Home = () => {
//   const [letterClass, setLetterClass] = useState('text-animate');
//   const nameArray = ['J', 'o', 'n', 'a', 't', 'h', 'a', 'n', ' ', 'R', 'a', 'i', 'n','e','y']
//   const jobArray = ['W','e','b', ' ','D','e','v','e','l','o','p','e','r'];

//   useEffect(() => {
//     return setTimeout(() => {
//       setLetterClass('text-animate-hover')
//     }, 4000)
//   }, [])

//   return (
//     <>
//       <div className="container home-page">
//         <div className="text-zone">
//           <h1>
//             <span className={letterClass}>H</span>
//             <span className={`${letterClass} _12`}>i,</span>
//             <br />
//             <span className={`${letterClass} _13`}>I</span>
//             <span className={`${letterClass} _14`}>'m</span>
//             <img
//               src={LogoTitle}
//               alt="JavaScript Developer Name, Web Developer Name"
//             />
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={nameArray}
//               idx={15}
//             />
//             <br />
//             <AnimatedLetters
//               letterClass={letterClass}
//               strArray={jobArray}
//               idx={22}
//             />
//           </h1>
//           <h2>Front End Developer / JavaScript Expert / Youtuber</h2>
//           <Link to="/contact" className="flat-button">
//             CONTACT ME
//           </Link>
//         </div>
//         <Logo />
//       </div>

//       <Loader type="pacman" />
//     </>
//   )
// }

// export default Home








import LogoTitle from '../../assets/images/rainey-logo.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import Logo from './Logo/Index';

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
        <br/>
        A Web Developer
        </h1>
        <h2>Frontend Developer / Javascript / React </h2>
        <Link to='/contact' className='flat-button'>Contact Me </Link>
      </div>
      <Logo/>
    </div>
  )

} 

export default Home;




