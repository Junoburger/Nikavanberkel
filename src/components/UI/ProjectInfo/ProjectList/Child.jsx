import React from 'react'
import { items } from "../projectObjects";

 export class Child  extends React.Component {
  constructor () {
    super()
    this.state = {
      items: items 
    }
  }
  render(){

    return(
    <div className='Child'>
        {
          items.map(project => {
            return(
              <div key={project.id}>
              <img style={{width:'200px'}} alt={project.altText} src={project.src}/>
              </div>
            )
          })
        }
      </div>
    )
      }
}
