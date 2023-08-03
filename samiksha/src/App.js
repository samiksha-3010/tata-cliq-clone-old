import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
// import Footar from './Component/Footar';
import Home from './Component/Home';
import Register from './Component/Register';
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import AllProduct from './Component/AllProduct';

import Cart from './Component/Cart';
import Profile from './Component/Profile';
import MultipleProduct from './MultipleProduct';

function App() {
  return (
    <div>
    <Navbar/>
       <Routes>
        <Route exact path='/'element={<Home/>}/>
       <Route exact path='/login' element={<Login/>} />
       <Route exact path='/Register' element={<Register/>}/>
       <Route exact path='addproduct'element={<AddProduct/>}/>
       <Route exact path='allproduct'element={<AllProduct/>}/>
       <Route exact path='profile'element={<Profile/>}/>
       <Route exact path='cart'element={<Cart/>}/>
       <Route exact path='multipleProduct'element={<MultipleProduct/>}/>


       </Routes>
     {/* <Footar/> */}


    
    </div>
  );
}

export default App;
