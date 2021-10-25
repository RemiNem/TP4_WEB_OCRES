import logo from './logo.svg';
import './App.css';
import React from 'react';
import Details from './Details.js';

export default class profile extends React.Component{
    constructor(props){
      super(props);
      this.state = { profileno : "1"
        
      };
    }

    

    handleClick(id){
      this.setState({profileno : id});
    }

    RenderDetails(){
      return (
        <div>
          <Details profileno = {this.state.profileno} />

        </div>
      );
    }

    render(){
        return(
          <div className = "container2">

          <p>
            <button onClick={() => { this.handleClick(1); } }>Jeanne</button>
            <button onClick={() => { this.handleClick(2); } }>Martine</button>
            <button onClick={() => { this.handleClick(3); } }>Claude</button>

            <div>you clicked profile no : {this.state.profileno}</div>
            
          </p>
          
          {this.RenderDetails}

          </div>
        
          


        );
    }
}

