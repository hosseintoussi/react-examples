import React from 'react';

const Counter = ({count}) => (
  <h4>
    Todo Count: <span className="badge badge-secondary">{count}</span>
  </h4>
);

export default Counter;
