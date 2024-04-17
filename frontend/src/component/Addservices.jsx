
import React, { useState } from 'react';
import { useFormik } from 'formik'


const Addservices = () => {
   //step:1 formik
   const Addservices = useFormik({
    initialValues: {
      productname:"",
      description:'',
      price:"",
      imageurl:""
    },
    onSubmit : async(values) => {
      console.log(values);

      const res = await fetch("http://localhost:3000/services/add",{
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      })

      console.log(res.status);
      if(res.status === 200) {
        enqueueSnackbar("User Added Successfully", {variant:"success"})
      }else{
        enqueueSnackbar("somthing went worng", {variant:"warning"})
      }
    }
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform further actions here, such as sending the product data to a server or updating state in a parent component
    console.log('Product added:', { productname, description, price, imageurl });
  };

  return (
    <div className="add-product-container">
      <h2>Add Services</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="productName">Product Name:</label>
        <input type="text" id="productname" value={Addservices.values.productname}  onChange={Addservices.handleChange} required />

        <label htmlFor="productDescription">Description:</label>
        <textarea id="description" value={Addservices.values.description}  onChange={Addservices.handleChange} required />

        <label htmlFor="productPrice">Price:</label>
        <input type="number" id="price" value={Addservices.values.price}  onChange={Addservices.handleChange} required />

        <label htmlFor="productImage">Image URL:</label>
        <input type="url" id="imageurl" value={Addservices.values.imageurl}  onChange={Addservices.handleChange} required />

        <button type="submit" className='probut'>Add Services</button>
      </form>
    </div>
  );
};

export default Addservices;
