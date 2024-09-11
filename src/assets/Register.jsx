import React, { useState } from 'react'
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';
import { checkApi, registerApi } from '../services/allApis';
import { useNavigate } from 'react-router-dom';


function Register() {


  const nav=useNavigate()


  const [user,setUser]=useState({
    username:"",email:"",password:""
  })



  const handleRegister=async()=>{
    console.log(user)
    const{username,email,password}=user
    if(!username|| !email || !password){
      toast.warning("enter valid input")
    }
    else{
     const result=await checkApi(email)
     console.log(result)
     if(result.data.length>0){
      toast.warning("email already used!!")
     }
     else{
      const result=await registerApi(user)
      if(result.status==201){
        toast.success("Success")
        setUser({

          username:"",email:"",password:""

        })
        nav('/log')
      }
      else{
        toast.error("Registration failed")
        console.log(result);
        
      }
     
     }
     
    }
    
  }



  return (
    <>
    

    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <h1>REGISTER</h1>

<MDBInput wrapperClass='mb-3' label='Enter name' id='form1' type='text' onChange={(e)=>{setUser({...user,username:e.target.value})}}/>
<MDBInput wrapperClass='mb-3' label='Enter email' id='form2' type='email' onChange={(e)=>{setUser({...user,email:e.target.value})}}/>
<MDBInput wrapperClass='mb-3' label='Enter Password' id='form3' type='password' onChange={(e)=>{setUser({...user,password:e.target.value})}}/>

{/* <div className="d-flex justify-content-between mx-3 mb-4">
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
  <a href="!#">Forgot password?</a>
</div> */}

<MDBBtn className="mb-4" onClick={handleRegister}>Sign Up</MDBBtn>

<div className="text-center">
  <p>Already a member? <a href="/log">Login</a></p>
  
</div>

</MDBContainer>
    
    
    
    </>
  )
}

export default Register