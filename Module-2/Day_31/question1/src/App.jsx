import React, { useState, Suspense, lazy } from 'react';
const HeavyComponent = lazy(() => import('./HeavyComponent'));
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>React.memo & Lazy Loading</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(c => c + 1)}>Increment Counter</button>
      <Suspense fallback={<p>Loading heavy component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}
export default App;