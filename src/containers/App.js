import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Table from '../components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
  }

  render() {
    return (
      <div>
        <Form />
        <Table users={this.state.users} />
      </div>
    )
  }

}


export default App;
