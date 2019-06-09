import React from 'react';

class ProductListItem extends React.Component {
  render() {
    return (
      <div className="product">{this.props.product}</div>
    );
  }
}

export default ProductListItem;
