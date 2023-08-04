import React, { useContext, useEffect, useState } from "react";
import { router, useParams } from "react-router-dom";



import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Component/Context/AuthContext";

const SinglePro = () => {
  const [isUserLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const router = useNavigate();
  const [products, setProducts] = useState ([])  ;
  const [single, setSingle] = useState({});
  const { id } = useParams();
  // const
  const { state } = useContext(AuthContext);
  const [isProductExist, setIsProductExist] = useState(false);
  const [userData, setUserData] = useState({});
  const [productData, setProductsData] = useState({
    name: "",
    price: "",
    image: "",
    cetegory: "other",
  });
  const [allowUpdate, setAllowupdate] = useState(false);

  useEffect(() => {
    if (state) {
      setUserData(state.user);
    }
  }, [state]);
  useEffect(() => {
    const productFromDB = JSON.parse(localStorage.getItem("Products"));
    if (productFromDB) {
      setIsProductExist(true);
      setProducts(productFromDB);
    } else {
      setIsProductExist(false);
    }
  }, []);
  useEffect(() => {
    if (isProductExist) {
      if (id && products.length) {
        const res = products.find((pro) => pro.id == id);
        setSingle(res);
        console.log(single,"-setsingle")
      }
    }
  }, [id, products]);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Currrent-user"));
    // console.log
    if (user) {
      setIsLoggedIn(true);
      setCurrentUserEmail(user.email);
    }
  }, []);

  function addcart() {
    if (isUserLoggedIn) {
      const users = JSON.parse(localStorage.getItem("Users"));
      for (var i = 0; i < users.length; i++) {
        if (users[i].email === currentUserEmail) {
          users[i].cart.push(single);
          localStorage.setItem("Users", JSON.stringify(users));
          break;
        }
      }
      alert("product succesfull add to cart");
      router("/cart");
    }
    //  else {
    //   alert("you cant add product before login");
    // }
  }
  function Update() {
    setAllowupdate(true);
  }
  // function closeUpdate(){
  //   setAllowupdate(false)
  // }
  function handlechange(event) {
    setProductsData({
      ...productData,
      [event.target.name]: event.target.value,
    });
  }
  function slectRole(event) {
    setProductsData({ ...productData, ["cetegory"]: event.target.value });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const allProduct = JSON.parse(localStorage.getItem("Products"));
    for (var i = 0; i < allProduct.length; i++) {
      if (allProduct[i].id === id) {
        allProduct[i].image = productData.image;
        allProduct[i].name = productData.name;
        allProduct[i].price = productData.price;
        allProduct[i].cetegory = productData.cetegory;
        single.image = productData.image;
        single.name = productData.name;
        single.price = productData.price;
        single.cetegory = productData.cetegory;

        localStorage.setItem("Products", JSON.stringify(allProduct));
        setProducts({ name: "", price: "", image: "", cetegory: "other" });
        alert("product update ...");
      }
    }
  }
  return (
    <div  style={{width: "25%",border: "2px solid red"}}>
      <h2  style={{color: "red"}}>Single Product</h2>
      {allowUpdate ? (
        <form onSubmit={handleSubmit}>
          <lable>Product Name:</lable>
          <br />
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handlechange}
          />
          <br />
          <lable>Product Price:</lable>
          <br />
          <input
            type="text"
            name="price"
            value={productData.price}
            onChange={handlechange}
          />
          <br />
          <lable>Product Cetegory:</lable>
          <br />
          <input
            type="text"
            name="price"
            value={productData.cetegory}
            onChange={slectRole}
          />
          <br />
          <select onChange={slectRole}>
            <option value="other">other</option>
            <option value="mens">mens</option>
            <option value="women">women</option>
            <option value="kids">kids</option>
            <option value="electronic">electronic</option>
          </select>
          <br />
          <lable>Product image :</lable>
          <br />
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handlechange}
          />
          <br />
          <input type="submit" value="update profile" />
          {/* <p onClick={closeUpdate}> x</p> */}
        </form>
      ) : (
        []
      )}
      <div  style={{width: "25%",border: "2px solid red"}}>
        <img   style={{width: "25%",border: "2px solid red"}} src={single.image}  />
        <h2>Name:{single.name}</h2>
        <h2>Price:{single.price} </h2>
        <p>Cetegory:{single.Cetegory}</p>
      </div>
      {userData?.role === "seller" ? (
        <div>
          <button onClick={Update}>Update</button>
        </div>
      ) : (
        <div>
          <button onClick={addcart}>add to cart</button>
        </div>
      )}
    </div>
  );
};

export default SinglePro;
