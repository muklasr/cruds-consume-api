import React, { Component } from 'react';
import WayangList from './WayangList';
import { Container, Row, Col } from 'react-bootstrap';
import ModalComponent from './ModalComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
      <ModalComponent text="Tambah Wayang"/>
        <Row className="justify-content-md-center">
          <Col>
            <WayangList/>
          </Col>
        </Row>
        
      </Container>
    );
  }
}

export default App;
