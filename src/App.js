import React, { Component } from 'react';
import Header from './components/header';
import Container from './components/container';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: 'hfabio'
    }

    this.changeUser = this.changeUser.bind(this);
  }

  changeUser(user) {
    this.setState({ user: user });
  }

  render() {
    return (
      <div className="App" >
        <Header changeUser={this.changeUser} />
        <Container user={this.state.user} />
      </div>
    );
  }
}
