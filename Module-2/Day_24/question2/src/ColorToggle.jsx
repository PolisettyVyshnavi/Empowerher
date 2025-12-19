import React, { useState } from "react";
import "./style.css"; 

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  const handleToggle = () => {
    setIsRed((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Color</button>

      <div className={isRed ? "redDiv" : "blueDiv"}>
        {isRed ? "This div is RED" : "This div is BLUE"}
      </div>
    </div>
  );
}

export default ColorToggle;