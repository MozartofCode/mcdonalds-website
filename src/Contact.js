import "./Contact.css"
import React from 'react';
import { Outlet } from "react-router-dom";
import logo from "./contact-logo.jfif"
import logo2 from "./contact-logo-2.jfif"

function Contact() {
  return (

    <div className="Contact">
      
      <header className = "Title">

        <p>Contact Us</p>

        </header>

        <body  className= "Body">

            <p>Whether you are looking for nutrition information,
            employment details or Ronald McDonalds email address,
            our team is happy to help you find answers.</p>

            <img src={logo} className="Contact-logo" alt="logo" />

            <img src={logo2} className="Contact-logo-2" alt="logo" />

          </body>   
            
            <body className= "Body-2">

            <a
                className="faq-link"
                href="https://www.mcdonalds.com/us/en-us/faq.html"
                target="_blank"
                rel="noopener noreferrer"
            >
            GO TO FAQs
            </a>


            <a
                className="feedback-link"
                href="https://www.mcdonalds.com/us/en-us/contact-us/mobile-app-questions.html"
                target="_blank"
                rel="noopener noreferrer"
            >

            GIVE MOBILE APP FEEDBACK
            
            </a>

          </body>

          <body className = "Body-3">

          <a
                className="Home-link"
                href="/"
                target="_self"
                rel="noopener noreferrer"
            >
            GO BACK HOME
            </a>


            <Outlet/>
          </body>
    </div>
  );
}

export default Contact;
