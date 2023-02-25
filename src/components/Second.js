import React from 'react';
import program from '../assets/program.png'
import './Course.css';
import aptitude from '../assets/aptitude.png';
import Interview from '../assets/Interview.png';
import Fashion from '../assets/Fashion.png'

export default function second() {
  return (
    
    <div className='hlo'>
      <h1 className='head'>Catogories Of Courses Offered By Us</h1>
      <ul>
        <img className='pp' src={program}></img>
        <img className='pp1' src={aptitude}></img>
        <img className='pp1' src={Interview}></img>
        <img className='pp1' src={Fashion}></img>
      </ul>
    </div>
  )
}
