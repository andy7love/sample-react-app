import React from 'react';
import './App.css';
import ProductList from './ProductList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'John',
      userProducts: ['Milk', 'Tomato', 'Water']
    };
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>Hello {this.state.userName}, welcome.</p>
        <ProductList products={this.state.userProducts} />
      </div>
    );
  }
}

export default App;
