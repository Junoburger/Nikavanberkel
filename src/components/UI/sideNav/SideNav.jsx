import React, { Component } from 'react'
import './SideNav.css'

export class Sidenav extends Component {
  render() {
    return (
      <div>
        <div class="sidenav">
  <a href="#about">About</a>
  <a href="#services">Services</a>
  <a href="#clients">Clients</a>
  <a href="#contact">Contact</a>
</div>
      </div>
    )
  }
}

export default Sidenav
