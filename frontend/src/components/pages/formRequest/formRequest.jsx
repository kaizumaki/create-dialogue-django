import React, { Component } from 'react';
import page from 'page';
import Sending from '../../organisms/sending/sending.jsx';
import RequestContainer from "../../organisms/request/RequestContainer.jsx";
import SendErrorContainer from '../../organisms/sendError/sendErrorContainer.jsx';
import ThanksContainer from "../../organisms/thanks/ThanksContainer.jsx";
import ConfirmRequest from "../../organisms/confirmRequest/confirmRequest.jsx";
import GoogleTagManager from '../../atoms/googleTagManager/googleTagManager.jsx';

export default class FormRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <RequestContainer />
    };
  }

  componentDidMount() {
    this.props.actions.setInputPageName('request');

    page('/form/request',() =>  {
      this.setState({
        component: <RequestContainer />
      });
    });
    page('/form/request/confirm', () => {
      this.setState({
        component: <ConfirmRequest />
      });
    });
    page('/form/request/send',() => {
      this.setState({
        component: <Sending />
      });
    });
    page('/form/request/error',() => {
      this.setState({
        component: <SendErrorContainer inputUrl="/form/request" />
      });
    });
    page('/form/request/thanks',() => {
      this.setState({
        component: <ThanksContainer />
      });
      page.stop();
    });
    page('/',() =>  {
      window.location = '/';
    });
    page('*',() =>  {
      page.redirect('/form/request');
    });
    page();
  }

  componentWillUnmount() {
    page.stop();
  }

  render() {
    return (
      <div>
        {this.state.component}
        <GoogleTagManager gtmId='GTM-WNFXH9R' />
      </div>
    );
  }
}

