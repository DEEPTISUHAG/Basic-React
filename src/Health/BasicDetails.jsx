import { InputText } from "primereact/inputtext";
import React, { useState } from 'react';
import '../Common/Health.scss';
import Stepper from '../Common/Stepper';
import Healthcare from '../images/healthcare-medical.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Calendar } from 'primereact/calendar';
import { Link } from "react-router-dom";

export default function BasicDetails() {
    const [value, setValue] = useState();
    const [date, setDate] = useState(null);
    const [checkSubmit, setcheckSubmit] = useState(false);


  const formSubmit = (e) => {
    e.preventDefault();
    setcheckSubmit(true);
  }
    return (
        <div className="container basic-details">
            <Stepper />
            <div className="inner-page-wrapper">
                <div className="inner-title heading-title"> Find top health insurance plans for you</div>
                <p class="sub-titles">Share the proper information it'll help us serve you better.</p>
            </div>
            <div className="form-section">
                <div className="row">
                    <div className="col-6">
                        <div className="row health-form">
                            <div className="col-12 location-input">
                                <span className="p-float-label ">
                                    <InputText className="input-box" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                                    <label className="input-label" htmlFor="username">Area Pin Code</label>
                                </span>
                                <FontAwesomeIcon className="location-icon" icon={faLocationDot} />

                            </div>
                            <h4>Proposer Self Details</h4>
                            <div className="col-6 input-group-section">
                                <span className="p-float-label ">
                                    <Calendar id="buttondisplay" value={date} onChange={(e) => setDate(e.value)} showIcon />
                                    <label className="input-label" htmlFor="username">Date Of Birth</label>
                                </span>
                            </div>
                            <div className="col-6 input-group-section">
                                <span className="p-float-label ">
                                    <InputText className="input-box" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                                    <label className="input-label" htmlFor="username">Full Name</label>
                                </span>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className="check-items">
                            <input type="checkbox" name="" id="" />
                            <label> 
                                Whether Suffering pre-existing disease(PED)? 
                            </label>
                            </div>
                            <div className="check-items">
                            <input type="checkbox" name="" id="" />
                            <label> 
                                Do you want to extend the coverage for Personal Accident? 
                            </label>

                            </div>
                           
                           
                        </div>
                        <div className="btn-section">
                            <button type="submit" class="button common-primary-btn">Add More Member</button>
                            <button action onClick={formSubmit} type="submit" class="button common-btn">Confirm &amp; Continue</button>
                        </div>
                        <p class="tnc"> By Clicking on the button above I agree to all <Link to={'/uploadphoto'}><span class="terms-cond">T&amp;Cs</span></Link></p>
                    </div>
                    <div className="col-6 img-section">
                        <img src={Healthcare} className='img-fluid'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
