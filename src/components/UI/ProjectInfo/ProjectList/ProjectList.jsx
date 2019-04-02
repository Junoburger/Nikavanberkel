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
    this.setState({selectedItem : i});
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
        
        {this.state.selectedItem != null && 
        <img className="Image" src={this.state.selectedItem.src} alt={this.state.selectedItem}/>
        }
        
        </div>
      </div>
    );
  }
}
