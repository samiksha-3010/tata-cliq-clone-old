

import React, { useState, useEffect } from 'react'

const AllProduct = () => {
    const [IsProductExist, setIsProductExist] = useState(false)
    const [products, setProducts] = useState()

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
  return (
    <div>
       
        {!IsProductExist? <div>No Product</div>
      : 
      <div style={{display: "flex", justifyContent: "space-around"}}>
      {products && products.map((pro)  =>(
     <div  style={{width:"23", border:"2px solid red",}}  key={pro.name}>
     <img src={pro.image}  />
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



