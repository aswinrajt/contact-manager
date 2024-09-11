import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <div className="landing-page container-fluid d-flex align-items-center justify-content-center" style={{ height: '80vh', backgroundColor: '#f8f9fa', padding: '20px' }}>
        <Row className="align-items-center text-center text-md-start">
          <Col sm={12} md={6} className="p-5">
            <h1 className="display-4 fw-bold mb-4" style={{ color: '#f95e57' }}>Contact <span style={{color:'black'}}>Manager</span></h1>
            <p className="lead mb-5" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#333' }}>
              Welcome to the Contact Manager. Manage your contacts efficiently with our simple and intuitive app. Easily add, edit, and delete contacts, and keep all your important information organized in one place. Start managing your contacts today!
            </p>
            <div className="d-grid">
              <Link to={'/log'} className="btn btn-danger btn-lg" style={{ borderRadius: '30px' }}>Let's Go</Link>
            </div>
          </Col>
          <Col sm={12} md={6} className="d-none d-md-block text-center">
            <div className="landing-icon" style={{ fontSize: '100px', color: '#ff5e57' }}>
              <i className="fas fa-address-book"></i>
            </div>
          </Col>
        </Row>
      </div>
      <br /><br /><br />

      <div className="features-section container-fluid mt-5">
        <h3 className="text-center mb-4" style={{ color: '#333', fontWeight: 'bold' }}>Features</h3>
        <Row className="text-center">
          <Col xs={12} sm={4} className="mb-4">
            <i className="fas fa-user-plus fa-3x" style={{ color: '#ff5e57' }}></i>
            <h5 className="mt-3">Add Contacts</h5>
            <p>Easily add new contacts to your list in just a few clicks.</p>
          </Col>
          <Col xs={12} sm={4} className="mb-4">
            <i className="fas fa-user-edit fa-3x" style={{ color: '#ff5e57' }}></i>
            <h5 className="mt-3">Edit Contacts</h5>
            <p>Update and modify your contact information anytime.</p>
          </Col>
          <Col xs={12} sm={4} className="mb-4">
            <i className="fas fa-user-times fa-3x" style={{ color: '#ff5e57' }}></i>
            <h5 className="mt-3">Delete Contacts</h5>
            <p>Remove contacts you no longer need with ease.</p>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Landing;
