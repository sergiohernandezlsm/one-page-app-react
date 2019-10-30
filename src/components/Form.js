import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../actions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Form, Col } from 'react-bootstrap';

const DisplayForm = ({createUser}) => {

  const [inputs, setInput] = useState({first_name: '', last_name: ''});

  function handleSubmit(e) {
    e.preventDefault();
    const user = inputs;
    console.log(user)
    createUser(user);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={(e) => handleSubmit(e) }>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="first_name" placeholder="Name" onChange={(e) => setInput({...inputs, first_name: e.target.value})} />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="last_name" placeholder="Last Name" onChange={(e) => setInput({...inputs, last_name: e.target.value})} />
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

const mapStateToProps = (state) => ({ users: state.user.users })

export default connect(mapStateToProps, {createUser} )(DisplayForm);