import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import classes from './Movie.module.css';


const Movie = () => {

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
        const response = await fetch('http://localhost:8000/movies');
        const data = await response.json();

        // Combine all categories to find the movie
        const allMovies = [...data.todaysPick, ...data.new, ...data.hollywood, ...data.nollywood, ...data.myList || []];
        const foundMovie = allMovies.find((movie) => movie.id === movieId);
        setMovie(foundMovie);
    };

    fetchMovie();
}, [movieId]);

  if (!movie) {
      return <p className={classes.loading}>Loading movie details...</p>;
  }

  return (
    <div  className={classes.divEl} >
      <h1>{movie.title}</h1>
      <div  className={classes.movieImg} >
        <img src={movie.image} alt={movie.title}/>
      </div>
      <button className={classes.playBtn} >Play</button>
  </div>
);
}
export default Movie;



// import React from 'react'
// const Movie = () => {
//   return (
//     <div>Movie</div>
//   )
// }

// export default Movie;