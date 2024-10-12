import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './App.css';
import React from 'react';
import HomePage from './pages/Home';
import NewsletterPage, {action as newsletterAction} from './pages/Newsletter';
import EventsPage, {loaderData} from './pages/Events';
import EditEventPage from './pages/EditEvent';
import EventDetailPage, { eventDetailLoader, deleteLoader } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import ErrorPage from './pages/Error';
import RootLayout from './layout/RootLayout';
import EventsLayout from './layout/EventsLayout';
import { action as dynamicEventAction } from './components/EventForm';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<HomePage />} />
        <Route path='/newsletter' element={<NewsletterPage />} action={newsletterAction} />
        <Route path='events' element={<EventsLayout />}>
          <Route index element={<EventsPage />} loader={loaderData} />
          <Route path=':eventId' loader={eventDetailLoader} id='event-detail'>
              <Route index element={<EventDetailPage />} action={deleteLoader}/>
              <Route path='edit' element={<EditEventPage />} action={dynamicEventAction} />
          </Route>
          <Route path='new' element={<NewEventPage />} action={dynamicEventAction} />
        </Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App;