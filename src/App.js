import React from 'react';
import './App.css';

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

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.length === 0 && <p>There are no products on the list.</p>}
        {this.props.products.map(item => <ProductItem product={item} key={item} />)}
      </div>
    );
  }
}


class ProductItem extends React.Component {
  render() {
    return (
      <div className="product">{this.props.product}</div>
    );
  }
}


export default App;
