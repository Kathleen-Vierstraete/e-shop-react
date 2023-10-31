
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import  axios  from 'axios';

function SingleProduct() {

    //defining the param const to then retreive the info from the url, in this case the id
    const params = useParams();
    
    //setting the const products and setProduct via the useState
    const [products, setProducts] = useState([])
    
    //getting the info/data from the API 
        useEffect(()=> {
            axios.get(`https://fakestoreapi.com/products/${params.id}`) //inserting the param id to get the right API
            .then(res => {
                console.log(res)
                setProducts(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }, [params.id])

        //returning the html with the info that is to display
    return (
            <div className='single-card'>
                <div key={products.id} className='single-product-card'>
                
                <img src={products.image} alt={products.title} className='product-image'  />
                <div className='product-info'>
                    <h1 className='product-title'>{products.title}</h1>
                    <p className='product-description'>{products.description}</p>
                    <p className='product-price'>${products.price}</p>

                </div>
                    <div className='product-add-div'>
                        <button className='product-add-button'>Add to cart</button>
                    </div>
                
                </div>
                </div>
 

    )
    }

export default SingleProduct;

                    /* <p className='product-rating'>product rating : {products.rating.rate}/5</p> */
                    /* returning an error for rate when it previously didn't, to do : check later */