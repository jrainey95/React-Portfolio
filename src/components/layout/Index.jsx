import Sidebar from '../sidebar/Index';

import './index.scss';

const Layout = () => {
  return (
    <div className='App'>
  <Sidebar/>
    <div className='page'>
      <span className='tags top-tags'>&lt</span>
    </div>


  </div>
  )
}

export default Layout;