import React from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import ErrorPage from './pages/Error';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import Watching from './pages/Watching';
import Movies from './pages/Movies';
import MyList from './pages/MyList';
import Movie from './pages/Movie';
import InProgress from './pages/InProgress';
import FooterLayout from './layout/FooterLayout';
import { loader as MovieLoader } from './pages/Movies';


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Login/>}/>
        <Route path='home' element={<FooterLayout/>}>
          <Route index  element={<HomePage/>} loader={MovieLoader} />
          <Route path='movies'>
            <Route index element={<Movies/>} loader={MovieLoader} />
            <Route path='my-list' element={<MyList/>} loader={MovieLoader} />
            <Route path=':movieId' element={<Movie/>}/>
          </Route>
        </Route>
        <Route path='watching' element={<Watching/>}/>
        <Route path='authentication' element={<Login/>}/>
        <Route path='in-progress' element={<InProgress/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App;



// import React from 'react';
// import './App.css';
// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
// import RootLayout from './layout/RootLayout';
// import ErrorPage from './pages/Error';
// import Login from './pages/Login';
// import HomePage from './pages/HomePage';
// import Watching from './pages/Watching';
// import Movies from './pages/Movies';
// import MyList from './pages/MyList';
// import Movie from './pages/Movie';
// import { loader as MovieLoader } from './pages/Movies';

// const App = () => {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
//         <Route index element={<Login/>}/>
//         <Route path='home'>
//           <Route index  element={<HomePage/>} loader={MovieLoader} />
//           <Route path='movies'>
//             <Route index element={<Movies/>} loader={MovieLoader} />
//             <Route path='my-list' element={<MyList/>} loader={MovieLoader} />
//             <Route path=':movieId' element={<Movie/>}/>
//           </Route>
//         </Route>
//         <Route path='watching' element={<Watching/>}/>
//         <Route path='authentication' element={<Login/>}/>
//       </Route>
//     )
//   )
//   return (
//     <RouterProvider router={router}/>
//   )
// }

// export default App;