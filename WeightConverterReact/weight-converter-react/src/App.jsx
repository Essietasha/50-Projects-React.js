import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import './App.css'
import Converter from './components/Converter';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Converter />} />
  )
);


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;