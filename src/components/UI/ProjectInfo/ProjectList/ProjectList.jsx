import React from 'react';
import { items } from "../projectObjects";
import './ProjectList.css'



export class ProjectList extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      items: items,
      selectedItem: null,
    };
  }
  
  renderList = () => {
    return this.state.items.map(i =>{
      return ( 
      <div key={i.id}>
            <p  onClick={() => this.selectImage(i)}><strong>{i.title}</strong></p>
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
        {
         this.state.selectedItem != null  &&
         this.state.selectedItem.src.map(image => {
      return (
         <div key={image} className="ImageBox">
      <img src={image} alt="" className="Image" />
        {/* <p>{this.state.selectedItem.description }</p> */}
        </div>
      )
   })
   
       
        }
        </div>  
      </div>
    );
  }
}
