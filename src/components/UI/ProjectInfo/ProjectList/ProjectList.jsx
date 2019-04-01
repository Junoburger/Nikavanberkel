import React from 'react';
import {Child} from './Child'
import { items } from "../projectObjects";
import './ProjectList.css'



export class ProjectList extends React.PureComponent {
    
      constructor () {
        super()
        this.state = {
          isHidden: true,
          items: items 
        }
      }
    toggleHidden () {
      this.setState({
        isHidden: !this.state.isHidden
      })
    }
    render () {
 const { items }  = this.state
      return (
        <div className="sidenav">
        <div> 
            <div className="ProjectList">
            {
              items.map(project => {
                return (
                  <div key={project.id}>
                    <button className="ProjectName" onClick={this.toggleHidden.bind(this)} >
                        {project.title}
                    </button>
                    </div>
                )
              })
            }

          {!this.state.isHidden && <div><Child/></div>}
        </div>
       </div>

       </div>

      )
    }
  }
