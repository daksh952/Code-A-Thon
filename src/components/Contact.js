import React from 'react';
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
        <div className='c1'>
        <h1>Contact Us</h1>
        <div>
                <h2>Call us:180065009000</h2>
                <h2>Email:knowledgedot@gmail.com</h2>
                <h2><label>Send Your Query</label></h2>
                <textarea className='text' type='text'></textarea><br></br>
                <button className='btn2'>Send</button>
        </div>
        </div>
    </div>
    
  )
}
