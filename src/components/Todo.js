import React, { Component, Fragment } from 'react';

import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export default class Todo extends Component {
  render() {
    const { id, title, completed } = this.props;
    const todoTextStyle = completed ? 'line-through' : 'none';
    return (
      <Fragment>
        <Card>
          <CardContent
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Typography style={{ textDecoration: todoTextStyle }} variant="h5">
              {id}. {title}
              <Checkbox
                onChange={this.props.displayComplete.bind(this, id)}
                checked={completed}
              />
            </Typography>
            <DeleteForeverIcon
              style={{ cursor: 'pointer' }}
              color="secondary"
              onClick={this.props.deleteTodo.bind(this, id)}
            />
          </CardContent>
        </Card>
      </Fragment>
    );
  }
}
