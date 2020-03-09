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
import TimelinePage from "./pages/timeline";
import MediaPage from "./pages/media";
import LinksPage from "./pages/links";




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
                  {title:'About', link: '/about'}, //0
                  {title:'Explore History', link: '/resources'}, //1
                  {title:'Reparations', link: 'reparations.html'}, //2
                  {title:'Events', link: '/events'},//3
                  {title:'Contact', link: '/contact'},//4
                  {title:'Resources', link: '/resources'},//5
                  {title:'Landmarks', link: '/landmarks'},//6
                  {title:'Timeline', link: '/timeline'},//7
                  {title:'Map', link: 'map.html'},//8
                  {title:'Media', link:'/media'},//9
                  {title:'Documents', link:'/documents'},//10
                  {title:'Landmarks', link:'/landmarks'},//11
                  {title:'Links', link:'/links'},//12
                  {title:'Media Gallery', link:'/media'}//13
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
      <Route exact path="/about" component={AboutPage} /><Route exact path="/landmarks" component={LandmarksPage} />
      <Route exact path="/resources" render={(props) => <ResourcesPage {...props} links={navLinks} />} />
      <Route exact path="/media" component={MediaPage} />
      <Route exact path="/landmarks" component={LandmarksPage} />
      <Route exact path="/timeline" component={TimelinePage} />
      <Route exact path="/links" component={LinksPage} />
      </Switch>
    </Router>
    <Footer footertext="&copy; Alachua County Truth and Reconciliation"/>
    </div>
  );
}

export default App;