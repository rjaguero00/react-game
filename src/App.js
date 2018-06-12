import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from './components/Cards';
import Footer from './components/Footer';
import vikings from "./vikings.json";
import './App.css';



class App extends Component {
  state = {
    vikings: vikings
  }

  shuffle = () => {
    const newArr = this.state.vikings.sort(function () { return 0.5 - Math.random() });
    this.setState({
      vikings: newArr
    })
    return newArr
  }


  handleRenderVikings = () => {
    return this.state.vikings.map((viking) =>
      <Cards
        image={viking.image}
        name={viking.name}
        key={viking.id}
        onClick={this.shuffle}
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
        <Footer />


      </div>
    );
  }
}

export default App;
