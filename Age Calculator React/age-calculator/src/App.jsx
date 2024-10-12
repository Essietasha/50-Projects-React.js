import React from 'react'
import {Route,  createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './App.css'
import AgeCalculator from './components/AgeCalculator';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<AgeCalculator />} />
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
