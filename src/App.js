import React, { Component, Fragment } from 'react';

import Navigation from './components/Navigation';
import TodoList from './components/TodoList';
import SearchBar from './components/SearchBar';
import AddTodo from './components/AddTodo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      searchfield: '',
    };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    );
    const todos = await response.json();
    this.setState(() => ({ todos }));
    console.log(this.state);
  }

  onSearchChange = (event) => {
    const searchfield = event.target.value;
    this.setState(() => ({ searchfield }));
    console.log(this.state);
  };

  addTodo = async (title) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: title, completed: false }),
    });
    const responseJson = await response.json();
    responseJson.id = Math.floor(Math.random() * 16) + 5;
    this.setState(() => ({
      todos: [...this.state.todos, responseJson],
    }));
    console.log(this.state);
  };

  deleteTodo = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    this.setState(() => ({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    }));
    console.log(this.state);
  };

  displayComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        console.log(todo);
        return todo;
      }),
    });
  };

  render() {
    const { todos, searchfield } = this.state;
    const filteredTodos = todos.filter((todo) => {
      return todo.title.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !todos.length ? (
      <p>Loading...</p>
    ) : (
      <Fragment>
        <Navigation />
        <SearchBar searchChange={this.onSearchChange} />
        <AddTodo addTodo={this.addTodo} />
        <TodoList
          todos={filteredTodos}
          deleteTodo={this.deleteTodo}
          displayComplete={this.displayComplete}
        />
      </Fragment>
    );
  }
}

export default App;
