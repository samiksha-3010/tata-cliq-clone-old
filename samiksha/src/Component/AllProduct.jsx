

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AllProduct = () => {
    const [IsProductExist, setIsProductExist] = useState(false)
    const [products, setProducts] = useState()
    const router = useNavigate();

    console.log(products,"-products")
    useEffect (()=>{
        const productsFormDb = JSON.parse(localStorage.getItem("Products"))
        if(productsFormDb){
            setIsProductExist(true);
          setProducts(productsFormDb)
        }else{
            setIsProductExist(false) 
        }
    },[])
    const redirect = (id) =>{
        console.log(id, "-id")
        router(`/multipleProduct/${id}`)
    }
  return (
    <div>
        {!IsProductExist? <div>No Product</div>
      : 
      <div style={{display: "flex", justifyContent: "space-around",  border:"1px solid blue", flexWrap:"wrap", }}>
      <h2>All Product</h2>

      {products && products.map((pro) =>(
     <div style={{width:"20%", border:"2px solid red", height: "100px", flexWrap:"wrap", }}  key={pro.name}>
     <img  style ={{width:"100%" , border:"1px solid red", height:"300px", flexWrap:"wrap",}} src={pro.image}/>

     <h3>Name:{pro.name} </h3>
     <h3>Cetegory:{pro.cetegory}</h3>
     <h4>Price: {pro.price}</h4>
     </div>
      ))}
      </div> 
    }
    </div>
  )
}
export default AllProduct;



