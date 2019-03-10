import React from 'react';
import './Carousel.scss'

  // Component for carousel indicator
  class CarouselIndicator extends React.Component {
    render() {
      return (
        <li>
          <a
            className={
              this.props.index == this.props.activeIndex
                ? "carousel__indicator carousel__indicator--active"
                : "carousel__indicator"
            }
            onClick={this.props.onClick}
          />
        </li>
      );
    }
  }
