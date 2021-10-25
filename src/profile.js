import logo from './logo.svg';
import './App.css';
import React from 'react';
import Details from './Details.js';

export default class profile extends React.Component{
    constructor(props){
      super(props);
      this.state = { 
        
      };
    }

    profileswitch(id){
      switch(id){
          case 1:
              this.setState({fname : "Jeanne"});
              this.setState({birth : "06/01"});
              this.setState({img : "empty"});
              break;
          case 2:
              this.setState({fname : "Martine"});
              this.setState({birth : "06/01"});
              this.setState({img : "empty"});
              break;
          case 3:
              this.setState({fname : "Claude"});
              this.setState({birth : "06/01"});
              this.setState({img : "empty"});
              break;
          default :
              this.setState({fname : "Default"});
              this.setState({birth : "01/01"});
              this.setState({img : "empty"});
              break;
      }
  }

    handleClick(id){

      this.profileswitch(id)

    }

    render() {
        return(
        
      <p>
            <button onClick={() => { this.handleClick('1'); } }>Jeanne</button>
            <button onClick={() => { this.handleClick('2'); } }>Martine</button>
            <button onClick={() => { this.handleClick('3'); } }>Claude</button>
          </p><Details value=this.props />


        );
    }
}

