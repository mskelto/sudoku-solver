import './box.css';
import React, { Component } from 'react';

export default class Box extends Component {
  render() {
      return (
        <input key={this.props.id} id={this.props.id} className={"SudokuInput"}></input>
  );
  }
}
