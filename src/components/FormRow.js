import React, { Fragment } from 'react';
import { ButtonToolbar, Button } from 'react-bootstrap';

const FormRow = ({users}) => {
  return (
    <Fragment>
      {users.map(user => 
        <tr key={user.id}>
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