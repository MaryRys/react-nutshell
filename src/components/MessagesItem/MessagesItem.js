import React from 'react';
import authRequests from '../../helpers/data/authRequests';
// import './MessagesItem.scss';

class MessagesItem extends React.Component {
  render() {
    const { message } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeDeleteBtn = () => {
      if (message.uid === uid) {
        return (
          <div>
            <span className="col">
            <button className="btn btn-danger">x</button>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };
    return (
      <div className="messagesItem">
        <div className="container">
          <div className="row">
            <h3>{message.message}</h3>
            {/* <img src={message.photo} alt="userImage"></img> */}
            { makeDeleteBtn() }
          </div>
          <h6>{message.userName}</h6>
        </div>
      </div>
    );
  }
}

export default MessagesItem;
