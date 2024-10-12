import React from 'react';
import EventsList from '../components/EventsList';
import { useLoaderData, json } from 'react-router-dom';

const EventsPage = () => {
  const events = useLoaderData();

  return (
     <EventsList events={events} />
  )
}

export default EventsPage;

export async function loaderData(){
  const response = await fetch('http://localhost:8000/events');
  if (!response.ok) {
    // throw new Response(JSON.stringify({message: 'Could not fetch events'}), {status: 500});
    return json(
      {message: 'Could not fetch events'},
      {status: 500}
    );
  } else {
    const resData = await response.json();
    return resData;
  }
};