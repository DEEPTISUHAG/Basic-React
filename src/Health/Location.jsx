import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Healthcare from '../images/healthcare-medical.jpg'

export default function Location() {
  const [pincode, setPincode] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('');
  const genderData = [
    { name: "Male", value: "Male" },
    { name: "FeMale", value: "Female" },
    { name: "Other", value: "Other" },
  ]
  const [checksubmit, setcheckSubmit] = useState('false');
  const formSubmit = (e) => {
    e.preventDefault();
    setcheckSubmit(true);
    console.log("pincode", pincode, "date", date, "gender", gender);
  }

  const handleinput = (e) => {
    console.log('sfdcd', e);
  }
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="items mt-5">
            <div className="col">1.BASIC DETAIL</div>
            <div className="col">2.CHOOSE PLAN</div>
            <div className="col">3.ADDITIONAL DETAILS</div>
            <div className="col">4.PERSONAL DETAILS</div>
            <div className="col">5.PAYMENT</div>
          </div>

        </div>
        <div className="row">
          <div className='location-form mt-3'>
            <div className="col-7">

              <div class=''>
                <div class="">
                  <form>
                    <div className='inner-location'>
                      <h3>Find top health insurance plans for you</h3>
                      <p>Share the proper information it'll help us serve you better.</p>
                    </div>
                    <div class="mt-3 mb-3">
                      <label>Area Pin Code</label>
                      <input name={pincode} value={pincode} onChange={(e) => setPincode(e?.target?.value)} type="address" class="form-control" placeholder='Pincode' id="exampleInputEmail1" aria-describedby="emailHelp" />
                      <div className='location-icon'><FontAwesomeIcon icon={faLocationDot} style={{ color: "#c3c6d1", }} /></div>

                    </div>
                    <h4>Proposer Self Details</h4>
                    <div className='row'>
                      <div className="double-col">
                      <div class="col-6 mt-3">
                        <label>
                          Date of Birth
                        </label>
                        <input name={date} value={date} onChange={(e) => setDate(e?.target?.value)} type="date" class="form-control" placeholder='Date of birth' id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>



                      {/* <div className='custom-radio-btn row'>
                      {genderData.map((item,index)=>(
                      <div className="col-4" key={index}>
                      <label
                        htmlFor={item?.name}
                        className={
                          gender == item?.name
                            ? "col-4 radio-text radio-text-active"
                            : "col-4 radio-text"
                        }
                      >
                        {item?.name} 
                      </label>
                      <input
                        id={item?.name}
                        type="radio"
                        value={gender}
                        name={gender}
                        checked={gender === item?.name}
                        onChange={handleinput}
                        />
                    </div>
                      ))}
                      </div> */}






                      <div className='col-6'>

                        <label>Gender</label>
                        <div className="radio-list mt-3"> 
                          <div className="radio-item">
                            <input name={gender} type="radio" value={gender} onChange={(e) => setGender(e?.target?.value)} id='radio1' />{' '}
                            <label htmlFor='radio1'>Male</label></div>
                          <div className="radio-item">
                            <input name={gender} type="radio" value={gender} onChange={(e) => setGender(e?.target?.value)} id='radio2' />{' '}<label htmlFor='radio2'>Female</label></div>
                          <div className="radio-item">
                            <input name={gender} type="radio" value={gender} onChange={(e) => setGender(e?.target?.value)} id='radio3' />{' '}<label htmlFor='radio3'>Other</label></div>
                        </div>
                      </div> 
                      </div> 
                    </div>

                    <div className='mt-3'>
                      <label>
                        <p>
                        <input type="checkbox" name="" id="" />{' '}Whether Suffering pre-existing disease(PED)?

                        </p>
                      </label>
                      <label>
                        <p>
                        <input type="checkbox" name="" id="" />{' '}Do you want to extend the coverage for Personal Accident? 
                        </p>
                      </label>
                    </div>
                    <div className='long-btn'>
                      <div className="mt-3">
                        <button onClick={formSubmit} type="submit" class="btn outline-primary pri-btn-1">Add More Members</button>
                      </div>
                      <div className="mt-3">
                        <button onClick={formSubmit} type="submit" class="btn btn-primary pri-btn">Confirm & Continue</button>
                      </div>
                    </div>

                    <div>
                      <p className='last-line'>By Clicking on the better above i agree to all
                        <Link to="/Login"><span>{' '}TnCs</span></Link>
                      </p>
                    </div>
                  </form>
                </div>

              </div>

            </div>
            <div className="col-5">
              <div className='side-img'>
                <img src={Healthcare}></img>


              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}
