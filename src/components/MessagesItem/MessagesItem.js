import React from 'react';
import './MessagesItem.scss';
import messageShape from '../../helpers/propz/messageShape';

class MessagesItem extends React.Component {
  static propTypes = {
    message: messageShape,
  }

  render() {
    const { message } = this.props;
    return (
      <div className="messagesItem">
        <div className="container">
          <div className="row">
            <h3>{message.message}</h3>
            <img src={message.photo} alt="userImage"></img>
          </div>
          <h6>{message.userName}</h6>
        </div>
      </div>

    );
  }
}

export default MessagesItem;
