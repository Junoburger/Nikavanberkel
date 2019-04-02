import React from 'react'
import {items} from '../UI/ProjectInfo/projectObjects'


export const Carousel = items.map (item => {
    <div className="carousel-item active">
        <img className="d-block w-100" src="item.src" alt="item.altText" />
    </div>
  });  