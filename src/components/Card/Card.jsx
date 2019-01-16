import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

  const image = require('../../assets/images/detail.jpg')

export const Example = (props) => {
  let divStyle = {
    padding:'20px'
  };

  return (
    <div style={divStyle}>
      <Card>
        <CardImg top width="100%" src ={image}  alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;
