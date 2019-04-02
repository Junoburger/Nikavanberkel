import React from 'react'
import './Main.css'
import { Sidenav } from '../UI/sideNav/SideNav';
 import { ProjectList } from './../UI/ProjectInfo/ProjectList/ProjectList';
 export default class Main extends React.PureComponent{

  
      render() {


      return(
        <div className="">
        <ProjectList/>
         {/* <Sidenav/> */}
        </div>
    )
      }
}
