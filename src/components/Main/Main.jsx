import React from 'react'
import './Main.css'
import Tree from 'react-d3-tree';
import {MainData} from './MainData.js'
import {containerStyles} from './ContainerStyles'
import {svgSquare} from './SVGSquare'
 
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
          textLayout={{textAnchor: "start", x: 25, y: 0, transform: undefined }}
        />
      </div>
      </div>
        </div>
    )
      }
}
