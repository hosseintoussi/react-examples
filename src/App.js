import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const todos = [
  {
    todoTitle: 'My first todo',
    todoResponsible: 'Hossein',
    todoDescription: 'Todo description',
    todoPriority: 'low',
  },
  {
    todoTitle: 'My second todo',
    todoResponsible: 'Hossein',
    todoDescription: 'Todo description',
    todoPriority: 'medium',
  },
  {
    todoTitle: 'My third todo',
    todoResponsible: 'Hossein',
    todoDescription: 'Todo description',
    todoPriority: 'high',
  },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
    };
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      }),
    });
  }

  render() {
    return (
      <div className="container">
        <h4>
          Todo Count: <span className="badge badge-secondary">{this.state.todos.length}</span>
        </h4>
        <ul className="list-group">
          { this.state.todos.map((todo, index) =>
            <li className="list-group-item" key={index}>
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
                <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete</button>
              </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
