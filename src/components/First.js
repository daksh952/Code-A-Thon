import React from 'react';
import './Home.css';
// import homebg from '../assets/homebg.jpg'


export default function First() {
  return (
    <div className='main'>
        <div className='grey'>
        <pre className="home">A GOOD EDUCATION<br></br><span className='red'>IS A FOUNDATION</span><br></br><span className='blue'>FOR BETTER FUTURE</span></pre>
        </div>
        <div className='help'>
            <label className='red1'>Need help to achieve your dream?</label><br></br><br></br>
            <label className='red2'>Achieve Your Dreams Now</label><br></br><br></br>
            <label className='red3' >Name</label><br></br>
            <input className='red4' type="text"/><br></br>
            <label className='red3'>Email</label><br></br>
            <input className='red4'  type="text" /><br></br>
            <label className='red5'>Phone Number</label><br></br>
            <input className='red4' type="text" /><br></br>
            <button className='red6' type="button">Call Now</button>


        </div>
      
    </div>
  )
}
