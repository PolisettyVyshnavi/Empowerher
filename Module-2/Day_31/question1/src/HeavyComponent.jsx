import React from 'react';
const HeavyComponent = React.memo(() => {
  console.log('HeavyComponent rendered');
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

  return (
    <div>
      <h2>Heavy Component</h2>
      <ul>
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
});

export default HeavyComponent;