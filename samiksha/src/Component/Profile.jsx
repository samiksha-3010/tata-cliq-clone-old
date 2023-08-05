





import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import { AuthContext } from './Context/AuthContext';
 import './Profile.css'
;

const Profile = () => {

    <div id='left-page'>
    <div id='menu'><p>Menu</p></div>
      <div id='icon-image'>
           </div>
           <div  className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/general/components/img/WL5.svg' />
            <span>My Wishlist</span>
             </div>
             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/general/components/img/order-history.svg' />
            <span>Order History</span>
             </div>

             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/account/components/img/Neupass_monochrome.svg' />
            <span>Neu Pass</span>
             </div>
             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/account/components/img/addressbook.svg' />
            <span>Adress Book</span>
             </div>
             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/account/components/img/brand.svg' />
            <span>Brand</span>
             </div>
             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/account/components/img/card.svg' />
            <span>Saved Payment</span>
             </div>
             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/account/components/img/alert.svg' />
            <span>Alert& Coupan</span>
             </div>
             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/account/components/img/giftCards.svg' />
            <span>Gift Card</span>
             </div>
             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/account/components/img/cliqCash.svg' />
            <span>cLIQ Cash</span>
             </div>
             <div className='wishlest-icon'>
            <img src='https://www.tatacliq.com/src/account/components/img/addressbook.svg' />
            <span>Manage Notification</span>
             </div>
             <div className='setting'>
            <img src='https://www.tatacliq.com/src/account/components/img/settingsRed.svg' />
            <span>Setting</span>
             </div>

    </div>

    

    

    

    const { Login, state } = useContext(AuthContext)

    const [userData, setUserData] = useState({});
    const router = useNavigate()

    console.log(userData, "userData")

    // useEffect(() => {
    //     if (!state?.user?.name) {
    //         router('/login')
    //     }
    // }, [state])

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("Currrent-user"));
        // if (!currentUser) {
        //     router("/login")
        // }
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUsers) {
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                    setUserData(allUsers[i])
                }
            }
        }
    }, [])

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("Currrent-user"));
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                allUsers[i].name = userData.name;
                allUsers[i].password = userData.password;
                currentUser.password = userData.password;
                currentUser.name = userData.name;
            }
        }
        Login(currentUser)
        localStorage.setItem("Currrent-user", JSON.stringify(currentUser))
        localStorage.setItem("Users", JSON.stringify(allUsers))
        setUserData({})
        alert("Profile updated.")
    }


    return (
        <div>
            <h1>Profile</h1>
            <form onSubmit={handleSubmit}>
                <label>Change Name</label><br />
                <input type='text' value={userData.name} name="name" onChange={handleChange} /><br />
                <label>Change Password</label><br />
                <input type='text' value={userData.password} name="password" onChange={handleChange} /><br />
                <input type='submit' />
            </form>

        </div>
    )
}

export default Profile