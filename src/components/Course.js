import React from 'react';
import './Service.css';
import c from '../assets/c.jpeg'

export default function Course() {
  return (
    <div className='cour'>
      {/* <ul className='crs'> */}
    <div className='box1'>
      
       
      <div className='model1'>
       <div className='model'>
        
        <img className='img1' src={c}></img>
        <h2 className='blue'>C++ Language<br></br>C++ is a high-level general-purpose programming language<br></br><br></br><b>Rs499</b><br></br><br></br>
        <button className='btn1'>Enroll Now</button>
        </h2>
        </div>
        
       </div>
       

       <div className='model2'>
       <div className='model3'>
        
        <img className='img1' src={c}></img>
        <h2 className='blue'>C++ Language<br></br>C++ is a high-level general-purpose programming language<br></br><br></br><b>Rs499</b><br></br><br></br>
        <button className='btn1'>Enroll Now</button>
        </h2>
        </div>
        
       </div>
     
      
     
     
    </div>
    
    </div>
    
  )
}
