import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Cards from './components/Cards';
import Footer from './components/Footer';
import vikings from "./vikings.json";
import './App.css';



class App extends Component {
  state = {
    vikings: vikings,
    score: 0,
    clicked: []
  };

  shuffle = () => {
    const newArr = this.state.vikings.sort(function () { return 0.5 - Math.random() });
    this.setState({
      vikings: newArr
    })
    return newArr
  }

  handleVikingClicked = (e) => {
    const vikingName = e.target.name
    const vikingId = e.target.id
    if (this.state.clicked.includes(vikingId)) {
      alert(`Sorry, you've already selected ${vikingName}\n\n`)
      this.setState({
        score: 0,
        clicked: [],
      })


    }
    else {
      const vikingArray = this.state.clicked
      vikingArray.push(vikingId)
      this.setState({
        score: this.state.score + 1,
        clicked: vikingArray
      })

      if (this.state.score === 12) {
        alert('You Won!');
        this.setState({
          score: 0,
          clicked: []
        })
      }


    }
    this.shuffle();
  }


  handleRenderVikings = () => {
    return this.state.vikings.map((viking) =>
      <Cards
        image={viking.image}
        name={viking.name}
        key={viking.id}
        id={viking.id}
        onClick={this.handleVikingClicked}
      />
    );
  }


  render() {
    return (
      <div className="App">
        <Navbar
          score={this.state.score}
        />
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
