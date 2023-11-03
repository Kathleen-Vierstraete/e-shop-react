import { useContext } from 'react'
import { CartContext } from '../../context/cart'
import PropTypes from 'prop-types'

const Cart = ({showModal, toggle}) => {

    //using the useContext to get the cart state
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


    return (
        showModal && (

        <div className="flex-col flex items-center fixed inset-0 sm:left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm ">
            <h1 className=" sm:text-2xl font-bold">Cart</h1>
            <div className="absolute right-16 top-10">
                <button
                className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                onClick={toggle} >                
                Close
                </button>
            </div>

            <div className="grid sm:grid-cols-1 gap-4 px-10 place-items-center space-x-4 pb-10">
            {cartItems.map((item) => (
                <div className="flex justify-between items-center" key={item.id}>
                    <div className="flex gap-4">
                        <img src={item.image} alt={item.title} className="rounded-md sm:w-24 sm:h-24 w-14 h-14" />
                        <div className="flex gap-8 justify-center">
                            <h1 className="sm:text-lg font-bold">{item.title.slice(0, 20)}</h1>
                            <p className="text-gray-600">${item.price}</p>
                        </div>
                    </div>

                <div className="flex gap-4">
   
                    <button
                        className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                        onClick={() => {
                        removeFromCart(item)
                        }}
                    >
                        -
                    </button>
                <p>{item.quantity}</p>

                    <button
                            className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                            onClick={() => {
                            addToCart(item)
                            }}
                        >
                        +
                    </button>
                    
                </div>
                </div>
            )
        )
    }
  </div>

  {
    cartItems.length > 0 ? (
        <div className="flex flex-col justify-between items-center">
            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>
                <button
                className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
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
        </div>
      )
    )
}

Cart.propTypes = {
    showModal: PropTypes.bool,
    toggle: PropTypes.func
  }

export default Cart;