import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/json';
import 'brace/theme/monokai';

export default class DialogueJson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      request: {
        answer: {
          keyword: {}
        }
      }
    };
    this.createResult = this.createResult.bind(this);
  }

  createResult() {
    this.setState({ request: { ...this.props.question, answer: { ...this.props.answer[0], keyword: this.props.keyword } } });
  }

  render() {
    const result = JSON.stringify(this.state, null, '\t');
    return (
      <div>
        <button onClick={this.createResult}>JSON</button>
        <AceEditor
          mode="json"
          theme="monokai"
          onLoad={this.createResult}
          onChange={this.createResult}
          fontSize={14}
          width={'100%'}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={result}
          setOptions={{
            showLineNumbers: true,
            tabSize: 2,
          }}
          editorProps={{$blockScrolling: true}}
        />
      </div>
    );
  }
}
