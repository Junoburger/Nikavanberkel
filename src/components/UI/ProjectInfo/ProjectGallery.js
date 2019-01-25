import React from 'react';
import { Card, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import {projects} from './projectObjects'
import './ProjectInfo.css'



export const gallery = projects.map((project, i) => {
        return (
            <div key={i}>
              <Card style={{border:'none'}}>
              <div className="img__wrap" >
                <img  className="img" src ={project.src}  alt={project.altText} />
                <div className="img__description_layer">
                  <CardTitle className="img__description">{project.title}</CardTitle>
                  <CardSubtitle >{project.subTitle}</CardSubtitle>
                  <CardText >{project.description}</CardText>
                 </div>
                </div>
              </Card>
            </div>
          );
    });

    