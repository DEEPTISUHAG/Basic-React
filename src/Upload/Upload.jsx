import { faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import React, { useState } from 'react';
import Stepper from '../Common/Stepper';

import { InputText } from "primereact/inputtext";



export default function Upload() {
    const [date, setDate] = useState('');
    const [value, setValue] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    
    const [file, setFile] = useState('');

    const [checkSubmit, setcheckSubmit] = useState(false);

    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];


    const formSubmit = (e) => {
        e.preventDefault();
        setcheckSubmit(true);
        console.log('name', name, 'number', number, 'file', file,);
    }

    return (
        <div>

            <div className="container">
                <Stepper />
                <div className="row mt-5">
                    <div className='location mt-3 mb-4'>
                        <div className="col-8">
                            <form>
                                <div className='inner-location'>
                                    <h3>Help Us With Additional Details</h3>
                                    <p>Please enter your detail & Continue</p>
                                </div>
                                <h4 className='mt-4'>Upload Photo</h4>
                                <div className="first-box mt-4">
                                    <div className="drop-photo">
                                        <div className='file-drop-box'>

                                            <input name={date}
                                                value={date} onChange={(e) => setFile(e?.target?.value)}
                                                type="file"
                                                class="form-control"
                                                placeholder='Drop your photo here'
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                            {/* <FontAwesomeIcon className='drop-icon'
                                                icon={faFileImage}
                                                style={{ color: "#c3c6d1", }} /> */}
                                        </div>
                                        <div className='file-drop-content'>
                                            Drop your photo here or <span>Browser</span>
                                        </div>


                                    </div>
                                    <div className="drop-photo">
                                        <div className='file-drop-box'>

                                            <input name={date}
                                                value={date}
                                                onChange={(e) => setFile(e?.target?.value)}
                                                type="file"
                                                class="form-control"
                                                placeholder='Drop your photo here'
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div className='file-drop-content'>
                                            Drop your photo here or <span>Browser</span>
                                        </div>


                                    </div>
                                    <div className="drop-photo">
                                        <div className='file-drop-box'>

                                            <input name={date}
                                                value={date}
                                                onChange={(e) => setFile(e?.target?.value)}
                                                type="file"
                                                class="form-control"
                                                placeholder='Drop your photo here'
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                        </div>
                                        <div className='file-drop-content'>
                                            Drop your photo here or <span>Browser</span>
                                        </div>


                                    </div>

                                </div>

                                <hr />

                                <div className="row mt-4">
                                    <div className="second-box">
                                        <div className="col-6">
                                            <Calendar id="buttondisplay"
                                                value={date}
                                                onChange={(e) => setDate(e.value)} showIcon
                                                placeholder='Policy Start Date'
                                            />


                                        </div>
                                        <div className="col-6">
                                            <div className="card">
                                                <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                                                    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6">
                                            <input name={number}
                                                value={number}
                                                onChange={(e) => setNumber(e?.target?.value)}
                                                type="number"
                                                class="form-control"
                                                placeholder='GST Number(Optional)'
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />

                                        </div>
                                    </div>


                                </div>

                                <hr />
                                <h4 className='mt-4'>Nominee Details</h4>

                                <div className="row mt-4">
                                    <div className="second-box">

                                        <div className="col-6">
                                            <span className="p-float-label input-box">
                                                <InputText id="username" 
                                                value={value} 
                                                onChange={(e) => setValue(e.target.value)} />
                                                <label htmlFor="username">Nominee Name</label>
                                            </span>


                                        </div>
                                        <div className="col-6">
                                        <span className="p-float-label">
                                                <InputText id="username" 
                                                value={value} 
                                                onChange={(e) => setValue(e.target.value)} />
                                                <label htmlFor="username">Relation</label>
                                            </span>


                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mt-3">
                                        <Calendar id="buttondisplay"
                                                value={date}
                                                onChange={(e) => setDate(e.value)} showIcon
                                                placeholder='Nominee DOB'
                                            />
                                    
                                        </div>

                                    </div>


                                </div>



                            </form>
                        </div>
                        <div className="col-4">
                            <div className="right-cards mt-5">
                                <div className="right-card mt-5">


                                    <h4>Insured Details</h4></div>
                                <div className="right-card-1 mt-5">dfghjkl</div>
                                <div className="right-card-2 mt-5">dsfghj</div>
                            </div>

                        </div>


                    </div>


                </div>
                <hr />
                <div className='last-drop'>
                    <button onClick={formSubmit} type="submit" class="button common-btn">Confirm &amp; Continue</button>
                </div>
            </div>
        </div>
    )
}
