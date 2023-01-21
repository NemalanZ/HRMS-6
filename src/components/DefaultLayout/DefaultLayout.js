import React, { useState } from 'react';
import { Link, Route, Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';

// router service
// import routerService from '../../routes/router_service';
const DefaultLayout = (props) => {

  const [menu, setMenu] = useState(false)

  const toggleMobileMenu = () => {
    setMenu(!menu)
  }
  const { match } = props;
  return (
    <>
      <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );

}
export default DefaultLayout;