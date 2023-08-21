import LogoTitle from '../../assets/images/rainey-logo.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
  return(
    <div className='container home-page'>
      <div className='text-zone'>
        <h1>Hello, <br/> I'm 
        Jonathan 
        <img src={LogoTitle} alt="developer" />
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