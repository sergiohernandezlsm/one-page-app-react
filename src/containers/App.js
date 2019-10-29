import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions';
import Form from '../components/Form';
import Table from '../components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <div>
        <Form />
        <Table users={this.props.users} />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({ users: state.user.users });

export default connect(mapStateToProps, {getUsers} )(App);
