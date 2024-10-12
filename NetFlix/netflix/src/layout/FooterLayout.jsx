import React from 'react';
import FooterNavigation from '../components/FooterNavigation';
import { Outlet } from 'react-router-dom';


const FooterLayout = () => {
  
  return (
    <>
        <Outlet />
        <FooterNavigation />
    </>
  )
}

export default FooterLayout;