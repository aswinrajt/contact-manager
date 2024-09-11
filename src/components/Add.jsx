import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addContact } from '../services/allApis';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Add({res}) {


    const [show, setShow] = useState(false);
    const [contact,setContact] = useState({
      name:"",number:"",email:""
    })
  
  const handleAdd=async()=>{
    console.log(contact);
    const {name,number,email}=contact
    if(!name || !number || !email){
      toast.warning("Enter valid input")
    }
    else{
      const result=await addContact(contact)
      console.log(result);
      if(result.status==201){
        toast.success("Contact added")
        handleClose()
        setContact({
           name:"",number:"",email:""
  
        })
        res(result)
      }
      
      
  }
  }
  
  
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    const nav=useNavigate()

    const logout=()=>{
      nav('/log')
    }
  



  return (
    <>


      
       

     <div className='d-grid'>
          <Button variant="light" onClick={handleShow}>
            ADD CONTACT <br />
          <i className="fa-solid fa-user-plus" style={{color: "#002057",}} />
          </Button>
    
          <Button variant="light" onClick={logout}>
            LOGOUT <br />
          <i className="fa-solid fa-right-from-bracket" style={{color: "#d10000",}} />  
          </Button>
    
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <FloatingLabel controlId="name" label="Name" className="mb-3">
          <Form.Control type="text" placeholder="Name" onChange={(e)=>{setContact({...contact,name:e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="nmbr" label="Number"  className="mb-3">
          <Form.Control type="number" placeholder="1" onChange={(e)=>{setContact({...contact,number:e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="email" label="email" className="mb-3">
          <Form.Control type="email" placeholder="email" onChange={(e)=>{setContact({...contact,email:e.target.value})}} />
        </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleAdd}>Add</Button>
          </Modal.Footer>
        </Modal>
    
     </div>



   
    
    
    
    </>
  )
}

export default Add