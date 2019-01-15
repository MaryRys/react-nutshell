import React from 'react';
// import PropTypes from 'prop-types';

const emptyMessage = {
  message: '',
  timestamp: '',
  uid: '',
  isEdited: '',
};

class AddEditMessage extends React.Component {
  state = {
    newMessage: emptyMessage,
  }

  render() {
    return (
      <div>
      <h4>Write a message:</h4>
      <form>
        <div className="form-group">
      <label htmlFor="exampleInputMessage">Message:</label>
      <input
      type="text"
      className="form-control"
      id="message"
      aria-describedby="messageHelp"
      placeholder="Enter message" />
        </div>
        <button className="btn btn-danger">Add</button>
      </form>
      </div>
    );
  }
}

export default AddEditMessage;
