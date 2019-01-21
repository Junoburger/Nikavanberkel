import React from 'react';
import {ProjectInfo} from '../UI/ProjectInfo/ProjectInfo'
import './Projects.css'

export const Projects = (props) => {

    return(
        <div className="">
         <div>
           <h1>Projects</h1>
         </div>
          <div className="flexWrap">
            <ProjectInfo></ProjectInfo>
         </div>
        </div>
    )
}








