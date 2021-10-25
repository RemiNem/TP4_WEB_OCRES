import logo from './logo.svg';
import './App.css';
import React from 'react';
import Profile from './Profile';

export default class Details extends React.Component{
    constructor(props){
      super(props);
      
      switch(this.props.profileno){
        case 1:
            this.state = {fname : "Jeanne", birth : "01/01",img : "empty"};
            break;
        case 2:
            this.state = {fname : "Martine", birth : "01/01",img : "empty"};
            break;
        case 3:
            this.state = {fname : "Claude", birth : "01/01",img : "empty"};
            break;
        default :
        this.state = {fname : "test", birth : "01/01",img : "empty"};
            break;
    }
    }


    

    render(){
        
        return(
            <div className = "container">
                <header>{this.state.fname}</header>

                <body>
                    <p className = "fname">{this.state.fname}</p>
                    <p className = "fname">{this.state.birth}</p>
                </body>

                <footer>
                    <button className = "changestyle" onClick={() => this.handleClick()}>Change Style</button>
                </footer>

                <div>you clicked profile no : {this.props.profileno}</div>


            </div>


        );
    }
};


function profileswitch(id){
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
    return null;
};