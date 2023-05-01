import React from 'react';

function Controls({setter, value}) {
  return (
    <div>
      <button onClick={() => setter((value) => value - 1)}>-</button>
      <button onClick={() => setter((value) => value + 1)}>+</button>
    </div>
  );
}

export default Controls;
