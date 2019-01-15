import React from 'react';
import './MessagesItem.scss';

class MessagesItem extends React.Component {
  render() {
    const { message } = this.props;
    return (
      <div className="messagesItem">
        <div className="container">
          <div className="row">
            <h3>{message.message}</h3>
          </div>
          <h6>{message.userName}</h6>
        </div>
      </div>

    );
  }
}

export default MessagesItem;
