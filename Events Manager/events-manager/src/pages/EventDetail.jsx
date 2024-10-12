import React from 'react';
import EventItem from '../components/EventItem';
import { useRouteLoaderData, redirect, json, useParams } from 'react-router-dom';

const EventDetailPage = () => {
  
  const eventItem = useRouteLoaderData('event-detail');
  
  return (    
    <EventItem event={eventItem}/>
  )
};

export default EventDetailPage;

export async function eventDetailLoader({params}){
  const id = params.eventId;
  
  const response = await fetch(`http://localhost:8000/events/${id}`);
  if(!response.ok){
    return json({message: 'Could not find item data'}, {status: 500})
  }else{
    const resData = await response.json();
    return resData;
  }
}

export async function deleteLoader ({params, request}){
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8000/events/${eventId}`, {
    method: 'DELETE'
    // method: request.method
  });

  if (!response.ok){
    throw json({
      message: 'Could not save events...',
      status: 500
    });
  }

  return redirect('/events');
}