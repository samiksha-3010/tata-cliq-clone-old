
import React, { useEffect, useState } from 'react'

import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const [dropDown, setDropdown] = useState(false);
    const [dropUp, setDropUp] = useState(true)

    function open() {
        setDropdown(true)
        setDropUp(false)
    }
    function close() {
        setDropdown(false)
        setDropUp(true)
    }

    const router = useNavigate()
    function togo() {
        router('/login/')
    }
    function home() {
        router('/home')
    }
    function mensWear() {
        router('/Men')
    }
    function CartPage() {
        router('/Cartpage')
    }

    function Kitchen() {
        router('/Kitchen')
    }
    function Beauty() {
        router('/Beauty')
    }
    function gaudget() {
        router('/gaudget')
    }
    function kids() {
        router('/kids')
    }
    function women() {
        router('/women')
    }
    function  Jewellery(){
        router ('/Jewellery')
    }
    function Accessories(){
        router('/Accessories')
    }
    function Mywishlest(){
        router ('/Mywishlest')
    }


    return (
        <>

            <div id='navbar'>

                <div id='divfirst' onClick={home}>
                    <img src='https://coupontrends.in/img/1477323360_tatacliq.png' />

                </div>
                <div id='divsecond'>
                    <div id='text'>
                        <span>Tata Cliq Luxiary</span>

                        <p>Cilq Cash</p>
                        <p>Gift Card</p>
                        <p>Cliq Care </p>
                        <p>Track Order</p>
                        <p onClick={togo}>SignIn/SighUp</p>
                        <p     onClick={() => router("/addproduct")}> Add product</p>
                        {/* <p>All Product</p> */}
                        <i class="fa-solid fa-chevron-down"></i>
                        {/* <div id='profile-section'>
                            <p>profile section-drp-down</p>
                            <div className='my-profile'>
                                <div className='image'> <img style={{width: '50%', height: '50px'}} src='https://www.tatacliq.com/src/general/components/img/profile.png'/>
                                <p>My</p>
                                </div>
                                <div><p>My Acount</p></div>
                            </div>
                            </div> */}
                        </div>
                  
                   
                    <div id='icon'>
                        <div id='child1' onMouseEnter={open} onMouseLeave={close}>
                            <p  onClick={() => router("/allproduct")}>Cetegries</p>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        {/* ********drop down******** */}
                        {dropDown && <div id='drop-down' onMouseEnter={open} onMouseLeave={close}>
                            <div className='women-fashion' onClick={women} >
                                <p>Women-Fashion</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={mensWear}>
                                <p>men-Fashion</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={kids}>
                                <p>Kid,s-Fashion</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={Kitchen}>
                                <p>Home-Kitchen</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={Beauty}>
                                <p>Beauty</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={ Jewellery}>
                                <p>Jewellery</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={gaudget}>
                                <p>Gadgets</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>
                            <div className='women-fashion' onClick={Accessories} >
                                <p>Accessories</p>
                                <i class="fa-solid fa-chevron-down"></i>

                            </div>

                        </div>}


                        <div id='brand'>
                            <p>Brand</p>
                            <i class="fa-solid fa-chevron-down"></i>
                        </div>
                        <div id='search'>
                            <div id='search1'>
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type='search' placeholder='search for cetegreis' />
                            </div>
                        </div>
                        <div className='bag-cart '>
                        <div id='bag'onClick={CartPage} >
                            {/* <i class="fa-regular fa-heart"></i> */}
                            <i class="fa-solid fa-bag-shopping"></i> </div>
                            <div onClick={Mywishlest} id='wish'> <i class="fa-regular fa-heart"></i></div>
                        </div>
                       </div>
                        </div>


            </div>



            {/* </div> */}

        </>
    )
}

export default Navbar