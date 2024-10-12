import React from 'react';
import EventForm from '../components/EventForm';

const NewEventPage = () => {
  return (
    <EventForm method="post" />
  )
}

export default NewEventPage;

// export async function action({ request }) {
//   const data = await request.formData();
//   const eventData = {
//     title: data.get('title'),
//     image: data.get('image'),
//     place: data.get('place'),
//     date: data.get('date'),
//     description: data.get('description')
//   }

//   const response = await fetch('http://localhost:8000/events', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(eventData)
    
//   });

//   if (!response.ok){
//     throw json({
//       message: 'Could not save events...',
//       status: 500
//     });
//   }

//   return redirect('/events');

// }