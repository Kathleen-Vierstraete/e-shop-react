import React, { useState, useEffect, useContext } from 'react' //importing the useState to hook on the page and useEffect to fetch the products
// import './Homepage.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart'
import Cart from './../Cart/Cart'

const Homepage = () => {

  const [products, setProducts] = useState([]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
    .then((result) => {
  
    setProducts(result.data)
    setLoading(false)
  })
  .catch((error)=>{
    console.log(error)
  }
  )  
  },
  []);



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

      return (
        

        <div className='flex flex-col justify-center bg-stone-200 '>

        <div className='flex justify-between items-center px-20 py-5'>
          <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Let's enjoy shopping</h1>

          {!showModal && <button className='px-4 py-2 bg-indigo-800 text-white text-xs font-bold uppercase rounded hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700'
            onClick={toggle}
          >Cart ({cartItems.length})</button>}
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10 place-items-center space-x-4 pb-10 '>
          { loading ? <h1> loading ....</h1>  : 
        
        products.map((product)  =>  {

          return (

            <div key={product.id} className='bg-white shadow-md rounded-lg px-10 py-10'>
              <div className='link-card'>
                <Link to={`/product/${product.id}`} className=''>
                <img src={product.image} alt={product.title} className='rounded-md h-48 w-48'  />

                <div className='mt-4'>
                
                  <h1 className='text-lg uppercase font-bold'>{product.title.slice(0, 20)}</h1>
                  <p className='mt-2 text-gray-600 text-sm'>{product.description.slice(0, 25)}...</p>
                  <p className='mt-2 text-gray-600'>$ {product.price}</p>
                  
                </div>
                </Link>
              </div>
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
          )

          }
        )
        }
      
      </div>
      
      <Cart showModal={showModal} toggle={toggle} />
      </div>
      )

      }
export default Homepage;



// <Link to={`/product/${product.id}`} className='product-link'>
//</Link>
//function Homepage() {

    // const [products, setProducts] = useState([]) //declaring a const to initialize the state
  
    // //making an async function to have a promise
    // async function getProducts() {
    //   const response = await fetch('https://dummyjson.com/products') // fetching the products from the API (online and free to use for now)
    //   const data = await response.json() // waiting for the response 
    //   setProducts(data.products) // retrieving the data from the API
    // }
  
    // //calling the function in the useEffet hook, to show the elements
    // useEffect(() => {
    //   getProducts()
    // }, [])

    //doing the same with axios

    //what the page will return in html with the data gathered from the API
//     return (
//         <div className='cards'>
//         {
//         //mapping aka listing the items
//         products.map(product => (
//             <div key={product.id} className='product-card'>
//               <img src={product.thumbnail} alt={product.title} className='product-image'  />
//               <div className='product-info'>
//                 <h1 className='product-title'>{product.title.slice(0, 27)}</h1>
//                 <p className='product-description'>{product.description.slice(0, 35)}...</p>
//                 <p className='product-price'>${product.price}</p>
//               </div>
//               <div className='product-add-div'>
//                 <button className='product-add-button'>Add to cart</button>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     )
// }

// export default Homepage;



//different tests from youtube tutorials provided

    // state = {
    //     products : [],
    // }

    // componentDidMount() {
    //     axios.get('https://dummyjson.com/products')
    //         .then(result => {
    //           console.log(result);
    //             this.setState({products: result.data})
    //         });
    // }
  
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   const getProducts = () => {
    //     axios
    //     .get('https://dummyjson.com/products')
    //     .then ((result) => setProducts(result.data))
    //     //console.log(result))
    //     // setProducts(result.data))
        
    //   };

    //   getProducts();
    // }, []);