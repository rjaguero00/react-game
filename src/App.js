import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import vikings from "./vikings.json";
import './App.css';
import Cards from './components/Cards';


class App extends Component {
  state = {
    vikings: vikings
  }


  handleRenderVikings = () => {
    return this.state.vikings.map((viking) =>
      <Cards
        image={viking.image}
        name={viking.name}
        key={viking.id}
      // onClick={this.handleShuffleChararcters}
      />
    );
  }


  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />

        <div className="content">
          {this.handleRenderVikings()}
        </div>


      </div>
    );
  }
}

export default App;
