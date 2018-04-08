import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

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

class TodoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'Lowest',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      todoTitle: '',
      todoResponsible: '',
      todoDescription: '',
      todoPriority: 'Lowest',
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  showPreview() {
    return this.state.todoTitle ||
      this.state.todoResponsible ||
      this.state.todoDescription;
  }


  render() {
    return (
      <div>
        <h4>Add New Todo</h4>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
            <div className="col-sm-10">
              <input
                name="todoTitle"
                type="text"
                className="form-control"
                id="inputTodoTitle"
                value={this.state.todoTitle}
                onChange={this.handleInputChange}
                placeholder="Title"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">
              Responsible
            </label>
            <div className="col-sm-10">
              <input
                name="todoResponsible"
                type="text"
                className="form-control"
                id="inputTodoResponsible"
                value={this.state.todoResponsible}
                onChange={this.handleInputChange}
                placeholder="Responsible"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoDesc" className="col-sm-2 control-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                name="todoDescription"
                className="form-control"
                rows="3"
                id="inputTodoDesc"
                value={this.state.todoDescription}
                onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputTodoPriority" className="col-sm-2 control-label">
              Priority
            </label>
            <div className="col-sm-10">
              <select
                name="todoPriority"
                className="form-control"
                id="inputTodoPriority"
                value={this.state.todoPriority}
                onChange={this.handleInputChange}
              >
                <option>Lowest</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
                <option>Highest</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-success">Add Todo</button>
            </div>
          </div>
        </form>
        {this.showPreview() &&
        <div className="list-group list-group-item">
          <h4 className="list-group-item-heading">
            {this.state.todoTitle ? `title: ${this.state.todoTitle}` : null }
            <small>
              <span className="badge badge-primary">
                {this.state.todoPriority}
              </span>
            </small>
          </h4>
          <p>
            <span className="glyphicon glyphicon-user" aria-hidden="true" />
            {this.state.todoResponsible ? `Responsible: ${this.state.todoResponsible}` : null }
          </p>
          <p>{this.state.todoDescription ? `title: ${this.state.todoDescription}` : null }</p>
        </div>
        }
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
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
