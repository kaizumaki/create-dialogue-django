import React, { Component } from 'react';
import page from 'page';
import Sending from '../../organisms/sending/sending.jsx';
import ContactContainer from "../../organisms/contact/ContactContainer.jsx";
import ConfirmContact from '../../organisms/confirmContact/confirmContact.jsx';
import SendErrorContainer from '../../organisms/sendError/sendErrorContainer.jsx';
import ThanksContainer from "../../organisms/thanks/ThanksContainer.jsx";

export default class FormContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <ContactContainer />
    };
  }

  componentDidMount() {
    this.props.actions.setInputPageName('contact');

    page('/form/contact',() =>  {
      this.setState({
        component: <ContactContainer />
      });
    });
    page('/form/contact/confirm', () => {
      this.setState({
        component: <ConfirmContact />
      });
    });
    page('/form/contact/send',() => {
      this.setState({
        component: <Sending />
      });
    });
    page('/form/contact/error',() => {
      this.setState({
        component: <SendErrorContainer inputUrl="/form/contact" />
      });
    });
    page('/form/contact/thanks',() => {
      this.setState({
        component: <ThanksContainer />
      });
      page.stop();
    });
    page('/',() =>  {
      window.location = '/';
    });
    page('*',() =>  {
      page.redirect('/form/contact');
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
      </div>
    );
  }
}

