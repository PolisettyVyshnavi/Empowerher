import React from "react";
import Component1 from "./Component1";

function App() {
  return (
    <div>
      <h2>Props Drilling Demo</h2>
      <Component1
        a="Apple"
        b="Banana"
        c="Cat"
        d="Dog"
        e="Elephant"
        f="Fish"
      />
    </div>
  );
}

export default App;