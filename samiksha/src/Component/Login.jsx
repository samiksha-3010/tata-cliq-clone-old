

import React, { useContext, useState } from 'react'
// import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'

const Login = () => {
    const { state, Login } = useContext(AuthContext);
    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.email && userData.password) {
            var flag = false;
            const allUsers = JSON.parse(localStorage.getItem("Users"));
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == userData.email && allUsers[i].password == userData.password) {
                    localStorage.setItem("Currrent-user", JSON.stringify(allUsers[i]))
                    Login(allUsers[i]);
                    setUserData({ email: "", password: "" })
                    alert("Login Successfull.")
                    router('/')
                    flag = true;
                    break;
                }
            }
            if (flag == false) {
                alert ("Please Check your email & password.")
            }

        } else {
           alert ("Please fill the all fields.")
        }
    }

    return (
        <div style={{width: "30%", height: "550px", border: "2px solid black",backgroundColor: "White", margin: "auto",borderRadius: "30px", marginTop:"30px"}}>
            <h1  style={{marginLeft: "50px", paddingTop: "30px"}}>Welcome to Tata </h1>
            <h1 style={{marginLeft: "90px", paddingTop: "30px"}}>CLiQ</h1>
            <form onSubmit={handleSubmit}>
                <label  style={{marginLeft: "50px"}}>E-mail Adress </label><br />
                <input style={{width:"50%",height: "40px",marginLeft: "50px" ,border: "none", borderBottom: "1px solid gray"}} value={userData.email} type='email' onChange={handleChange} name="email" /><br />
                <label  style={{marginLeft: "50px",}}>Password</label><br />
                <input  style={{width:"50%",height: "40px",marginLeft: "50px", border: "none", borderBottom: "1px solid gray"}} value={userData.password} type='password' onChange={handleChange} name='password' /><br />
                <p  style={{marginLeft: "30px", marginTop:"30px"}}>By Counting you agree to our <span style={{color: "red"}}>Term and use</span> and <span style={{color: "red"}}>Privacy& Policy</span></p>
                <span  style={{marginLeft: "50px"}}>haven't register here <p style={{ color: "red",marginLeft: "50px"}}>New Register?</p></span>
                <input style={{width: "50%", height: "40px", borderRadius: "50px", backgroundColor: "red", color: "white", marginLeft: "70px", marginTop: "50px"}} type='submit' value="Login" /><br />

            </form>
        </div>
    )
}

export default Login