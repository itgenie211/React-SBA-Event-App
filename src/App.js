import React from 'react';
import Header from './components/Header';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import EventListContainer from './components/EventList';
import './App.css';
import './Header.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27DXAkRCBn4vMUoromWW6pMLCp2YrdHd-CfSZbub4x7DhA6Qe3XcgH7rtEys-Vz3Ltqs&usqp=CAU" className="App-logo" alt="Getting Ready for a Good Time"></img>
      <Categories />
      <EventList />
      <Footer />

    </div>
  )
  };
      


export default App;


