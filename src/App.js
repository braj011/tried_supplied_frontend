import React, { Component } from 'react';
import logo from './logo.svg';
import image from  './tried_supplied_logo.png'
import './App.css';
import ProduceList from './ProduceList'
import { select, button } from 'bulma/css/bulma.css'

import API from './API';

class App extends Component {


  state = {
    seasonSelected: "",
    products: [],
    suppliers: [],
    supplier_products: []
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  getFruitData = () => {
    this.setState({products: []})
    API.getSeasonProduce(this.state.seasonSelected)
      .then(data => console.log("data", data)) // array of 2 arrays of Produce and Supplier objects
      // .then(seasonProduce => this.setState({
      //   products: [...this.state.products, seasonProduce[0]],
      //   suppliers: [...this.state.suppliers, seasonProduce[1]],
      //   supplier_products: [...this.state.supplier_products, seasonProduce[2]]
      //   }))
  }

  render() {
    const {seasonSelected, products, suppliers, supplier_products } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={image} className="tried_and_supplied_logo" alt="tried_and_supplied_logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <h1 className="season-q">What season is it?</h1>

        <div className="season-dropdown">
          <div className="control">
            <div className="select is-primary is-rounded" >
              <select name="seasonSelected" onChange={this.handleChange} >
                <option>SELECT</option>
                <option>Spring</option>
                <option>Summer</option>
                <option>Autumn</option>
                <option>Winter</option>
              </select>
            </div>
            <div>
              <button onClick ={() => this.getFruitData()} className="button is-primary">Submit</button>
            </div>
            
        </div>

      </div>
        <ProduceList seasonSelected={seasonSelected} products={products} suppliers={suppliers} supplier_products={supplier_products} />
      </div>
    );
  }
}

export default App;
