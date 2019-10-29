import React from 'react';
import { Container, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

const AddButton = () => {
  return (
    <Container>
      <Row>
        <Col>
          <ButtonToolbar>
            <Button variant="primary">Add record</Button>
          </ButtonToolbar>
        </Col>
      </Row>
    </Container>
  )
}

export default AddButton;