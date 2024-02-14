import React, { useState, useEffect } from 'react';

const EventListContainer = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("file:///C:/Users/Learner_TZH3Z107/PerScholasWork/324-redux/event-right-app/src/model/database.js")
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