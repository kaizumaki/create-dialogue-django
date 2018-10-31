import React, { Component } from 'react';
import DialogueTable from '../DialogueTable/DialogueTable';
import DialogueJson from '../DialogueJson/DialogueJson';

export default class Dialogue extends Component {
  render() {
    return (
      <div>
        <DialogueTable
          hotSettings={this.props.hotSettings}
          actions={this.props.actions}
        />
        <DialogueJson
          question={this.props.question}
          answer={this.props.answer}
          keyword={this.props.keyword}
        />
      </div>
    );
  }
}
