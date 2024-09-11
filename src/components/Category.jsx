// src/components/Category.js
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

const Category = () => {
  return (
    <div>
      <h2 className="text-center mb-4">Categories</h2>
      <Row className="text-center">
        <Col sm={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Personal</Card.Title>
              <Card.Text>
                Manage your personal contacts and keep track of important people in your life.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Professional</Card.Title>
              <Card.Text>
                Organize your professional network and maintain contacts relevant to your career.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4} className="mb-4">
          <Card>
            <Card.Body>
              <Card.Title>Family</Card.Title>
              <Card.Text>
                Keep track of your family members and their important details.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Category;
