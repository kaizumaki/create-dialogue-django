import React, { Component } from 'react';

class BreakLine extends Component {
  render() {
    if( typeof this.props.text  === 'undefined'){
      this.lines = [];
    }
    else
    {
      this.lines = this.props.text.split('\n');
    }

    const textLines = this.lines.map((line, index) => {
      return (
        <span key={index}>{line}<br /></span>
      );
    });

    return (
      <div>{textLines}</div>
    );
  }
}

export default BreakLine;
