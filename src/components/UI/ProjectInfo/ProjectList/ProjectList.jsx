import React from 'react';
import {Child} from './Child'
import { items } from "../projectObjects";
import './ProjectList.css'



export class ProjectList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      items: items,
      selectedItem: null
    };
  }
  
  renderList = () => {
    return this.state.items.map(i =>{
      return ( 
      <div key={i.id}>
            <p  onClick={() => this.selectImage(i)}><strong>{i.title}</strong>
            <br/>{i.description}</p>
    </div>
            )         
    })
  }

  selectImage(i){
    this.setState({selectedItem : i.src});
  }

  renderImage = () => {
    return this.state.selectedItem;
  }

  render() {
 
    return (
      <div className="container">
        <div className="item-list">
          {this.renderList()}
        </div>
        <div className="Imagebox">
        <img className="Image" src={this.state.selectedItem} alt={this.state.selectedItem}/>
        {/* {this.renderImage()} */}
        </div>
      </div>
    );
  }
}
