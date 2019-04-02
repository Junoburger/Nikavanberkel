import React from 'react'
import './Child.css'
import image from "./../../assets/images/ALB_view 1.jpg"

 const Child = (props) => {
    return(
    <div className='Child'>
          <p>HELLO</p>
          <img className="image" alt="123" src={image}/>
      </div>
    )
}

export default Child