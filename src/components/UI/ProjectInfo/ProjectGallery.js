import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {projects} from './projectObjects'



let divStyle = {
    padding:'20px'
  };
    
const showInfo = () =>{
console.log("determine action")
}


   export const gallery = projects.map((project) => {
        return (
  
            <div>
            <div style={divStyle}>
              <Card>
                <CardImg top width="100%" src ={project.src}  alt={project.altText} />
                <CardBody>
                  <CardTitle>{project.title}</CardTitle>
                  <CardSubtitle>{project.subTitle}</CardSubtitle>
                  <CardText>{project.description}</CardText>
                  <Button onClick={showInfo}>Button</Button>
                </CardBody>
              </Card>
            </div>
         
            </div>
          );
      
    });

    