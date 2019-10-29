import React, { Component } from 'react';
import '../App.css';
import Form from '../components/Form';
import Table from '../components/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    users: [
      {
        "id": 1,
        "first_name": "sergio",
        "last_name": "surf",
        "createdAt": "2019-10-29T09:14:13.000Z",
        "updatedAt": "2019-10-29T09:14:13.000Z"
      },
      {
        "id": 2,
        "first_name": "karla",
        "last_name": "surfergirl",
        "createdAt": "2019-10-29T09:14:33.000Z",
        "updatedAt": "2019-10-29T09:14:33.000Z"
      },
      {
        "id": 3,
        "first_name": "John John Florence",
        "last_name": "Pyzel",
        "createdAt": "2019-10-29T09:14:53.000Z",
        "updatedAt": "2019-10-29T09:14:53.000Z"
      }
    ]
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
