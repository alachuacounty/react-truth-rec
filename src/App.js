import React from 'react';
import Navigation from "./components/Navigation";
import Modal from "./components/Modal"
import Footer from "./components/Footer";
import MainPage from "./pages";

import EventsPage from "./pages/events";

//Import all needed Component for this tutorial
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  const navLinks=[
                  {title:'About', link: 'about.html'},
                  {title:'Explore History', link: 'resources.html'},
                  {title:'Reparations', link: 'reparations.html'},
                  {title:'Events', link: '/events'},
                  {title:'Contact', link: 'contact.aspx'}
                ];

  return (
    <div>
    <Navigation links={navLinks}></Navigation>
    <Modal links={navLinks}></Modal>
    <Router>
      <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/events" component={EventsPage} />
      </Switch>
    </Router>
    <Footer footertext="&copy; Alachua County Truth and Reconciliation"/>
    </div>
  );
}

export default App;
