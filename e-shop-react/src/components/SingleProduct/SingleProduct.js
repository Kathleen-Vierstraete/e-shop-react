
import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import  axios  from 'axios';

function SingleProduct() {

    const params = useParams();
    
    const [products, setProducts] = useState([])
    
        useEffect(()=> {
            axios.get(`https://fakestoreapi.com/products/${params.id}`)
            .then(res => {
                console.log(res)
                setProducts(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }, [params.id])

    return (
            <div className='single-card'>
                <div key={products.id} className='single-product-card'>
                
                <img src={products.image} alt={products.title} className='product-image'  />
                <div className='product-info'>
                    <h1 className='product-title'>{products.title}</h1>
                    <p className='product-description'>{products.description}</p>
                    <p className='product-price'>${products.price}</p>
                    <p className='product-rating'>product rating : {products.rating.rate}/5</p>
                </div>
                    <div className='product-add-div'>
                        <button className='product-add-button'>Add to cart</button>
                    </div>
                
                </div>
                </div>
 

    )
    }

export default SingleProduct;