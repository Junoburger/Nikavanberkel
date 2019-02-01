import React from 'react';
import { Card } from 'reactstrap';
import {items} from './projectObjects'
import './ProjectInfo.css'



export const gallery = items.map((project, i) => {
        return (
          <div>
              <div style={{width:'620px', minHeight:'200px' ,background:'transparent', float:'right'}}></div>

            <div key={i} style={{float:'left'}}>
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
              <div style={{width:'620px', minHeight:'200px' ,background:'transparent', float:'right'}}></div>
            </div>
            
          );
    });

    