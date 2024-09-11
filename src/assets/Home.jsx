import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Add from '../components/Add';
import Contacts from '../components/Contacts';
import Category from '../components/Category'; // Import the new Category component

function Home() {
  const [response, setResponse] = useState("");

  return (
    <>
      <Container fluid className="my-5">
        <Row className="mb-5" style={{ height: "75vh" }}>
          <Col sm={12} md={2}>
            <Add res={setResponse} />
          </Col>
          <Col sm={12} md={10}>
            <Contacts response={response} />
          </Col>
        </Row>

       
        {/* <Row className="my-5">
          <Col sm={12}>
            <Category />
          </Col>
        </Row> */}
      </Container>
    </>
  );
}

export default Home;
