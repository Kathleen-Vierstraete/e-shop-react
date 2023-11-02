
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
            <div className='container px-5 py-24 mx-auto'>
                <div key={products.id} className='lg:w-4/5 mx-auto flex flex-wrap justify-center'>
                
                    <img src={products.image} alt={products.title} className='rounded-md h-48'  />
                    <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                        <h1 className='text-lg uppercase font-bold'>{products.title}</h1>
                        <p className='mt-2 text-gray-600 text-sm pb-5'>{products.description}</p>
                        <p className='mt-2 text-gray-600 pb-5'>${products.price}</p>

                        <button className='px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700'>Add to cart</button>

                    </div>
                
                </div>
            </div>
 

    )
    }

export default SingleProduct;

                    /* <p className='product-rating'>product rating : {products.rating.rate}/5</p> */
                    /* returning an error for rate when it previously didn't, to do : check later */