import React from 'react'
import './Main.css'
import Typed from 'react-typed';
import Tree from 'react-d3-tree';
import {MainData} from './MainData.js'

const containerStyles = {
    width: '100%',
    height: '50vh',
    fontSize: '21pt'
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

        <div className="container ">
         <div>            
             <Typed className="Typed"
                    strings={['Welcome']} 
                    typeSpeed={75} 
                />
                
        </div>
        
        </div>
        <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={MainData} 
          translate={this.state.translate} 
          orientation={'horizontal'}
        />
      </div>
        </div>
    )
      }
}
