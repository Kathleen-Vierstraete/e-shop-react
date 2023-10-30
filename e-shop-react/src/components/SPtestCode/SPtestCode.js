import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import  axios  from 'axios';


function SingleProduct() {

    const [product, setProduct] = useState([]) //declaring a const to initialize the state

    const productId = useParams(); 

    console.log(productId); // okay got the right id. 
  
    //making an async function to have a promise
    async function getProducts() {
      const response = await fetch('https://fakestoreapi.com/products') // fetching the products from the API (online and free to use for now)
      const data = await response.json() // waiting for the response 
      setProducts(data.products) // retrieving the data from the API

      console.log(products);
    }
  
    //calling the function in the useEffet hook, to show the elements
    useEffect(() => {
      getProducts()
    }, []);

    
    
 


    return (
        <div className='cards'>
        {
        //mapping aka listing the items
        products.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.thumbnail} alt={product.title} className='product-image'  />
              <div className='product-info'>
                <h1 className='product-title'>{product.title.slice(0, 27)}</h1>
                <p className='product-description'>{product.description.slice(0, 35)}...</p>
                <p className='product-price'>${product.price}</p>
              </div>
              <div className='product-add-div'>
                <button className='product-add-button'>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>
    )
}



export default SingleProduct ;







// import React, { useState, useEffect } from 'react' //importing the useState to hook on the page and useEffect to fetch the products
// import './SingleProduct.css';
// import axios from "axios";
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';



// export default class SingleProduct extends React.Component {

//   state =  {
//     products : []
//   }

//   componentDidMount() {
//     axios.get('https://fakestoreapi.com/products')
//       .then(result => {
//         this.setState({ products : result.data})
    


//       });  
//   }



//   render() {
//       return (
       
//         <h1>{thisProduct.title}</h1>
//     )
//       }
// }

//code helpers 

//   const { slug } = useParams();
//replace with id

// const {productId} = useParams(); 

// const thisProduct = products.find(prod => prod.id === productId)
// // console.log(thisProduct);



    // //making an async function to have a promise
    // async function getProduct() {
    //   const response = await fetch(`https://fakestoreapi.com/products/${productId}`) // fetching the products from the API (online and free to use for now)
    // //   const data = await response.json() // waiting for the response 
    //   setProduct(result.data) // retrieving the data from the API 
    //   console.log(data);
    // }

   
         
    // //calling the function in the useEffet hook, to show the elements
    // useEffect(() => {
    //   getProduct()
    // }, [])
    
    // const thisProduct = products.find((product) => product.id === parseInt(productId))

    // console.log(thisProduct)

    // useEffect(() => {
    //     if ( productId ) {
    //         axios.get(`https://fakestoreapi.com/products/${productId}`)
    //             .then(res => {
    //                 console.log(res)
    //                 setProduct(res.data)
    //             })
    //             .catch(err => {
    //                 console.log(err)
    //             })
    //     }
    // }, [ productId ]);