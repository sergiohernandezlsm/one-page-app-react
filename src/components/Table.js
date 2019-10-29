import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import AddButton from './AddButton'; 
import FormRow from './FormRow';

const DisplayTable = ({users}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <FormRow users={users} />
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <AddButton />
    </div>
  )
}

export default DisplayTable;