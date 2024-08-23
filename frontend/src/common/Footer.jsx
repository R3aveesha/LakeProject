import React from 'react'
import LogoLake from '../assets/LogoLake.png'
import '../pages/Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <img src={LogoLake} className='Logo'></img>
       <div className='contacts-container'>
       <h3>Contact Us</h3>
        <p>Gampaha, Sri Lanka</p>
        <p>Telephone: +9478-5347037</p>
        <p>Telephone: +9471-0768601</p>
        <p>Email: lakeview01@gmail.com</p>
       </div>
       <div className='about-us-container'>
        <h3>About us</h3>
       <p>
          Introduce the management system of the play zone for Lakeview Gaming Zone, 
           which is a single platform for managing game bookings, food orders, and event 
            management to provide an integrated experience to the visitor.
         </p>
       </div>
    </div>
  )
}

export default Footer