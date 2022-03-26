import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Users = () => {
    const [users, setUsers] = useState([])
    const [loaded, setLoaded] = useState(false)
    let navigate = useNavigate()

    useEffect(() => {
        if(!loaded){
            // https://602e7c2c4410730017c50b9d.mockapi.io/users
            // https://jsonplaceholder.typicode.com/users
            axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(res => {
                setUsers(res.data)
                setLoaded(true)
            })
        }
    }, [loaded])

    const onButtonClick = (changeValue) => {
        navigate("/"+changeValue)
    }

    return (
    <>
        {loaded ? users.map((user,index) =>
            <div onClick={() => onButtonClick(index)} key={index} className="user-card">
                <img src="https://drive.google.com/u/0/uc?id=1-wybmU-q4tljQ3bJAtcHE_Lst_PNdWYx&export=download" alt="user-pic"/>
                <h3>{user.profile.firstName} {user.profile.lastName}</h3>
            </div>
        ) : <>
        <h3 Style="margin-top:10px;">Loading</h3>
        <div className="loading"></div> </>}
    </>
    )
}

export default Users;