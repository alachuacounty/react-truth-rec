import React from 'react';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import TestPage from './pages';




function App() {
  const navLinks=[{title:'About', link: 'about.html'},{title:'Explore History', link: 'resources.html'}];

  return (
    <div>
    <Navigation name="Awhshvini" links={navLinks}></Navigation>
    <Footer footertext="&copy; Alachua County Truth and Reconciliation"/>


    <Router>
       {/*All our Routes goes here!*/}
       <Route path="/" component={TestPage} />
      </Router>
    </div>
  );
}

export default App;
