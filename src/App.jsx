import './App.scss';
import { Routes, Route, NavLink } from 'react-router-dom';
import Layout from './components/layout/Index';
import Home from './components/Home';
import About from './components/About/Index';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Contact from './components/Contact/Index';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" activeClassName="active" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" activeClassName="active" element={<About />} />
          <Route path="/contact" activeClassName="active" element={<Contact />} />
        </Route>
      </Routes>
      
      
    </>
  );
}

export default App;
