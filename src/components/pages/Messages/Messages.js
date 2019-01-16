import React from 'react';
import './Messages.scss';
import MessagesItem from '../../MessagesItem/MessagesItem';
import AddEditMessages from '../AddEditMessages/AddEditMessages';

import smashRequests from '../../../helpers/data/smashRequests';
import messageRequests from '../../../helpers/data/messageRequests';

class Messages extends React.Component {
  state = {
    messages: [],
    isEdited: false,
    editId: '-1',
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
    const { isEdited, editId } = this.state;
    if (isEdited) {
      messageRequests.updateMessage(newMessage, editId)
        .then(() => {
          smashRequests.getAllMessagesWithUserInfo()
            .then((messages) => {
              this.setState({ messages, isEdited: false, editId: '-1' });
            });
        }).catch(err => console.error('error with editing message', err));
    } else {
      messageRequests.createMessage(newMessage)
        .then(() => {
          this.getMessagesForPage();
        }).catch(err => console.error('error with new message', err));
    }
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

  passMessageToEdit = messageId => this.setState({ isEdited: true, editId: messageId });

  render() {
    const {
      messages,
      isEdited,
      editId,
    } = this.state;

    const messagesItemComponents = messages.map(message => (
      <MessagesItem
      message={message}
      key={message.id}
      deleteSingleMessage={this.deleteOne}
      passMessageToEdit={this.passMessageToEdit}
      />
    ));
    return (
      <div className="Messages mx-auto" width="200px">
      <div className="container">
      <h2>Messages Page</h2>
      {messagesItemComponents}
      <AddEditMessages onSubmit={this.formSubmitEvent} isEdited={isEdited} editId={editId} />
      </div>
      </div>
    );
  }
}

export default Messages;
