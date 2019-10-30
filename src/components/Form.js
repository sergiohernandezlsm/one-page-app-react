import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createUser, editUser, updateUser } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Form, Col } from 'react-bootstrap';

const DisplayForm = ({createUser, editable, updateUser }) => {

  const [inputs, setInput] = useState({first_name: '', last_name: ''});

  function handleSubmit(e) {
    e.preventDefault();
    const user = inputs;
    if( editable ) {
      updateUser(inputs, editable)
    } else {
      createUser(user);
    }
    
  }

  useEffect(() => {
    setInput({first_name: editable ? editable.first_name : '', last_name: editable ? editable.last_name : ''})
  },[editable])
  
  return (
    
    <Container>
      <br></br>
      <h4>CreateForm</h4>
      <br></br>
      <Row>
        <Col>
          <Form onSubmit={(e) => handleSubmit(e) }>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={inputs.first_name} name="first_name" placeholder="Name" onChange={(e) => setInput({...inputs, first_name: e.target.value})} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={inputs.last_name} name="last_name" placeholder="Last Name" onChange={(e) => setInput({...inputs, last_name: e.target.value})} />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

const mapStateToProps = (state) => ({ users: state.user.users, editable: state.user.editable })


export default connect(mapStateToProps, {createUser, editUser, updateUser} )(DisplayForm);