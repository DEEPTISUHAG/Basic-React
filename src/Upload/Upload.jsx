import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import React, { useState } from 'react';
import Stepper from '../Common/Stepper';

import { InputText } from "primereact/inputtext";



export default function Upload() {

    const [date, setDate] = useState('');
    const [date1, setDate1] = useState('');

    const [value, setValue] = useState('');
    const [number, setNumber] = useState();
    const [name, setName] = useState('');

    const [file, setFile] = useState('');
    const [file1, setFile1] = useState('');
    const [file2, setFile2] = useState('');



    const [checkSubmit, setcheckSubmit] = useState(false);
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'Gurugram', code: 'NY' },
        { name: 'Rohtak', code: 'RM' },
        { name: 'Jhajjar', code: 'LDN' },
        { name: 'Bhiwani', code: 'IST' },
        { name: 'Hisar', code: 'PRS' }
    ];


    const formSubmit = () => {
        setcheckSubmit(true);
        console.log('file path:-', file);
        console.log("Date", date);
        console.log("value", value);
        console.log("number", number);
        console.log("name", name);
        console.log("Date1", date1);
        console.log("selectedCities", selectedCities);
        const UploadData = {
            "PolicyData": date,
            "Relation": value,
            'FullName': name,
        }
        sessionStorage.setItem('UserData', JSON.stringify(UploadData));

        setNumber("")
        setFile("")
        setValue("")
        setName("")
        setDate("")
        setDate1("")
        setSelectedCities("")
    }



    const deep = (e) => {
        console.log('e', e.value);
        e.value.forEach(element => {
            console.log(element);
            setSelectedCities([element])

        });
    }

    // Get data from session storage on component mount
    const storedData = sessionStorage.getItem('myKey');



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
                                <h4 className='mt-5'>Upload Photo</h4>
                                <div className="first-box mt-4">
                                    <div className="drop-photo">
                                        <div className='file-drop-box'>

                                            <input name={file}
                                                value={file} onChange={(e) => setFile(e?.target?.value)}
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

                                            <input name={file1}
                                                value={file1}
                                                onChange={(e) => setFile1(e?.target?.value)}
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

                                            <input name={file2}
                                                value={file2}
                                                onChange={(e) => setFile2(e?.target?.value)}
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

                                <div className="row mt-5">
                                    <div className="second-box">
                                        <div className="col-6">
                                            <Calendar id="buttondisplay"
                                                value={date}
                                                onChange={(e) => setDate(e?.target?.value)} showIcon
                                                placeholder='Policy Start Date'
                                            />
                                        </div>

                                        <div className="col-6">
                                            <div className="card">
                                                <MultiSelect
                                                    value={selectedCities}
                                                    onChange={(e) => setSelectedCities(e.value)}
                                                    options={cities}
                                                    optionLabel="name"
                                                    display="chip"
                                                    placeholder="Select Cities"
                                                    maxSelectedLabels={3}
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mt-5">
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
                                                    value={name}
                                                    onChange={(e) => setName(e?.target?.value)} />
                                                <label htmlFor="username">Nominee Name</label>
                                            </span>


                                        </div>
                                        <div className="col-6">
                                            <span className="p-float-label">
                                                <InputText id="username"
                                                    value={value}
                                                    onChange={(e) => setValue(e?.target?.value)} />
                                                <label htmlFor="username">Relation</label>
                                            </span>


                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mt-5">
                                            <Calendar id="buttondisplay"
                                                value={date1}
                                                onChange={(e) => setDate1(e?.target?.value)} showIcon
                                                placeholder='Nominee DOB'
                                            />

                                        </div>

                                    </div>


                                </div>




                            </form>
                        </div>
                        <div className="col-4">
                            <div className="right-cards mt-5">

                                {/* {
                                    checkSubmit ? */}
                                <div className="right-card mt-5">
                                    <h5 className='right-head mt-2'>Insured Details</h5>
                                    <p>Area Pin Code:{' '}<span className='details'>110064</span></p>
                                    <p>Proposer:{' '}<span className='details'>Age: 32y, Gender: Male</span></p>
                                    <p>Spouse:{' '}<span className='details'>Age: 31y, Gender: Female<br />Personal Accident: Yes</span></p>
                                    <p>Son:{' '}<span className='details'>Age: 15y, Gender: Male</span></p>








                                    {/* <h5>Branch : {selectedCities}</h5>
                                            <h5>Policy Date : {date}</h5>
                                            <h5>GST number : {number}</h5>
                                            <h5>Nominee's Name : {name}</h5>
                                            <h5>Relation : {value}</h5>
                                            <h5>Nominee's DOB : {date1}</h5> */}



                                </div>
                                {/* :
                                        ""

                                } */}


                                <div className="right-card-1 mt-5">
                                    <h5 className='right-head'>
                                        Plan
                                    </h5>
                                    <div className="divide mt-4">
                                        <div>
                                            HFF - Silver Plan
                                        </div>
                                        <div className='plan'>Edit</div>
                                    </div>


                                </div>
                                <div className="right-card-2 mt-5">
                                    <h5 className='right-head'>Cost Break Up</h5>
                                    <div className="multi-lines">
                                        <div className="divide mt-2">
                                            <div>
                                                Sum Insured
                                            </div>
                                            <div><span>&#x20B9;</span>5 Lakhs</div>
                                        </div>

                                        <div className="divide mt-2">
                                            <div>
                                                Net Premium
                                            </div>
                                            <div><span>&#x20B9;</span>35,678</div>
                                        </div>

                                        <div className="divide mt-2">
                                            <div>
                                                Total Net Premium
                                            </div>
                                            <div><span>&#x20B9;</span> 35,678</div>
                                        </div>

                                        <div className="divide mt-2">
                                            <div>
                                                GST (18%)
                                            </div>
                                            <div><span>&#x20B9;</span> 6,422</div>
                                        </div>
                                        <hr />

                                        <div className="divide">
                                            <div>
                                                <h5 className='right-head'>Final Premium</h5>
                                            </div>
                                            <div className='plan'> <span>&#x20B9;</span> 42,100</div>
                                        </div>



                                    </div>
                                </div>
                            </div>

                        </div>


                    </div>


                </div>
                <hr />
                <div className='last-drop mt-5'>
                    <button onClick={formSubmit} type="submit" class="button common-btn">Confirm &amp; Continue</button>
                </div>

            </div>
        </div>
    )
}
