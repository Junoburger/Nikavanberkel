import React from 'react'
import './Carousel.css'


// Component for left arrow
class CarouselLeftArrow extends React.Component {
    render() {
      return (
        <a
          href="#"
          className="carousel__arrow carousel__arrow--left"
          onClick={this.props.onClick}
        >
          <span className="fa fa-2x fa-angle-left" />
        </a>
      );
    }
  }
