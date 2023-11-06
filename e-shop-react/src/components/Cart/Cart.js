import { useContext } from 'react';
import { CartContext } from '../../context/cart';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Cart = () => {

    //using the useContext to get the cart state
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


    return (

        <div class="container mx-auto px-4 py-8">
            <div class="flex flex-col md:flex-row md:justify-between md:items-center">
                <h1 class="text-2xl font-bold my-4">Your shopping Cart</h1>
            </div>

      
            <div class="mt-8 my-3">
            {cartItems.map((item) => (
                <>
                <div className="flex flex-col md:flex-row border-b border-gray-400 py-4" key={item.id}>
                    <div className="flex-shrink-0">
                        <img src={item.image} alt={item.title} className="rounded-md sm:w-24 sm:h-24 w-14 h-14" />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <h2 class="text-lg font-bold">{item.title.slice(0,20)}</h2>
                        <div class="mt-4 flex items-center">
                            <span class="mr-2 text-gray-600">Quantity: </span>
                            <div class="flex items-center">
                            <button
                        className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                        onClick={() => {
                        removeFromCart(item)
                        }}
                    >
                        -
                    </button>
                    <span class="mx-2 text-gray-600">{item.quantity}</span>
                    <button
                            className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                            onClick={() => {
                            addToCart(item)
                            }}
                        >
                        +
                    </button>
                    </div>
                    <span class="ml-2 font-bold">$ {item.price}</span>

                        </div>
                    </div>
                    
                </div>
                </>
          
            )
        )
    
    }
  </div>




  {
    cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                <button
                className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 mt-4"
                onClick={() => {
                    clearCart()
                }}
                >
                Clear cart
                </button>
        </div>
    ) : (
            <h1 className="text-lg font-bold">Your cart is empty</h1>
    )
  }

            <div> 
                <Link to="/cart-validation" className=''>
                    <button className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 mt-4">
                    validate                
                    </button>
                </Link >            
            </div>
        </div>  
             
                            
                            
            
      )
   
}

Cart.propTypes = {
    showModal: PropTypes.bool,
    toggle: PropTypes.func
  }

export default Cart;