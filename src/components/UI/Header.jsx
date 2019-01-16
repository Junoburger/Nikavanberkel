import React, {Component} from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Header extends Component{
render(){
    return(
        <header>
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">Nika van Berkel</h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-dark" href="/projects">Projects</a>
        <a className="p-2 text-dark" href="/bio">Bio</a>
        <a className="p-2 text-dark" href="/news">News</a>
        <a className="p-2 text-dark" href="/contact">Contact</a>
      </nav>
    </div>
      </header>
    )
}

}

