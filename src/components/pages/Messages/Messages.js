import React from 'react';
import './Messages.scss';
import MessagesItem from '../../MessagesItem/MessagesItem';

import smashRequests from '../../../helpers/data/smashRequests';

class Messages extends React.Component {
  state = {
    messages: [],
  }

  getMessagesForPage = () => {
    smashRequests.getAllMessagesWithUserInfo()
      .then((messages) => {
        if (messages.length > 1) {
          messages.shift(messages.legth - 1, messages.length);
        }
        this.setState({ messages });
      })
      .catch(err => console.error('error with messages GET', err));
  }

  componentDidMount() {
    this.getMessagesForPage();
  }

  render() {
    const { messages } = this.state;
    const messagesItemComponents = messages.map(message => (
      <MessagesItem
      message={message}
      key={message.id}
      />
    ));
    return (
      <div className="Messages mx-auto" width="200px">
      <div className="container">
      <h2>Messages Page</h2>
      {messagesItemComponents}
      </div>
      </div>
    );
  }
}

export default Messages;
