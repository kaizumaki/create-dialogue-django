import React, { Component } from 'react';
import { HotTable } from '@handsontable/react';

export default class DialogueTable extends Component {
  constructor(props) {
    super(props);
    this.hotTableComponent = React.createRef();
    this.getData = this.getData.bind(this);
  }

  getData(){
    const hotInstance = this.hotTableComponent.current.hotInstance;
    this.props.actions.getQuestion(
      hotInstance.getSourceDataAtCell(0,0),
      hotInstance.getSourceDataAtCell(0,1),
      hotInstance.getSourceDataAtCell(0,2)
    );
    this.props.actions.getAnswer(
      hotInstance.getSourceDataAtCol(3),
      hotInstance.getSourceDataAtCol(4)
    );
    this.props.actions.getKeyword(
      hotInstance.getSourceDataAtCol(5),
      hotInstance.getSourceDataAtCol(6)
    );
  }

  render() {
    return (
      <div>
        <HotTable
          ref={this.hotTableComponent}
          settings={this.props.hotSettings}
          observeChanges={true}
          afterChangesObserved={this.getData}
        />
      </div>
    );
  }
}
