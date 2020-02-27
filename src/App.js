import React from 'react';
import Navigation from "./components/Navigation";
import Modal from "./components/Modal"
import Footer from "./components/Footer";
import MainPage from "./pages";
import AboutPage from "./pages/about";
import EventsPage from "./pages/events";
import ContactPage from "./pages/contact";
import ResourcesPage from "./pages/resources";
import LandmarksPage from "./pages/landmarks";




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
                  {title:'About', link: '/about'},
                  {title:'Explore History', link: '/resources'},
                  {title:'Reparations', link: 'reparations.html'},
                  {title:'Events', link: '/events'},
                  {title:'Contact', link: '/contact'},
                  {title:'Resources', link: '/resources'},
                  {title:'Landmarks', link: '/landmarks'},
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
      <Route exact path="/about" component={AboutPage} />
      
      <Route exact path="/resources" component={ResourcesPage} />
      <Route exact path="/landmarks" component={LandmarksPage} />
      </Switch>
    </Router>
    <Footer footertext="&copy; Alachua County Truth and Reconciliation"/>
    </div>
  );
}

export default App;