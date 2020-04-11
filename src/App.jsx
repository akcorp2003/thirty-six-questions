import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import ThinkingCards from './ThinkingCards';
import CasualCards from './CasualCards';
import DeepCards from './DeepCards';

const App = () => {
  return (
    <div className="mx-auto py-5">
      <Container>
        <Row>
          <Col>
            <ThinkingCards />
          </Col>
          <Col>
            <CasualCards />
          </Col>
          <Col>
            <DeepCards />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
