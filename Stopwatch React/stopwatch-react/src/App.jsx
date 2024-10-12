import React from 'react';
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Stopwatch from './components/Stopwatch';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Stopwatch />} />
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;