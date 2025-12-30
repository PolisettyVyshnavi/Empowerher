import React from 'react';
function ProductList({ products, onSelectProduct }) {
  console.log('ProductList rendered');
  return (
    <ul>
      {products.map(product => (
        <li key={product.id} onClick={() => onSelectProduct(product)}>
          {product.name} - ₹{product.price}
        </li>
      ))}
    </ul>
  );
}

export default ProductList;