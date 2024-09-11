import React, { useEffect, useState } from 'react';
import { getContact, deleteContact, updateContact } from '../services/allApis'; 
import { toast } from 'react-toastify';
import { Button, Modal, Card, Container, Row, Col } from 'react-bootstrap';

function Contacts(response) {
    const [contactList, setContactList] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);

    // Fetch contacts and set state
    const getData = async () => {
        const result = await getContact();
        if (result.status === 200) {
            setContactList(result.data);
        }
    };

    useEffect(() => {
        getData();
    }, [response]);

    const delContact = async (id) => {
        const result = await deleteContact(id);
        if (result.status === 200) {
            getData();
            toast.success("Contact deleted");
        }
    };

    const handleEditClick = (contact) => {
        setSelectedContact(contact);
        setShowEditModal(true);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setSelectedContact((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFormSubmit = async () => {
        const result = await updateContact(selectedContact.id, selectedContact);
        if (result.status === 200) {
            getData();
            setShowEditModal(false);
            toast.success("Contact updated");
        }
    };

    return (
        <>
            <Container fluid className="py-4">
                <h1 className="text-center mb-4">Contacts</h1>
                <Row>
                    {contactList.length > 0 ? (
                        contactList.map((item) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={item?.id} className="mb-4">
                                <Card className="h-100">
                                    <Card.Body>
                                        <Card.Title>{item?.name}</Card.Title>
                                        <Card.Text><strong>Number:</strong> {item?.number}</Card.Text>
                                        <Card.Text><strong>Email:</strong> {item?.email}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="d-flex justify-content-between">
                                        <Button variant="danger" size="sm" onClick={() => delContact(item?.id)}>
                                            <i className="fa-solid fa-trash" />
                                        </Button>
                                        <Button variant="primary" size="sm" onClick={() => handleEditClick(item)}>
                                            <i className="fa-solid fa-user-pen" />
                                        </Button>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <h3>No Contacts</h3>
                        </Col>
                    )}
                </Row>
            </Container>

            {/* Edit Modal */}
            {selectedContact && (
                <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Contact</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={selectedContact.name}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="number" className="form-label">Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="number"
                                    value={selectedContact.number}
                                    onChange={handleFormChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={selectedContact.email}
                                    onChange={handleFormChange}
                                />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowEditModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="primary" onClick={handleFormSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
}

export default Contacts;
