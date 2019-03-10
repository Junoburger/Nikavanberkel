import React from 'react'
import './Main.css'
import {items} from '../UI/ProjectInfo/projectObjects'
import { Sidenav } from '../UI/sideNav/SideNav';
 
  export default class Main extends React.PureComponent{

  
      render() {


      return(
        <div>
         <Sidenav></Sidenav>
        </div>
    )
      }
}
