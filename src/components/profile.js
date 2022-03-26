import React, { useState, useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Profile = () => {
    const [user, setUser] = useState({})
    const [loaded, setLoaded] = useState(false)
    const param = useParams()

    useEffect(() => {
        setLoaded(false)
        // https://602e7c2c4410730017c50b9d.mockapi.io/users
        // https://jsonplaceholder.typicode.com/users
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
        .then(res => {
            setUser(res.data[param.id])
            setLoaded(true)
        })
    }, [param.id])

    return (
    <>{loaded ? 
        <div className="profile">
            <img src="https://drive.google.com/u/0/uc?id=1-wybmU-q4tljQ3bJAtcHE_Lst_PNdWYx&export=download" alt="profile-pic" />
            <h3>{user.profile.username}</h3>
            <textarea value={user.Bio} readOnly/>
            <div className="input-group">
                <label>Full Name</label><br/>
                <input type="text" value={user.profile.firstName + " " + user.profile.lastName} readOnly/>
            </div>
            <div className="input-group">
                <label>Job Title</label><br/>
                <input type="text" value={user.jobTitle} readOnly/>
            </div>
            <div className="input-group">
                <label>Email Address</label><br/>
                <input type="text" value={user.profile.email} readOnly/>
            </div>
        </div> : <>
        <h3 Style="margin-top:10px;">Loading</h3>
        <div className="loading"></div> </> }
    </>
    )
}

export default Profile;