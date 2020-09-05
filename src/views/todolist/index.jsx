import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../../components/card'; 


export default function TodoList() {
    return (
      <Container>
        <Row>
          <Col><Card/></Col>
          <Col><Card/></Col>
        </Row>
      </Container>
    );
  }
  