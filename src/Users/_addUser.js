import React, { useEffect, useState } from 'react'
import axios from 'axios';

const initialUserInfo = {
    id: '',
    name: '',
    email: '',
    Role: '',
    Hire: '',
    salary:'',
    phone:'',
    address: {
        city: '',
        street: '',
        suite: '',
        zipcode: ''
    },
    company: {
        name: '',
        catchPhrase: '',
        bs: ''
    }
}

function AddUser(props) {
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    useEffect(() => {
    }, []);

    const addNewUser = async()=>{
        try{
            const response = await axios.post('http://localhost:4000/users',userInfo);
            if(response){
                props.setUserAdded();
            }
        }
        catch (e){
            console.log(e)
        }
    }


    return (
        <div className='user-view _add-view'>
            <h1>Basic Info</h1>
            <div className='box'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Emp_ID:</span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Emp_ID'
                                value={userInfo.id}
                                onChange={e => setUserInfo({ ...userInfo, id: e.target.value })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Emp_name:</span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Emp_name'
                                value={userInfo.name}
                                onChange={e => setUserInfo({ ...userInfo, name: e.target.value })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Role:</span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Username'
                                value={userInfo.Role}
                                onChange={e => setUserInfo({ ...userInfo, Role: e.target.value })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Email Address:</span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Email Address'
                                value={userInfo.email}
                                onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>HireDate:</span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Emp_HireDate'
                                value={userInfo.Hire}
                                onChange={e => setUserInfo({ ...userInfo, Hire: e.target.value })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Emp_salary:</span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Emp_salary'
                                value={userInfo.salary}
                                onChange={e => setUserInfo({ ...userInfo, salary: e.target.value })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Phone Number:</span>
                            <input
                                type='text'
                                className='form-control'
                                placeholder='Enter Phone Number'
                                value={userInfo.phone}
                                onChange={e => setUserInfo({ ...userInfo, phone: e.target.value })}
                            />
                        </p>
                    </div>


                </div>
            </div>

            <h1>User Address</h1>
            <div className='box'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>City:</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter City Name'
                                value={userInfo.address.city}
                                onChange={e=>setUserInfo({
                                    ...userInfo,
                                    address:{
                                        ...userInfo.address,
                                        city:e.target.value
                                    }
                                })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Street:</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter Street Name'
                                value={userInfo.address.street}
                                onChange={e=>setUserInfo({
                                    ...userInfo,
                                    address:{
                                        ...userInfo.address,
                                        street:e.target.value
                                    }
                                })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Suite:</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter Suite Name'
                                value={userInfo.address.suite}
                                onChange={e=>setUserInfo({
                                    ...userInfo,
                                    address:{
                                        ...userInfo.address,
                                        suite:e.target.value
                                    }
                                })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>ZIP Code:</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter ZIP Code'
                                value={userInfo.address.zipcode}
                                onChange={e=>setUserInfo({
                                    ...userInfo,
                                    address:{
                                        ...userInfo.address,
                                        zipcode:e.target.value
                                    }
                                })}
                            />
                        </p>
                    </div>
                </div>
            </div>

            <h1>User Company</h1>
            <div className='box'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Company Name:</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter Company Name'
                                value={userInfo.company.name}
                                onChange={e=>setUserInfo({
                                    ...userInfo,
                                    company:{
                                        ...userInfo.company,
                                        name:e.target.value
                                    }
                                })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Experience:</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter Catch Phrase'
                                value={userInfo.company.experience}
                                onChange={e=>setUserInfo({
                                    ...userInfo,
                                    company:{
                                        ...userInfo.company,
                                        experience:e.target.value
                                    }
                                })}
                            />
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Skills Requirement:</span>
                            <input 
                                type='text' 
                                className='form-control' 
                                placeholder='Enter BS'
                                value={userInfo.company.skill}
                                onChange={e=>setUserInfo({
                                    ...userInfo,
                                    company:{
                                        ...userInfo.company,
                                        skill:e.target.value
                                    }
                                })}
                            />
                        </p>
                    </div>
                </div>
            </div>

            <button className='btn btn-success' onClick={()=>addNewUser()}>Add New User</button>
        </div>
    )
}

export default AddUser