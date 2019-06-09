import React from 'react';

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

export default ProductList;
