import React from 'react'
import './Main.css'
import Tree from 'react-d3-tree';
import {MainData} from './MainData.js'
import {containerStyles} from './ContainerStyles'
import {svgSquare} from './SVGSquare'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import {items} from '../UI/ProjectInfo/projectObjects'
import {Sidenav} from '../UI/sideNav/SideNav'

 
  export default class Main extends React.PureComponent{
    constructor(props) {
      super(props);
      this.state = { activeIndex: 0 };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
  
    next() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }

    // state = {}
    // componentDidMount() {
    //     const dimensions = this.treeContainer.getBoundingClientRect();
    //     this.setState({
    //       translate: {
    //         x: dimensions.width / 2,
    //         y: dimensions.height / 2
    //       }
    //     });
    //   }

      render() {
        const { activeIndex } = this.state;
        const slides = items.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.src} alt={item.altText} />

              <CarouselCaption
             captionText={item.title}
             captionHeader={item.subTitle} />
            </CarouselItem>
          );
        });

      return(
        <div>
           <div style={{display:'flex', justifyContent:'center'}}>

        {/* <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={MainData} 
          translate={this.state.translate} 
          orientation={'horizontal'}
          pathFunc={'elbow'}
          nodeSvgShape={svgSquare}
          textLayout={{textAnchor: "start", x: 25, y: 0, transform: undefined }}
        />
      </div> */}
      
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators 
        items={items}
        activeIndex={activeIndex} 
        onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl
         direction="prev"
         directionText="Previous"
         onClickHandler={this.previous} className="prev" />

        <CarouselControl 
        direction="next"
         directionText="Next"
         onClickHandler={this.next} className="next"/>
        </Carousel>
          </div>
          <Sidenav/>
        </div>
    )
      }
}
