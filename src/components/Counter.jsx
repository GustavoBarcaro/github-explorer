import { useState } from "react";

// imutabilidade

export function Counter() {
  const [counter, setCounter] = useState(0);
  function increment() {
    setCounter((prevCount) => prevCount + 1);
  }
  return (
    <div>
      <h1>{counter}</h1>
      <button type='button' onClick={increment}>
        Increment
      </button>
    </div>
  );
}
