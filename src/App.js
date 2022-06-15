import logo from './logo.jpg';
import './App.css';
import React from 'react';
import { Outlet } from "react-router-dom";


function App() {
  return (

    <div className="App">
      
      <header className = "App-header">

          
      <a
          className="Contact-link"
          href="/Contact"
          target="_self"
          rel="noopener noreferrer"
        >
          Contact
        </a>

        <a
          className="History-link"
          href="https://www.mcdonalds.com/us/en-us/about-us/our-history.html"
          target="_self"
          rel="noopener noreferrer"
        >
          Our History
        </a>

        
      <a
          className="Mission-link"
          href="https://www.mcdonalds.com/us/en-us/about-us/leadership-team.html"
          target="_self"
          rel="noopener noreferrer"
        >
          Company Mission
        </a>

      </header>
      
      <body className="App-body">        
        
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Click Below to see our Menu
        </p>

        <a
          className="App-link"
          href="https://www.mcdonalds.com/us/en-us/full-menu.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          MENU
        </a>
        


        <Outlet />
      </body>
    </div>
  );
}

export default App;
