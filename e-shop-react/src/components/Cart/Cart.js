import { useContext } from 'react'
import { CartContext } from '../../context/cart'
import PropTypes from 'prop-types'

const Cart = ({showModal, toggle}) => {

    //using the useContext to get the cart state
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } = useContext(CartContext)


    return (
        showModal && (

        <div className="main-cart-div">
            <h1 className="h1-cart">Cart</h1>
            <div className="flex flex-col gap-4">
    
            {cartItems.map((item) => (
                <div className="flex justify-between items-center" key={item.id}>
                    <div className="flex gap-4">
                        <img src={item.thumbnail} alt={item.title} className="rounded-md h-24" />
                        <div className="flex flex-col">
                            <h1 className="text-lg font-bold">{item.title}</h1>
                            <p className="text-gray-600">{item.price}</p>
                        </div>
                    </div>

                <div className="flex gap-4">
                    <button
                        className="plus-button"
                        onClick={() => {
                        addToCart(item)
                        }}
                    >
                        +
                    </button>

                <p>{item.quantity}</p>

                    <button
                        className="less-button"
                        onClick={() => {
                        removeFromCart(item)
                        }}
                    >
                        -
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
                className="clear-button"
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