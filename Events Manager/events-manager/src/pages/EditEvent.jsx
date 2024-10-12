import React from 'react';
import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';

const EditEventPage = () => {

  const event = useRouteLoaderData('event-detail');
  return (
    <>
      <p>Edit Event</p>
      <EventForm method="patch" event={event}/>
    </>
  )
}

export default EditEventPage;