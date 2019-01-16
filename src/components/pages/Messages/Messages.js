import React from 'react';
import './Messages.scss';
import MessagesItem from '../../MessagesItem/MessagesItem';
import AddEditMessages from '../AddEditMessages/AddEditMessages';

import smashRequests from '../../../helpers/data/smashRequests';
import messageRequests from '../../../helpers/data/messageRequests';

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

  formSubmitEvent = (newMessage) => {
    messageRequests.createMessage(newMessage)
      .then(() => {
        smashRequests.getAllMessagesWithUserInfo()
          .then((messages) => {
            this.setState({ messages });
          });
      })
      .catch(err => console.error('error with messages post', err));
  }

  deleteOne = (messageId) => {
    messageRequests.deleteMessage(messageId)
      .then(() => {
        smashRequests.getAllMessagesWithUserInfo()
          .then((messages) => {
            this.setState({ messages });
          });
      })
      .catch(err => console.error('error with deleting single message', err));
  }

  render() {
    const { messages } = this.state;
    const messagesItemComponents = messages.map(message => (
      <MessagesItem
      message={message}
      key={message.id}
      deleteSingleMessage={this.deleteOne}
      />
    ));
    return (
      <div className="Messages mx-auto" width="200px">
      <div className="container">
      <h2>Messages Page</h2>
      {messagesItemComponents}
      <AddEditMessages onSubmit={this.formSubmitEvent}/>
      </div>
      </div>
    );
  }
}

export default Messages;
