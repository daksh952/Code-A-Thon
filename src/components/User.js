import React from 'react';
import './User.css';
import user from '../assets/user.png'

export default function User() {
  return (
    <div className='user'>
        <p><span className='user1'>Start today for getting</span><span className='user2'> Online Certification</span><br></br>
                You can be your own guiding star with our help!
                </p>
                <img className='imgs' src={user}></img>
                <br></br>
        <button className='btn'>Get started for free</button>        
    </div>
  )
}
