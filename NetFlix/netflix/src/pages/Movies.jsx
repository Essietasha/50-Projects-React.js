import React from 'react';
import { useLoaderData, json } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Movies = () => {
  
  const movies = useLoaderData();

  return (
    <MovieCard movies={movies}/>
  )
}

export default Movies;

export async function loader(){
  const response = await fetch('http://localhost:8000/movies');

  if(!response.ok){
    throw json(
      {message: 'Could not fetch movies'},
      {status: 500}
    );
  } else{
    const resData = await response.json();
    return resData;
  }
}


// import React from 'react';
// import { useLoaderData, json } from 'react-router-dom';
// import MovieCard from '../components/MovieCard';

// const Movies = () => {
//   const movies = useLoaderData();

//   return (
//     <MovieCard movies={movies}/>
//   )
// }

// export default Movies;

// export async function loader(){
//   const response = await fetch('http://localhost:8000/movies');

//   if(!response.ok){
//     throw json(
//       {message: 'Could not fetch movies'},
//       {status: 500}
//     );
//   } else{
//     const resData = await response.json();
//     return resData;
//   }

// }