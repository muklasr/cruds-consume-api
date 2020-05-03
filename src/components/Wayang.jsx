import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CategoryNav from "./contents/CategoryNav";
import WayangList from "../WayangList";
import SearchBar from "./SearchBar";

const Wayang = () => {
  return (
    <div>
      <Container>
        <CategoryNav />
        <Row className="justify-content-md-center">
          <Col>
            <WayangList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Wayang;
