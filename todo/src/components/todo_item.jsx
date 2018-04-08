import React from 'react';

const TodoItem = ({ todo, index, handleRemoveTodo }) => (
  <div>
    <h4 className="list-group-item-heading">
      {todo.todoTitle}
      <small>
        <span className="badge badge-primary">
          {todo.todoPriority}
        </span>
      </small>
    </h4>
    <p>
      <span className="glyphicon glyphicon-user" aria-hidden="true" />
      {todo.todoResponsible}
    </p>
    <p>{todo.todoDescription}</p>
    <button
      className="btn btn-danger btn-sm"
      onClick={() => { handleRemoveTodo(index); }}>
      <span className="glyphicon glyphicon-trash" aria-hidden="true" />
      Delete
    </button>
  </div>
);

export default TodoItem;
