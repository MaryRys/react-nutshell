import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import authRequests from '../../helpers/data/authRequests';
import messageShape from '../../helpers/propz/messageShape';
import './MessagesItem.scss';

class MessagesItem extends React.Component {
    static propTypes = {
      message: messageShape,
      deleteSingleMessage: PropTypes.func,
      passMessageToEdit: PropTypes.func,
    }

    deleteEvent = (e) => {
      e.preventDefault();
      const { deleteSingleMessage, message } = this.props;
      deleteSingleMessage(message.id);
    }

    editEvent = (e) => {
      e.preventDefault();
      const { passMessageToEdit, message } = this.props;
      passMessageToEdit(message.id);
    };

    render() {
      const { message } = this.props;
      const uid = authRequests.getCurrentUid();
      const makeButtons = () => {
        if (message.uid === uid) {
          return (
          <div>
            <span className="col">
            <button className="btn btn-danger" onClick={this.deleteEvent}>x</button>
            <button className="btn btn-success" onClick={this.editEvent}>Edit</button>
            </span>
          </div>
          );
        }
        return <span className="col-2"></span>;
      };
      return (

      <div className="messagesItem">
        <div className="container">
        <h3>{message.message}</h3>
          <div className="row">
          <p>{message.userName}</p>
          <p>{moment(message.timestamp).format('LLL')}</p>
          { makeButtons() }
        </div>
      </div>
      </div>
      );
    }
}

export default MessagesItem;
