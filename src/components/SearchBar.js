import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

export default class SearchBar extends Component {
  render() {
    return (
      <div
        style={{ marginTop: '40px', display: 'flex', justifyContent: 'center' }}
      >
        <TextField
          id="outline-search"
          label="search"
          helperText="Search for a todo"
          variant="outlined"
          onChange={this.props.searchChange}
        />
      </div>
    );
  }
}
