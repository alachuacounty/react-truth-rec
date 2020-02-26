import React from 'react';
import Navigation from "./components/Navigation";
import Modal from "./components/Modal"
import Footer from "./components/Footer";
import MainPage from "./pages";
import EventsPage from "./pages/events";
import ContactPage from "./pages/contact";


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
                  {title:'Contact', link: '/contact'},
                  {title:'Resources', link: 'resources.html'},
                  {title:'Timeline', link: 'timeline.html'},
                  {title:'Map', link: 'map.html'}
                ];

  return (
    <div class="grid-container">
    <Navigation links={navLinks}></Navigation>
    <Modal links={navLinks}></Modal>
    <Router>
      <Switch>
      <Route exact path="/"  render={(props) => <MainPage {...props} links={navLinks} />}/>
      <Route exact path="/events" component={EventsPage} />
      <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </Router>
    <Footer footertext="&copy; Alachua County Truth and Reconciliation"/>
    </div>
  );
}

export default App;
