import React, { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle() {
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Status</button>
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;