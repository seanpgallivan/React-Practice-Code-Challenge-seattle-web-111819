import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      sushis: [],
      wallet: 500,
      current: 0
    }
  }

  componentDidMount() {
    fetch(API).then(r=>r.json()).then(sushis => this.setState({sushis: sushis}))
  }

  getFourSushis = () => this.state.sushis.slice(this.state.current % 100, this.state.current % 100 + 4)

  onEatSushi = nom => {
    if (!nom.eaten && this.state.wallet >= nom.price) {
      this.setState(prev => ({
        sushis: prev.sushis.map(sushi => sushi.id === nom.id ? {...sushi, eaten: true} : sushi),
        wallet: prev.wallet - nom.price
      }))
    }
  }

  onMoreSushi = () => this.setState(prev => ({current: prev.current + 4}))

  // WHY DID I USE REDUCE?!?!?!?
  // eatenSushi = () => this.state.sushis.reduce((m, sushi) => sushi.eaten ? m.concat(sushi) : m, [])
  eatenSushi = () => this.state.sushis.filter(sushi => sushi.eaten)

  onAddFunds = () => this.setState(prev => ({wallet: prev.wallet + 100}))

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.getFourSushis()} onEatSushi={this.onEatSushi} onMoreSushi={this.onMoreSushi}/>
        <Table wallet={this.state.wallet} eatenSushi={this.eatenSushi()} onAddFunds={this.onAddFunds}/>
      </div>
    );
  }
}


// Test case for using forEach instead of reduce
// let newArray = []
// sushis.forEach(sushi => sushi.eaten ? newArray.push(sushi) : null)
// return newArray