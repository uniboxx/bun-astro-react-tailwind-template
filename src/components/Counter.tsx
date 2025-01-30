import { useState } from 'react';

const buttonStyle = 'px-2 border-1 border-gray-400 hover:cursor-pointer';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-2">
      <button
        className={buttonStyle}
        onClick={() => setCount((count) => count - 1)}
      >
        -
      </button>
      <p>Counter: {count}</p>
      <button
        className={buttonStyle}
        onClick={() => setCount((count) => count + 1)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
