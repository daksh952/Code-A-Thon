import React from 'react';
import './Nav.css';
import logo1 from '../assets/logo1.png';
import First from './First';
import Second from './Second';
import dream from '../assets/dream.png';
import User from './User';
import About from './About';
import Contact from './Contact';
// import Course from './Course';

export default function Navbar() {
  return (
 <>
    <div className='fxd'>
        <ul className='nav2'>
          <li className='nav1'>
            <img className='logo1' src={dream} alt='Error'></img>
            </li>
            <li className='nav1' ><a href="">Contact</a></li>
            <li className='nav1' ><a href="">Login</a></li>
            <li className='nav1'><a href="">About</a></li>
            <li className='nav1'><a href="">Courses</a></li>
            <li className='nav1' ><a href="">Home</a></li>
            <img className='logo' src={logo1} alt='Error'></img>

        </ul>
      </div>
      <First></First>
      <User></User>
      <Second></Second>
      <About></About>
      <Contact></Contact>
      {/* <Course></Course> */}
      </>
      
      
  )
}
