import React from 'react';
import UserHome from '../components/UserHome';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
  
  const movies = useLoaderData();

  return (
    <UserHome movies={movies}/>
  )
}

export default HomePage;

export async function loader() {
  const response = await fetch(''); 
  //..
}


// import React from 'react';
// import UserHome from '../components/UserHome';
// import { useLoaderData } from 'react-router-dom';

// const HomePage = () => {
//   const movies = useLoaderData();

//   return (
//     <UserHome movies={movies}/>
//   )
// }

// export default HomePage;

// export async function loader() {
//   const response = await fetch(''); 
//   //..
// }