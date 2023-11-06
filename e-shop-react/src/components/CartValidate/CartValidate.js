import { useContext } from 'react';
import { CartContext } from '../../context/cart';

const CartValidate = () => {

    const { cartItems, getCartTotal} = useContext(CartContext)

    return (

            <div>
            <div className="flex-col flex items-center bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-norma text-sm ">
            <h1 className=" sm:text-2xl font-bold" > Please check your order before the payment</h1>
           
            </div>
            
            <div className=" card grid sm:grid-cols-1 gap-4 px-10 place-items-center space-x-4 pb-10">
            {cartItems.map((item) => (
                <div className="flex justify-between items-center" key={item.id}>
                    <div className="flex gap-4">
                        <img src={item.image} alt={item.title} className="rounded-md  w-14 h-14" />
                        <div className="flex gap-8 justify-center">
                            <h1 className="sm:text-lg font-bold ">{item.title.slice(0, 20)}</h1>
                            <p className="text-gray-600 m-2">$ {item.price}</p>
                            <p className="text-black-600 m-2"> quantity x {item.quantity}</p>
                        </div>
                    </div>
                </div>
            ))}

            </div>

            <h1 className="text-lg font-bold">Total: ${getCartTotal()}</h1>

            <button
                className="px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700">
                                 
            Payment
            </button>

            

        </div>
    )
}

export default CartValidate;
