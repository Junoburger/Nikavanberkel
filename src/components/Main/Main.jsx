import React from 'react'
import './Main.css'
import Tree from 'react-d3-tree';
import {MainData} from './MainData.js'


const containerStyles = {
    width: '100%',
    height: '50vh',
    fontSize: '21pt',
    display: ' flex'
  }
  const svgSquare = {
    shape: 'rect',
    shapeProps: {
      width: 20,
      height: 20,
      x: -0,
      y: -10,
    }
  }


 
  export default class Main extends React.PureComponent{

    state = {}
    componentDidMount() {
        const dimensions = this.treeContainer.getBoundingClientRect();
        this.setState({
          translate: {
            x: dimensions.width / 2,
            y: dimensions.height / 2
          }
        });
      }

      render() {
      return(
        <div>
    
        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={MainData} 
          translate={this.state.translate} 
          orientation={'horizontal'}
          pathFunc={'elbow'}
          nodeSvgShape={svgSquare}
          textLayout={{textAnchor: "start", x: 25, y: -10, transform: undefined }}
        />
      </div>
      </div>
        </div>
    )
      }
}
