import React from 'react';
import classes from '../components/MovieCard.module.css';
import netflixlogo from '../assets/images/netflixlogo.png';
import topTenlogo from '../assets/images/netflixtopten.png';
import { useContext } from 'react';
import { MovieContext } from '../store/MovieContext';
import Modal from '../components/Modal';

const MyList = ({ movie = [] }) => {

  const { pickedMovies, handleRemoveSelectedMovie, showModal, confirmRemoveMovie, cancelRemoveMovie} = useContext(MovieContext);

   
  return (
    <div className={classes.movieCard}>

      <h3>My List</h3>
      
      {pickedMovies.length === 0 ? (
        <p className={classes.noMovie}>No Movie Selected!</p>
      ) : (
        <ul className={classes.cardsCont}>
          {pickedMovies.map((eachMovie) => (
            <li key={eachMovie.id} >
              <div onClick={() => handleRemoveSelectedMovie(eachMovie.id)} className={classes.cards} style={{backgroundImage: `url(${eachMovie.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
              {eachMovie.recentlyAdded === true && <h5>Recently added</h5>}
              {eachMovie.netflixProduced === true && <div>
                  <img className={classes.logo} src={netflixlogo} />
                  </div>}
                  {eachMovie.topTen === true && <div>
                      <img className={classes.topTen} src={topTenlogo} /> </div>}
              </div>
            </li>
          ))}
        </ul>
      )}
      {showModal && (
        <Modal
          onConfirm={confirmRemoveMovie}
          onCancel={cancelRemoveMovie}
        />
      )}
    </div>
  )
}

export default MyList;





// import React from 'react';
// import classes from '../components/MovieCard.module.css';
// import netflixlogo from '../assets/images/netflixlogo.png';
// import topTenlogo from '../assets/images/netflixtopten.png';
// import { useContext } from 'react';
// import { MovieContext } from '../store/MovieContext';

// const MyList = ({ movie = [] }) => {

//   const { pickedMovies, handleRemoveSelectedMovie} = useContext(MovieContext);

   
//   return (
//     <div className={classes.movieCard}>

//       <h3>My List</h3>
      
//       {pickedMovies.length === 0 ? (
//         <p className={classes.noMovie}>No Movie Selected!</p>
//       ) : (
//         <ul className={classes.cardsCont}>
//           {pickedMovies.map((eachMovie) => (
//             <li key={eachMovie.id} >
//               <div onClick={() => handleRemoveSelectedMovie(eachMovie.id)} className={classes.cards} style={{backgroundImage: `url(${eachMovie.image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
//               {eachMovie.recentlyAdded === true && <h5>Recently added</h5>}
//               {eachMovie.netflixProduced === true && <div>
//                   <img className={classes.logo} src={netflixlogo} />
//                   </div>}
//                   {eachMovie.topTen === true && <div>
//                       <img className={classes.topTen} src={topTenlogo} /> </div>}
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default MyList;


