import React, { useEffect, useState, useContext } from 'react';
import classes from './MovieCard.module.css';
import { Link } from 'react-router-dom';
import MyList from '../pages/MyList';
import MovieItems from './MovieItems';
import { MovieContext } from '../store/MovieContext';

const MovieCard = ({ movies }) => {

    const {pickedMovies, setPickedMovies} = useContext(MovieContext);


    const isRecentlyAdded = (recentlyAdded) => {
        return recentlyAdded === true;
    }
    
    function findMovieById(id) {
        const allCategories = [...movies.todaysPick, ...movies.new, ...movies.hollywood, ...movies.nollywood];
        return allCategories.find(movie => movie.id === id);
    }

    function handleSelectMovie(id) {
        const selectedMovie  = findMovieById(id);

        if(selectedMovie) {
            setPickedMovies((prevPickedMovies) => {
                if (prevPickedMovies.some((movie) => movie.id === selectedMovie.id)) {
                return prevPickedMovies;
                }
                return [...prevPickedMovies, selectedMovie];
            });
        }
    }
    

  return (<>
    <MyList movie={pickedMovies} isRecentlyAdded={isRecentlyAdded} />

    <div className={classes.movieCard}>
        <h3>Today's Top Picks for you</h3>
        <ul className={classes.cardsCont}>
            {movies.todaysPick.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/home/movies/${movie.id}`}>
                        <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie} />
                    </Link> 
                </li>
            ))}
        </ul>

        <h3>Your Next Watch</h3>
        <ul className={classes.cardsCont}>
            {movies.yourNextWatch.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/home/movies/${movie.id}`}>
                        <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie} />
                    </Link> 
                </li>
            ))}
        </ul>
                
        <h3>New on Netflix</h3>
        <ul className={classes.cardsCont}>
            {movies.new.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/home/movies/${movie.id}`}>
                        <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie}/>
                    </Link>
                </li>
            ))}
        </ul>

        <h3>Hollywood</h3>
        <ul className={classes.cardsCont}>
            {movies.hollywood.map((movie) => (
                <li key={movie.id}>
                    <Link to={`/home/movies/${movie.id}`}>
                        <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie}/>
                    </Link> 
                </li>
            ))}
        </ul>

        <h3>Nollywood</h3>
        <ul className={classes.cardsCont}>
            {movies.nollywood.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/home/movies/${movie.id}`}>
                            <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie}/>
                        </Link> 
                    </li>
            ))}
        </ul>
    </div>
    </>
  )
}

export default MovieCard;





// import React, { useEffect, useState, useContext } from 'react';
// import classes from './MovieCard.module.css';
// import { Link } from 'react-router-dom';
// import MyList from '../pages/MyList';
// import MovieItems from './MovieItems';
// import { MovieContext } from '../store/MovieContext';

// const MovieCard = ({ movies }) => {

//     // const [pickedMovies, setPickedMovies] = useState([]);
//     const {pickedMovies, setPickedMovies} = useContext(MovieContext);
//     console.log(pickedMovies);


//     // useEffect(() => {
//     //     const savedMovies = JSON.parse(localStorage.getItem('pickedMovies'));
//     //     if(savedMovies && savedMovies.length > 0){
//     //         setPickedMovies(savedMovies);
//     //     }
//     // }, []);

//     // useEffect(() => {
//     //     if(pickedMovies.length > 0){
//     //         localStorage.setItem('pickedMovies', JSON.stringify(pickedMovies));
//     //     }
//     // }, [pickedMovies]);

//     const isRecentlyAdded = (recentlyAdded) => {
//         return recentlyAdded === true;
//     }
    
//     function findMovieById(id) {
//         const allCategories = [...movies.todaysPick, ...movies.new, ...movies.hollywood, ...movies.nollywood];
//         return allCategories.find(movie => movie.id === id);
//     }

//     function handleSelectMovie(id) {
//         const selectedMovie  = findMovieById(id);

//         if(selectedMovie) {
//             setPickedMovies((prevPickedMovies) => {
//                 if (prevPickedMovies.some((movie) => movie.id === selectedMovie.id)) {
//                 return prevPickedMovies;
//                 }
//                 return [...prevPickedMovies, selectedMovie];
//             });
//         }
//     }
    

//   return (<>
//     <MyList movie={pickedMovies} isRecentlyAdded={isRecentlyAdded} />

//     <div className={classes.movieCard}>
//         <h3>Today's Top Picks for you</h3>
//         <ul className={classes.cardsCont}>
//             {movies.todaysPick.map((movie) => (
//                 <li key={movie.id}>
//                         <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie} />
//                 </li>
//             ))}
//         </ul>

//         <h3>Your Next Watch</h3>
//         <ul className={classes.cardsCont}>
//             {movies.yourNextWatch.map((movie) => (
//                 <li key={movie.id}>
//                         <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie} />
//                 </li>
//             ))}
//         </ul>
                
//         <h3>New on Netflix</h3>
//         <ul className={classes.cardsCont}>
//             {movies.new.map((movie) => (
//                 <li key={movie.id}>
//                         <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie}/>
//                 </li>
//             ))}
//         </ul>

//         <h3>Hollywood</h3>
//         <ul className={classes.cardsCont}>
//             {movies.hollywood.map((movie) => (
//                 <li key={movie.id}>
//                         <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie}/>
//                 </li>
//             ))}
//         </ul>

//         <h3>Nollywood</h3>
//         <ul className={classes.cardsCont}>
//             {movies.nollywood.map((movie) => (
//                 <li key={movie.id}>
//                     <Link to=':movieId'>
//                         <MovieItems movie={movie} isRecentlyAdded={isRecentlyAdded} handleSelectMovie={handleSelectMovie}/>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </div>
//     </>
//   )
// }

// export default MovieCard;