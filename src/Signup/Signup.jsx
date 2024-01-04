import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [comment, SetComment] = useState('');
  const [checkSubmit, setcheckSubmit] = useState(false);


  const formSubmit = (e) => {
    e.preventDefault();
    setcheckSubmit(true);
    alert("Your form is submit")
    

    console.log('name', name, 'email', email, 'number', number, 'address', address, 'comment', comment);
  }
  const resetform = (e) => {
    e.preventDefault();
    setcheckSubmit(false);
    setName('');
    setEmail('');
    setNumber('');
    setAddress('');
    SetComment('');
  }
 




  return (
    <>
      {/* {checkSubmit ?
        <div class="card">
          <div class="card-body text-left">
            <h5>Name : {name}</h5>
            <h5>Email : {email}</h5>
            <h5>Number : {number}</h5>
            <h5>Address : {address}</h5>
            <h5>Comment : {comment}</h5> 
          </div>
        </div>
        :
        ""
      } */}
      <div className="Login-body">
        <div class='card'>
          <div class="card-body">
            <form> 
              <div className='head'> 
                <h2>Registration Form</h2>
                {/* <span className='close-icon'>                
                  <FontAwesomeIcon icon={faXmark} />
                </span> */}
                </div>
              <div class="mb-3">
                <input name={name} value={name} onChange={(e) => setName(e?.target?.value)} type="text" class="form-control" placeholder='Full Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <input name={email} value={email} onChange={(e) => setEmail(e?.target?.value)} type="email" class="form-control"placeholder='Some@gmail.com' id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <input name={number} value={number} onChange={(e) => setNumber(e?.target?.value)} type="password" class="form-control" placeholder='Password' id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <input name={address} value={address} onChange={(e) => setAddress(e?.target?.value)} type="text" class="form-control"placeholder='Address' id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div class="mb-3">
                <textarea name={comment} value={comment} onChange={(e) => SetComment(e?.target?.value)} type="text" class="form-control"placeholder='Comment' id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="button-group">
              <button onClick={resetform} type="submit" class="btn btn-danger danger">Reset</button> 
              <button action onClick={formSubmit} type="submit" class="btn btn-primary primary">Create Account</button>
               
              </div>
              <div>
              <p className='last-line'>Already you have an account?
              <Link to="/Login"><span>{' '}Sign in</span></Link>
              </p>
              </div>
              
            </form>
          </div>

        </div>
      </div>
    </>

  )
}
