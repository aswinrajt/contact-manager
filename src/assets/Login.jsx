import React from 'react'
import { useState } from 'react';
import { loginApi } from '../services/allApis';
import { useNavigate } from 'react-router-dom';


import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import { toast } from 'react-toastify';

function Login() {

const nav=useNavigate()


  const [user, setUser] = useState({
    email: "", password: ""
  })


  const handleLogin = async () => {
    console.log(user);
    const { email, password } = user
    if (!email || !password) {
      toast.warning("Enter valid inputs!")

    }
    else {
      const rseult = await loginApi(email, password)
      if (rseult.status == 200) {
        if (rseult.data.length > 0) {
          toast.success("Login successful!")
          nav('/home')
            setUser({
              email:"",password:""
            })
          
        }
        else {
          toast.warning("Invalid Email/Password!!")

        }
      }
      else {
        toast.error("Something went wrong!!")
      }
    }

  }


  return (
    <>

      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <h1>LOGIN</h1>
        <MDBInput wrapperClass='mb-4' label='Email address'  id='form1' type='email' onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
        <MDBInput wrapperClass='mb-4' label='Password'  id='form2' type='password' onChange={(e) => { setUser({ ...user, password: e.target.value }) }} />

        {/* <div className="d-flex justify-content-between mx-3 mb-4">
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
  <a href="!#">Forgot password?</a>
</div> */}

        <MDBBtn className="mb-4" onClick={handleLogin}>Sign in</MDBBtn>

        <div className="text-center">
          <p>Not a member? <a href="/reg">Register</a></p>
          <p>or sign up with:</p>

          <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='facebook-f' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='twitter' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='google' size="sm" />
            </MDBBtn>

            <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
              <MDBIcon fab icon='github' size="sm" />
            </MDBBtn>

          </div>
        </div>

      </MDBContainer>


    </>
  )
}

export default Login