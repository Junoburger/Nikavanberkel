import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import {projects} from './projectObjects'
import './ProjectInfo.css'


let divStyle = {
    padding:'20px'
  };
    

   export const gallery = projects.map((project) => {
        return (
  
            <div>
            <div style={divStyle} >
              <Card>
              <div className="img__wrap">
                <CardImg  top width="100%" src ={project.src}  alt={project.altText} />
                <CardBody>
                <div className="img__description_layer">
                  <CardTitle className="img__description">{project.title}</CardTitle>
                </div>
                  <CardSubtitle >{project.subTitle}</CardSubtitle>
                  <CardText >{project.description}</CardText>
                </CardBody>
                </div>
              </Card>
             </div>
            </div>
          );
      
    });

    