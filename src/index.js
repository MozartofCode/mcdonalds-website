import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from "./Contact"
import Mission from "./Mission"

import { 
  BrowserRouter,
  Routes,
  Route, 
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <BrowserRouter>
  <Routes>
  <Route path= "/" element={<App />} />
  <Route path= "Contact" element={<Contact />} />
  <Route path= "Mission" element={<Mission />} />
  <Route
    path="*"
    element={
      <main style={{ padding: "1rem" }}>
        <p>There's nothing here!</p>
      </main>
    }
  />
  </Routes>
</BrowserRouter>

);

