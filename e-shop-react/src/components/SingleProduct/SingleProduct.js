
import React,{useEffect, useState, useContext} from 'react';
import { useParams } from 'react-router-dom';
import './SingleProduct.css';
import  axios  from 'axios';
import { CartContext } from '../../context/cart';
import Cart from './../Cart/Cart';

function SingleProduct() {

    //defining the param const to then retreive the info from the url, in this case the id
    const params = useParams();
    
    //setting the const products and setProduct via the useState
    const [product, setProduct] = useState([])
    
    //getting the info/data from the API 
        useEffect(()=> {
            axios.get(`https://fakestoreapi.com/products/${params.id}`) //inserting the param id to get the right API
            .then(res => {
                console.log(res)
                setProduct(res.data)
            })
            .catch(err =>{
                console.log(err)
            })
        }, [params.id])

        //to handle the cart in general
        const { cartItems, addToCart, removeFromCart } = useContext(CartContext)

        //to display the modal
        const [showModal, setShowModal] = useState(false)

        const toggle = () => {
        setShowModal(!showModal)
}

const handleRemoveFromCart = (product) => {
    removeFromCart(product);
  };


        //returning the html with the info that is to display
    return (

        <div className='flex flex-col justify-center bg-stone-200 '>

        <div className='flex justify-between items-center px-20 py-5'>
          <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Let's enjoy shopping</h1>

          {!showModal && <button className='px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700'
            onClick={toggle}
          >Cart ({cartItems.length})</button>}
        </div>
            <div className='container px-5 py-24 mx-auto'>
                <div key={product.id} className='lg:w-4/5 mx-auto flex flex-wrap justify-center'>
                
                    <img src={product.image} alt={product.title} className='rounded-md h-48'  />
                    <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
                        <h1 className='text-lg uppercase font-bold'>{product.title}</h1>
                        <p className='mt-2 text-gray-600 text-sm pb-5'>{product.description}</p>
                        <p className='mt-2 text-gray-600 pb-5'>$ {product.price}</p>

                        <div className='mt-6 flex justify-center items-center '>
                <div className='inter-div'> 
            {
              !cartItems.find(item => item.id === product.id) ? (
                <button className='px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700'
                  onClick={() => {
                    addToCart(product)
                  }
                  }
                  >
                    Add to cart
                  </button>
              ) : (
                <div className="flex gap-4">
                  <button
                  className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                  onClick={() => {
                    const cartItem = cartItems.find((item) => item.id === product.id);
                    if (cartItem.quantity === 1) {
                      handleRemoveFromCart(product);
                    } else {
                      removeFromCart(product);
                    }
                  }}
                >
                  -
                </button>

                <p className='text-gray-600'>{cartItems.find(item => item.id === product.id).quantity}</p>

                   <button
                  className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                  onClick={() => {
                    addToCart(product)
                  }}
                >
                  +
                </button>
              </div>
              )
            }
          </div>
          </div>

                    </div>
                
                </div>
            </div>
            <Cart showModal={showModal} toggle={toggle} />
        </div>
 

    )
    }

export default SingleProduct;

                    /* <p className='product-rating'>product rating : {products.rating.rate}/5</p> */
                    /* returning an error for rate when it previously didn't, to do : check later */