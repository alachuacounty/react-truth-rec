import React from 'react';
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
function App() {
  const navLinks=[{title:'About', link: 'about.html'},{title:'Explore History', link: 'resources.html'}];

  return (
    <div>
    <Navigation name="Awhshvini" links={navLinks}></Navigation>
    <Footer footertext="&copy Alachua County Truth and Reconciliation"/>
    </div>
  );
}

export default App;
