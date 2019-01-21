import React from 'react'
import './Main.css'
import Typed from 'react-typed';



export const Main = () => {
    

    return(
        <div className="container border">
         <div>
             <h1>Welcome to</h1>
            
             <Typed className="Typed"
                    strings={['Nika van Berkel']} 
                    typeSpeed={70} 
                />
        </div>
        </div>
    )
}
