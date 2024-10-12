import React from 'react'
import './App.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Testimonials from './components/Testimonials';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Testimonials />} />
  )
);

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;
