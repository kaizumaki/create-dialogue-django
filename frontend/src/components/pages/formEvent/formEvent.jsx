import React, { Component } from 'react';
import page from 'page';
import Sending from '../../organisms/sending/sending.jsx';
import SendErrorContainer from '../../organisms/sendError/sendErrorContainer.jsx';
import ThanksContainer from "../../organisms/thanks/ThanksContainer.jsx";
import EventContainer from "../../organisms/event/EventContainer.jsx";
import ConfirmEvent from "../../organisms/confirmEvent/confirmEvent.jsx";
import GoogleTagManager from '../../atoms/googleTagManager/googleTagManager.jsx';

export default class FormEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <EventContainer />
    };
  }

  componentDidMount() {
    this.props.actions.setInputPageName('event');

    page('/form/event',() =>  {
      this.setState({
        component: <EventContainer />
      });
    });
    page('/form/event/confirm', () => {
      this.setState({
        component: <ConfirmEvent />
      });
    });
    page('/form/event/send',() => {
      this.setState({
        component: <Sending />
      });
    });
    page('/form/event/error',() => {
      this.setState({
        component: <SendErrorContainer inputUrl="/form/event" />
      });
    });
    page('/form/event/thanks',() => {
      this.setState({
        component: <ThanksContainer />
      });
      page.stop();
    });
    page('/',() =>  {
      window.location = '/';
    });
    page('*',() =>  {
      page.redirect('/form/event');
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

