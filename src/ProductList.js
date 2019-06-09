import React from 'react';
import ProductListItem from './ProductListItem';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.length === 0 && <p>There are no products on the list.</p>}
        {this.props.products.map(item => <ProductListItem product={item} key={item} />)}
      </div>
    );
  }
}

export default ProductList;
