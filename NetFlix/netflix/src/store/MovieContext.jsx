import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext({
    pickedMovies: [],
    setPickedMovies: () => {},
    handleRemoveSelectedMovie: () => {},
    showModal: false,
    movieToRemove: null,
    setShowModal: () => {},
    setMovieToRemove: () => {},
});

export const MovieProvider = ({ children }) => {
    const [pickedMovies, setPickedMovies] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [movieToRemove, setMovieToRemove] = useState(null);

    useEffect(() => {
    const loadMovies = async () => {
        const response = await fetch('http://localhost:8000/movies');
        const data = await response.json();
        setPickedMovies(data.myList || []);
    };
        loadMovies();
    }, []);
    

    useEffect(() => {
        const updateMyList = async (selectedMovies) => {
            const response = await fetch('http://localhost:8000/movies');
            const data = await response.json();

            const updatedMoviesNewId = selectedMovies.map((movie, index) => ({
                ...movie,
                id: `picked${index}`
            }))
            data.myList = updatedMoviesNewId;

            await fetch('http://localhost:8000/movies', {
                method: "PUT",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(data)
            });
        };

        if (pickedMovies.length > 0){
            updateMyList(pickedMovies);
        }else{
            updateMyList([])
        }

    }, [pickedMovies]);

    const handleRemoveSelectedMovie = (id) => {
        setMovieToRemove(id); 
        setShowModal(true);   
    };


    const confirmRemoveMovie = async () => {
        setPickedMovies((prevPickedMovies) => {
            const updatedMovies = prevPickedMovies.filter((movie) => movie.id !== movieToRemove);
            setMovieToRemove(null);
            setShowModal(false);
            return updatedMovies;
        });
    };

    const cancelRemoveMovie = () => {
        setMovieToRemove(null); 
        setShowModal(false); 
    };

    const ctxValue = {
        pickedMovies,
        setPickedMovies,
        handleRemoveSelectedMovie,
        showModal,
        confirmRemoveMovie,
        cancelRemoveMovie,
      };

      return (
        <MovieContext.Provider value={ctxValue}> 
         {children} 
        </MovieContext.Provider>
      )
}
//   export default MovieContext;




// import { createContext, useEffect, useState } from "react";
// export const MovieContext = createContext({
//     pickedMovies: [],
//     setPickedMovies: () => {}
// });

// export const MovieProvider = ({ children }) => {
//     const [pickedMovies, setPickedMovies] = useState([]);

//     useEffect(() => {
//         const savedMovies = JSON.parse(localStorage.getItem('pickedMovies'));
//         if(savedMovies && savedMovies.length > 0){
//             setPickedMovies(savedMovies);
//         } 
//     }, []);

//     useEffect(() => {
//         if(pickedMovies.length > 0){
//             localStorage.setItem('pickedMovies', JSON.stringify(pickedMovies));
//         } else {
//             localStorage.removeItem('pickedMovies');
//         }
//     }, [pickedMovies]);

//     function handleRemoveSelectedMovie(id) {      
//         const proceed = window.confirm('Delete this movie?');
//         setPickedMovies((prevPickedMovies) => {
//             if(proceed){
//                 const updatedMovies = prevPickedMovies.filter((movie) => movie.id !== id);
//                 return updatedMovies;
//             } else {
//                 return prevPickedMovies;
//             } 
//         })
//     }

//     const ctxValue = {
//         pickedMovies,
//         setPickedMovies,
//         handleRemoveSelectedMovie
//       };

//       return (
//         <MovieContext.Provider value={ctxValue}> 
//          {children} 
//         </MovieContext.Provider>
//       )
// }

// //   export default MovieContext;

