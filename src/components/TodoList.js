import React, { Component, Fragment } from 'react';

import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.todos.map((todo, i) => {
          return (
            <Todo
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              deleteTodo={this.props.deleteTodo}
              displayComplete={this.props.displayComplete}
            ></Todo>
          );
        })}
      </Fragment>
    );
  }
}
