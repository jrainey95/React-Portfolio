import Sidebar from '../sidebar/Index';
import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () => {
  return (
    <div className='App'>
  <Sidebar/>
    <div className='page'>
      <span className='tags top-tags'>&lt;/body&gt;</span>

      <Outlet />

      <span className='tags bottom-tas'>
    &lt;/body&gt;
    <br/>
    <span className='bottom-tag-html'>&lt;/html&gt;</span>

      </span>
1``



    </div>
  </div>
  )
}

export default Layout;