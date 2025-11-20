import { useState } from "react";

export default function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);

  return (
    <div>
      <h1 data-testid="count-value">Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
