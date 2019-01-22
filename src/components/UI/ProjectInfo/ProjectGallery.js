import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import {projects} from './projectObjects'
import './ProjectInfo.css'



export const gallery = projects.map((project, i) => {
  let divStyle = {padding:'20px'};
        return (
            <div key={i}>
            <div style={divStyle}>
              <Card>
              <div className="img__wrap" >
                <img  className="img" src ={project.src}  alt={project.altText} />
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

    