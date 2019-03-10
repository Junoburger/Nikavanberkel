import React from 'react'
import './Main.css'
import { Sidenav } from '../UI/sideNav/SideNav';
 
  export default class Main extends React.PureComponent{

  
      render() {


      return(
        <div className="sideNavParent">
         <Sidenav></Sidenav>
        </div>
    )
      }
}
