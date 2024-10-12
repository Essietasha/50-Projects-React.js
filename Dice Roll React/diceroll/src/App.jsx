import React from 'react'
import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dice from './components/Dice';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<Dice />} />
  )
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App;