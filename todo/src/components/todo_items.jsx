import React from 'react';
import TodoItem from './todo_item';

const TodoItems = ({todos, handleRemoveTodo}) => (
    <ul className="list-group">
      { todos.map((todo, index) =>
        <li className="list-group-item" key={index}>
          <TodoItem
            index={index}
            todo={todo}
            handleRemoveTodo={handleRemoveTodo}
          />
        </li>
      )}
    </ul>
);

export default TodoItems;
