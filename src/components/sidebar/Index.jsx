import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/jrr.png'
import LogoSubtitle from '../../assets/images/rainey-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () =>{
  return (
  <div className='nav-bar'>
    <Link className='logo' to='/'>
      <img src={LogoS} alt='logo' />
       <img className="sub-logo" src={LogoSubtitle} alt='slobodan' />
    </Link>

    <nav>
      <NavLink exact="true" activeClassName="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" activeClassName="active" className="about" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jon-rainey/">
      <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />
    </a>
    </nav>












  </div>
  )
}

export default Sidebar;