import './App.css';
import Profile from './Profile.js';
import Details from './Details.js';
import React from 'react';
import react from 'react';

function App() {


  return (
    <div className="App">
      <header className="App-header">

        <Profile/>

      </header>

      <body>
        <div className = "container">
        <Details/> 



        </div>
      </body>
    </div>
  );
}

/*class button extends react.Component{
  return (
    <Profile
      value={this.props.value}
      onClick={() => this.props.onClick(i)}
    />
  );
}*/


export default App;
