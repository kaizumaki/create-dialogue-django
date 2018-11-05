import React, { Component } from 'react';
import FormItem from '../formItem/formItem.jsx';
import Field from '../../atoms/field/field.jsx';
import ValidateIcon from '../../atoms/validateIcon/validateIcon.jsx';
import Marks from '../../atoms/marks/marks.jsx';
import Attention from '../../atoms/attention/attention.jsx';

export default class SchoolName extends Component {
  render() {
    const markList = this.props.marks.map((item, index) =>
      <Marks key={index} text={item} />
    );

    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noGutter-middle">
          <div data-gridlex="col">
            <Field
              type="text"
              label={this.props.label}
              value={this.props.value}
              onChange={(e) => this.props.actions.inputSchoolName(e.target.value)}
              isRequired={this.props.isRequired} />
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
        </div>
        {markList}
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

