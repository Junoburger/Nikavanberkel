import React from 'react';
import { Card } from 'reactstrap';
import {items} from './projectObjects'
import './ProjectInfo.css'



export const gallery = items.map((project, i) => {
        return (
          <div key={i}>
           

            <div style={{marginLeft:'400px'}}>
              <Card style={{border:'none'}}>
              <div className="img__wrap" >
                <img  className="img" src ={project.src}  alt={project.altText} />
                <div className="img__description_layer">
                  <span className="img__description">{project.title}</span>
                  <span >{project.subTitle}</span>
                  <span >{project.description}</span>
                 </div>
                </div>
              </Card>
            
            </div>
              
            </div>
            
          );
    });

    
    