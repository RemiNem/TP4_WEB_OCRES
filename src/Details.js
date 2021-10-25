import logo from './logo.svg';
import './App.css';
import React from 'react';

export default class Details extends React.Component{
    constructor(props){
      super(props);
      this.state = {fname : "Default", birth : "01/01",img : "empty"};
    }
  


handleClick() {


}

    render() {
        return(
            <div className = "container">
                <header>{this.state.fname}</header>

                <body>
                    <p className = "fname">{this.state.fname}</p>
                    <p className = "fname">{this.state.birth}</p>
                </body>

                <footer>
                    <button className = "changestyle" value = "Change Style" onClick={() => this.handleClick()}></button>
                </footer>
            </div>


        );
    }
}
