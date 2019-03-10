import React from 'react'
import Typed from 'react-typed';


export const Welcome = () => {
return (
    <div className="container ">
    <div>            
        <Typed className="Typed"
               strings={['Nika']} 
               typeSpeed={75} 
           />
   </div>
   
   </div>
);
}
