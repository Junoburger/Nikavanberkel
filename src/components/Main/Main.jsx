import React from 'react'
import './Main.css'
import Tree from 'react-d3-tree';
import {Welcome} from './Welcome'
import {MainData} from './MainData.js'
import { Route } from 'react-router-dom';

const containerStyles = {
    width: '100%',
    height: '50vh',
    fontSize: '21pt',
    display: ' flex'
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
     <Route exact path="/"  component={Welcome}></Route>  
        <div style={{display:'flex', justifyContent:'center'}}>
        <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={MainData} 
          translate={this.state.translate} 
          orientation={'horizontal'}
        />
      </div>
      </div>
        </div>
    )
      }
}
