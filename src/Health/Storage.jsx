import { Calendar } from 'primereact/calendar'
import { InputText } from 'primereact/inputtext'

import React, { useState } from 'react'

export default function Storage() {
    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

    const storedData = sessionStorage.getItem('UserData');

    console.log('storedData', storedData);
    const formSubmit = (e) => {
       e.preventDefault();
    }
   
    return (
        <div>
            <div className="container">
                <div className="card-1">
                    <div className="card-body">
                        <form>
                            <div>
                                <div className="location-input mt-5">
                                    <span className="p-float-label ">
                                        <InputText className="input-box" id="username" value={name} onChange={(e) => setName(e.target.value)} />
                                        <label className="input-label" htmlFor="username">Full Name</label>
                                    </span>

                                </div>
                                <div className="location-input mt-5">
                                    <span className="p-float-label ">
                                        <Calendar className="input-box" id="username" value={date} onChange={(e) => setDate(e.target.value)} />
                                        <label className="input-label" htmlFor="username">Policy Date</label>
                                    </span>

                                </div>
                                <div className="location-input mt-5">
                                    <span className="p-float-label ">
                                        <InputText className="input-box" id="username" value={value} onChange={(e) => setValue(e.target.value)} />
                                        <label className="input-label" htmlFor="username">Relation</label>
                                    </span>

                                </div>
                                <hr />
                                <div className='mt-5'>
                                    <button onClick={formSubmit} type="submit" class="button com-btn">Confirm &amp; Continue</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
