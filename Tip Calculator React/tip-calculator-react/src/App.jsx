import React from 'react';
import './App.css';
import {Route,  createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Tipcalculator from './components/Tipcalculator';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Tipcalculator />}/>
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;