import React from 'react';
import Navigation from "./components/Navigation";

function App() {
  const navLinks=[{title:'About', link: 'about.html'},{title:'Explore History', link: 'resources.html'}];

  return (
    <div>
    <Navigation name="Awhshvini" links={navLinks}></Navigation>
  
    </div>
  );
}

export default App;
