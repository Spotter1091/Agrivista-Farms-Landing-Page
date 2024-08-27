import React from 'react'
import { Navbar } from './Components/Header/Navbar'
import { Home } from './Components/Pages/Home';


export const App = () => {
  return (
    <div className="App">
      <Navbar /> <Home />
    </div>
  );
}

