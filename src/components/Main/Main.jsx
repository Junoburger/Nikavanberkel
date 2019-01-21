import React from 'react'
import './Main.css'
import Typed from 'react-typed';
import Tree from 'react-d3-tree';


const containerStyles = {
    width: '100%',
    height: '50vh',
  }

  const debugData = [
    {
      name: "Main",
      children: [
        {
          name: "Bio",
        },
        {
          name: "Projects",
          attributes: {
            // keyA: 'val A',
            // keyB: 'val B',
            // keyC: 'val C',
          },
          _collapsed: true,
          children:[
            {
                name: '1: Project Name',
              },
              {
                name: '2: Project  Name',
              },
          ],
        },
        {
          name: "News",
        },
        {
            name: "Contact",
        },
      ],
    },
  ];
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

        <div className="container border">
         <div>
             <h1>Welcome to</h1>
            
             <Typed className="Typed"
                    strings={['Nika van Berkel']} 
                    typeSpeed={75} 
                />
                
        </div>
        
        </div>
        <div style={containerStyles} ref={tc => (this.treeContainer = tc)}>
        <Tree 
          data={debugData} 
          translate={this.state.translate} 
          orientation={'horizontal'}
        />
      </div>
        </div>
    )
      }
}
