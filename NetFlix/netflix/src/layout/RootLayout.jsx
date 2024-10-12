import React from 'react';
import MainNavigation from '../components/MainNavigation';
import FooterNavigation from '../components/FooterNavigation';
import { Outlet } from 'react-router-dom';
import { MovieProvider } from '../store/MovieContext';


const RootLayout = () => {

  return (
    <>
    <MovieProvider>
        <MainNavigation />
        <Outlet />
        {/* <FooterNavigation /> */}
    </MovieProvider>
    </>
  )
}

export default RootLayout;