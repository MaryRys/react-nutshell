import React, { Component } from 'react';
// import firebase from 'firebase/app';
import 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css';

import connection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';

import './App.scss';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();

    // this.removeListener = firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     this.setState({
    //       authed: true,
    //     });
    //   } else {
    //     this.setState({
    //       authed: false,
    //     });
    //   }
    // });

    // isAuthenticated = (username) => {
    //   this.setState({ authed: true, })
    // }
  }

  render() {
    return (
      <div className="App">
          <Auth />
      </div>
    );
  }
}

export default App;
