import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import Layout from './components/layout/Index';
import Home from './components/Home';
import About from './components/About/Index';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Contact from './components/Contact/Index';
import Projects from './components/Projects/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" activeclassname="active" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" activeclassname="active" element={<About />} />
          <Route path="/contact" activeclassname="active" element={<Contact />} />
          <Route path='/projects' activeclassname='active' element={<Projects />} />
        </Route>
      </Routes>
      
      
    </>
  );
}

export default App;
