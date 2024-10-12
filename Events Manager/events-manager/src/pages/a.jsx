import './App.css';
import React from 'react';
import HomePage from './pages/Home';
import EventsPage, {loaderData} from './pages/Events';
import EditEventPage from './pages/EditEvent';
import EventDetailPage, { itemLoader } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import ErrorPage from './pages/Error';
import RootLayout from './layout/RootLayout';
import EventsLayout from './layout/EventsLayout'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path='/events' element={<EventsLayout />}>
          <Route index element={<EventsPage />} loader={loaderData} />
          <Route path='/events/:eventId' element={<EventDetailPage />} loader={itemLoader}/>
          <Route path='/events/new' element={<NewEventPage />} />
          <Route path='/events/:eventId/edit' element={<EditEventPage />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;

import './App.css';
import React from 'react';
import HomePage from './pages/Home';
import EventsPage, {loaderData} from './pages/Events';
import EditEventPage from './pages/EditEvent';
import EventDetailPage, { itemLoader } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import ErrorPage from './pages/Error';
import RootLayout from './layout/RootLayout';
import EventsLayout from './layout/EventsLayout'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path='events' element={<EventsLayout />}>
          <Route index element={<EventsPage />} loader={loaderData} />
          <Route path=':eventId' loader={itemLoader} >
              <Route index element={<EventDetailPage />} />
              <Route path='edit' element={<EditEventPage />} />
          </Route>
          <Route path='new' element={<NewEventPage />} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;