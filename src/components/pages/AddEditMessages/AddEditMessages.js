import React from 'react';
import Proptypes from 'prop-types';
import moment from 'moment';
import authRequests from '../../../helpers/data/authRequests';

const getTime = moment().valueOf();

const emptyMessage = {
  message: '',
  timestamp: getTime,
  uid: '',
  isEdited: false,
};

class AddEditMessage extends React.Component {
  static propTypes = {
    onSubmit: Proptypes.func,
    isEdited: Proptypes.bool,
  }

  state = {
    newMessage: emptyMessage,
  }

  formFriendStringState = (name, e) => {
    e.preventDefault();
    const tempMessage = { ...this.state.newMessage };
    tempMessage[name] = e.target.value;
    this.setState({ newMessage: tempMessage });
  }

  messageChange = e => this.formFriendStringState('message', e);

  formSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const myMessage = { ...this.state.newMessage };
    myMessage.uid = authRequests.getCurrentUid();
    onSubmit(myMessage);
    this.setState({ newMessage: emptyMessage });
  }

  render() {
    const { newMessage } = this.state;
    return (
      <div>
      <h4>Write a message:</h4>
      <form onSubmit={this.formSubmit}>
        <div className="form-group">
      <label htmlFor="exampleInputMessage">Message:</label>
      <input
      type="text"
      className="form-control"
      id="message"
      aria-describedby="messageHelp"
      placeholder="Enter message"
      value={newMessage.message}
      onChange={this.messageChange}
      />
        </div>
        <button className="btn btn-danger">Add</button>
      </form>
      </div>
    );
  }
}

export default AddEditMessage;
