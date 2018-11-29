import React, { Component } from 'react';
import pizza from './pizzaData.js'; //information of pizza
import SinglePizza from './SinglePizza';

class App extends Component {
  constructor () {
    super()
    this.state = {
      pizzaArray: pizza
    }
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
          <h1>Welcome to Cindy's Pizzeira</h1>
      </header>
        <h2>Here is our Menu:</h2>
        <ul>
          {this.state.pizzaArray.map(eachPizza => <SinglePizza pizza={eachPizza}/>)}
        </ul>
      </div>
    );
  }
}

export default App;
