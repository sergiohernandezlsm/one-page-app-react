import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../actions';
import { ButtonToolbar, Button } from 'react-bootstrap';

const FormRow = ({users, deleteUser}) => {
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
              <Button variant="secondary" size="sm" onClick={() => deleteUser(user.id)}>
                Delete
              </Button>
            </ButtonToolbar>
          </td>
        </tr>
      )}
    </Fragment>
  )
}

const mapStateToProps = (state) => ({ 
  users: state.user.users
});
export default connect(mapStateToProps, {deleteUser} )(FormRow);