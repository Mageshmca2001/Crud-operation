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
        experience: '',
        skill: ''
    }
}

function ViewUser(props) {
    const [userInfo, setUserInfo] = useState(initialUserInfo);

    useEffect(() => {
        fetchUserData()
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('https://mageshmca2001.github.io/db.json/db.json' + props.userId);
            if (response) {
                console.log(response.data);
                setUserInfo(response.data);
            }
            return
        }
        catch (e) {
            console.log(e)
        }
    }


    return (
        <div className='user-view'>
            <h1>Basic Info</h1>
            <div className='box'>
                <div className='row'>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>id:</span>
                            <span>{userInfo.id}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>name:</span>
                            <span>{userInfo.name}</span>
                        </p>
                    </div>
                    
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Email Address:</span>
                            <span>{userInfo.email}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Role:</span>
                            <span>{userInfo.Role}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Hire:</span>
                            <span>{userInfo.Hire}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>salary:</span>
                            <span>{userInfo.salary}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Phone Number:</span>
                            <span>{userInfo.phone}</span>
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
                            <span>{userInfo.address.city}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Street:</span>
                            <span>{userInfo.address.street}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Suite:</span>
                            <span>{userInfo.address.suite}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>ZIP Code:</span>
                            <span>{userInfo.address.zipcode}</span>
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
                            <span>{userInfo.company.name}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Experience:</span>
                            <span>{userInfo.company.experience}</span>
                        </p>
                    </div>
                    <div className='col-sm-12 col-md-6'>
                        <p>
                            <span>Skills Requirement:</span>
                            <span>{userInfo.company.skill}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
