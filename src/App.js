import React from 'react';
import Navbar from './Components/Navbar'
import {BrowserRouter as Router, Switch, Route} from'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Rooms_Suites from './Components/pages/Rooms-Suites';
import Facilities from './Components/pages/Facilities';
import Reservations from './Components/pages/Reservations';
import VirtualTour from './Components/pages/VirtualTour';
import Contact from './Components/pages/Contact';
import SignUp from './Components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component= {Home}/>
          <Route path='/about' component={About} />
          <Route path='/room-suites' component={Rooms_Suites} />
          <Route path='/facilities' component={Facilities} />
          <Route path='/reservations' component={Reservations} />
          <Route path='/virtualtour' component={VirtualTour} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
