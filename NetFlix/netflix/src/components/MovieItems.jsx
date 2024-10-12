import React from 'react';
import classes from './MovieCard.module.css';
import netflixlogo from '../assets/images/netflixlogo.png';
import topTenlogo from '../assets/images/netflixtopten.png';

const MovieItems = ({ movie, isRecentlyAdded, handleSelectMovie }) => {
  
  return (
    <div onClick={() => handleSelectMovie(movie.id)} className={classes.cards} style={{backgroundImage: `url(${movie.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
    {isRecentlyAdded(movie.recentlyAdded) && <h5>Recently added</h5>}
    {movie.netflixProduced === true && <div>
        <img className={classes.logo} src={netflixlogo} />
        </div>}
        {movie.topTen === true && <div>
            <img className={classes.topTen} src={topTenlogo} /> </div>}
</div>  )
}

export default MovieItems;


// import React from 'react';
// import classes from './MovieCard.module.css';
// import netflixlogo from '../assets/images/netflixlogo.png';
// import topTenlogo from '../assets/images/netflixtopten.png';

// const MovieItems = ({ movie, isRecentlyAdded, handleSelectMovie }) => {
//   return (
//     <div onClick={() => handleSelectMovie(movie.id)} className={classes.cards} style={{backgroundImage: `url(${movie.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
//     {isRecentlyAdded(movie.recentlyAdded) && <h5>Recently added</h5>}
//     {movie.netflixProduced === true && <div>
//         <img className={classes.logo} src={netflixlogo} />
//         </div>}
//         {movie.topTen === true && <div>
//             <img className={classes.topTen} src={topTenlogo} /> </div>}
// </div>  )
// }

// export default MovieItems;