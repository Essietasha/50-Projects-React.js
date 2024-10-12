import React from 'react';
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const ErrorPage = () => {

    const error = useRouteError();

    let title = 'An error occured!';
    let message = 'Something went wrong!';

    if(error.status === 404){
        title = 'Page Not Found!';
        message = 'Could not find page';
    };

    if(error.status === 500){
        message = error.message;
    };

  return (
    <>
        <MainNavigation />
        <div className='centreError'>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    </>
  )
}

export default ErrorPage;