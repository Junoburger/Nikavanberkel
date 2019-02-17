import React, { Component } from 'react'
import './SideNav.css'

export class Sidenav extends Component {
  render() {
    return (
      <div>
        <div className="sidenav">
  <a href="#about">Projectname1</a>
  <a href="#services">ProjectName2</a>
  <a href="#clients">ProjectName3</a>
  <a href="#contact">ExampleProject</a>
</div>
      </div>
    )
  }
}

export default Sidenav
