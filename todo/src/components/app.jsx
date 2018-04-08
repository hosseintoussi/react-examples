import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoInput from './todo_input';
import TodoItems from './todo_items';
import Counter from './counter';

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

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleRemoveTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index;
      }),
    });
  }

  handleAddTodo(todo) {
    this.setState({ todos: [...this.state.todos, todo] });
  }

  render() {
    return (
      <div className="container">
        <TodoInput onAddTodo={this.handleAddTodo} />
        <hr />
        <Counter count={this.state.todos.length} />
        <TodoItems todos={this.state.todos} handleRemoveTodo={this.handleRemoveTodo} />
      </div>
    );
  }
}

export default App;
