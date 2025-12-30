import React, { useState, useMemo, useCallback } from 'react';
import ProductList from './ProductList';

function App() {
  const [counter, setCounter] = useState(0);

  // ✅ Simulate large product list
  const products = useMemo(() => {
    return Array.from({ length: 10000 }, (_, i) => ({
      id: i,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * 100),
    }));
  }, []);

  // ✅ Memoize total price to avoid recalculation
  const totalPrice = useMemo(() => {
    console.log('Calculating total price...');
    return products.reduce((sum, p) => sum + p.price, 0);
  }, [products]);

  // ✅ Memoize product selection handler
  const handleSelectProduct = useCallback((product) => {
    console.log('Selected:', product.name);
  }, []);

  return (
    <div>
      <h1>React Performance Optimization</h1>
      <p>Total Price: ₹{totalPrice}</p>
      <button onClick={() => setCounter(c => c + 1)}>
        Increment Counter ({counter})
      </button>
      <ProductList products={products} onSelectProduct={handleSelectProduct} />
    </div>
  );
}

export default App;