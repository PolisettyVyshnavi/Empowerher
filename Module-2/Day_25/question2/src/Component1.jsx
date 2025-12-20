import React from "react";
import Component2 from "./Component2";

function Component1({ a, b, c, d, e, f }) {
  return <Component2 a={a} b={b} c={c} d={d} e={e} f={f} />;
}

export default Component1;