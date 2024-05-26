import { useState } from 'react';

 function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        El Contador es {count}
      </button>
    </div>
  );
}

export { Contador };