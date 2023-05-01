import React from 'react';

function TodoItem({ todo: { title }, deleteFn = () => {} }) {
  return (
    <li>
      {title}
      {''} <button onClick={deleteFn}>&times;</button>
    </li>
  );
}

export default TodoItem;
