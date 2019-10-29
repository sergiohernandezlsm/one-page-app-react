import React, { Fragment } from 'react';
import { Container, Row, Col, Table, ButtonToolbar, Button } from 'react-bootstrap';
import AddButton from './AddButton'; 

const FormRow = ({users}) => {
  return (
    <Fragment>
      {users.map(user => 
        <tr>
          <td>{user.id}</td>
          <td>{user.first_name}</td>
          <td>{user.last_name}</td>
          <td>
            <ButtonToolbar>
              <Button variant="primary" size="sm">
                Edit
              </Button>
              <Button variant="secondary" size="sm">
                Delete
              </Button>
            </ButtonToolbar>
          </td>
        </tr>
      )}
    </Fragment>
  )
}


export default FormRow;