import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class AddTodo extends Component {
  state = {
    input: '',
  };

  onChange = (e) => {
    this.setState({ input: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.input);
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      >
        <TextField
          id="outlined-add"
          label="Add todo"
          helperText="Enter a todo item"
          value={this.state.input}
          variant="outlined"
          onChange={this.onChange}
        />
        <Button
          style={{ width: '200px', height: '55px' }}
          variant="contained"
          color="primary"
          type="submit"
        >
          Add
        </Button>
      </form>
    );
  }
}
