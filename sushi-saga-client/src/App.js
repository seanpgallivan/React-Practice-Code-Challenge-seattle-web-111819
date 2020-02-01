import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

const API = "http://localhost:3000/sushis"

export default class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    wallet: 200
  }

  componentDidMount() {
    fetch(API)
      .then(r=>r.json())
      .then(sushis => this.setState({sushis: sushis}))
  }

  getFourSushis = () => this.state.sushis.slice(0,4)

  // Goes through first 4 sushis, move eaten to 'eaten' and rotate uneaten to end of 'sushis'
  // No need for a 'current' tracker this way
  onMoreSushi = () => {
    let four = this.getFourSushis()
    let newSushis = this.state.sushis.slice(4).concat(four.filter(s => !s.eaten))
    let newEaten = this.state.eaten.concat(four.filter(s => s.eaten))
    this.setState({sushis: newSushis, eaten: newEaten})
  }

  onEatSushi = nom => {
    let {sushis, wallet} = this.state
    if (!nom.eaten && wallet >= nom.price) {
      this.setState({
        sushis: sushis.map(sushi => sushi.id === nom.id ? {...sushi, eaten: true} : sushi),
        wallet: wallet - nom.price
      })
    }
  }

  onAddFunds = () => this.setState(prev => ({wallet: prev.wallet + 100}))

  render() {
    let {eaten, wallet} = this.state
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.getFourSushis()}
          onEatSushi={this.onEatSushi}
          onMoreSushi={this.onMoreSushi}/>
        <Table 
          wallet={wallet} 
          eatenSushi={eaten} 
          onAddFunds={this.onAddFunds}/>
      </div>
    );
  }
}