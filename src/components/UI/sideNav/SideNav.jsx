import React, { Component } from 'react'
import './SideNav.css'
import {items} from '../ProjectInfo/projectObjects'


export class Sidenav extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: false, items: items};
    this.showProjectOnClick = this.showProjectOnClick.bind(this);
  }

showProjectOnClick(event){
const checkActive = this.state.items.id === items.id
const activeProject = {...event, active: !checkActive}
  this.setState(state => ({
    isToggleOn: !state.isToggleOn,
    activeProject
  }));
}

  render() {
    const {items} = this.state
    return (
          <div className="sidenav">
         {items.map((project) => {
           return ( <div className="Box" key={project.id}>
              <p className={this.state.isToggleOn && this.state.activeProject.id === project.id ? 'P_Color' : null}
                 onClick={() => {this.showProjectOnClick(project)}}><b>Project name: </b>{project.title}</p>
                {
                this.state.isToggleOn && this.state.activeProject.id === project.id 
                ? 
              <div className="ProjectImageBox">
                <img className="ProjectImage" src={project.src} alt={project.altText}/> 
              </div>
                : ''
                }
            </div>)
            })}
         </div>
    )
  }
}
