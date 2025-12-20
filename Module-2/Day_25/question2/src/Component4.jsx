import React from "react";
import Component5 from "./Component5";

function Component4({ c, d, e, f }) {
  return (
    <div>
      <h4>This is prop c: {c}</h4>
      <h4>This is prop d: {d}</h4>
      <Component5 f={f} e={e} />
    </div>
  );
}

export default Component4;