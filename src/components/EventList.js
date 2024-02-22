import React, { useState, useEffect } from 'react';

const EventListContainer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://api.seatgeek.com/2/events?client_id=NDAwMTIwODh8MTcwODYyMTE0NC41MTcwOTQ5")
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  return (
    <div className="event-list-container">
      <h2>Events</h2>
      {events.map(event => (
        <EventContainer key={event.id} event={event} />
      ))}
    </div>
  );
};

const EventContainer = ({ event }) => {
  return (
    <div className="event-container">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventListContainer;
