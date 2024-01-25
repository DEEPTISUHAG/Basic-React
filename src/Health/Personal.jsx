import React, { useEffect, useState } from 'react'
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";



export default function Personal() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [city1, setCity1] = useState('');
  const [pincode, setPincode] = useState('');
  const [checked, setChecked] = useState('');
  const [selectedCity, setSelectedCity] = useState("");
  const cities = [
    { name: 'Gurugram', code: 'NY' },
    { name: 'Rohtak', code: 'RM' },
    { name: 'Jhajjar', code: 'LDN' },
    { name: 'Bhiwani', code: 'IST' },
    { name: 'Hisar', code: 'PRS' }, 
  ];

  const storedData = sessionStorage.getItem('UserData');
  console.log('storedData', storedData);
  const formSubmit = (e) => {
    e.preventDefault();
  }




  return (
    <div>
      <div>Personal Details </div>
      <div className="container">
        <form>
          <div className="row">
            <div className="col-8">
              <div className="row mt-3">
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <InputText id="username"
                      value={name}
                      onChange={(e) => setName(e?.target?.value)} />
                    <label htmlFor="username">Full Name</label>
                  </span></div>
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <InputText id="username"
                      value={number}
                      onChange={(e) => setNumber(e?.target?.value)} />
                    <label htmlFor="username">Mobile Number</label>
                  </span>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <InputText id="username"
                      value={email}
                      onChange={(e) => setEmail(e?.target?.value)} />
                    <label htmlFor="username">Email</label>
                  </span></div>
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <InputText id="username"
                      value={address}
                      onChange={(e) => setAddress(e?.target?.value)} />
                    <label htmlFor="username">Parmanent Address</label>
                  </span>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <InputText id="username"
                      value={city}
                      onChange={(e) => setCity(e?.target?.value)} />
                    <label htmlFor="username">City</label>
                  </span></div>
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <InputText id="username"
                      value={city1}
                      onChange={(e) => setCity1(e?.target?.value)} />
                    <label htmlFor="username">Mobile Number</label>
                  </span>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <InputText id="username"
                      value={pincode}
                      onChange={(e) => setPincode(e?.target?.value)} />
                    <label htmlFor="username">Pincode</label>
                  </span>
                </div>
              </div>
              <hr />
              <div className="divide">
                <div>
                  <h5 className='right-head'>Your Current Address</h5>
                </div>
                <div className=''> <span>
                  <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                </span> Same As Permanent</div>
              </div>
              <hr />
              <div className="row mt-3">
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <InputText id="username"
                      value={city}
                      onChange={(e) => setCity(e?.target?.value)} />
                    <label htmlFor="username">City</label>
                  </span></div>
                <div className="col-6">
                  <span className="p-float-label input-box">
                    <Dropdown id="username"
                      value={selectedCity}
                      options={cities}
                      optionLabel="name"
                      onChange={(e) => setSelectedCity(e.value)} />
                    <label htmlFor="username">Select Branch Office</label>
                  </span>
                </div>
              </div>
              <hr />
              <div className='last-drop mt-5'>
                <button onClick={formSubmit} type="submit" class="button common-btn">Confirm &amp; Continue</button>
              </div>



            </div>
            <div className="col-4"></div>
          </div>

        </form>



      </div>

    </div>

  )
}
