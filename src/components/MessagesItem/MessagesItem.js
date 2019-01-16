import React from 'react';
import './MessagesItem.scss';
import moment from 'moment';
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
          </div>
          <h6>{message.userName}</h6>
          <p>{moment(message.timestamp).format('LLL')}</p>
        </div>
      </div>

    );
  }
}

export default MessagesItem;
