import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
     const [userData,setUserData] = useState({name: "",email: "",password: "",role: "Byuer"})
     const router = useNavigate();
     const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    // console.log(userData, "- userdata")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password) {

            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const userDataObj = {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                cart : []
            };
            // console.log(array, "-array")
            array.push(userDataObj);
            localStorage.setItem("Users", JSON.stringify(array)); /// set, not update

            const ls = JSON.parse(localStorage.getItem("Test")) || [];
            // console.log(ls, "-ls")
            ls.push(userData);

            alert("Registeration Successfull..")
            router('/login')
        } else {
            alert("Please fill the all fields..")
        }
    }
     function selectRole (event){
        console.log(event.target.value = "-role")
     setUserData({...userData,["role"]: event.target.value})
     }


  return (
    <div>
         <h2>Register</h2>
         <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input type='text' name='name' onChange={handleChange} /><br />
                <label>Slect Role:</label><br />
                <select onChange ={selectRole}>
                    <option value="Byuer">Byuer</option>
                    <option value= "Seller">Seller</option>
                </select><br/>
                <label>Email</label><br />
                <input type='email' name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type='password' name='password' onChange={handleChange} /><br />
                <input type='submit' value='Register' /><br />
            </form>
    </div>
  )
}

export default Register