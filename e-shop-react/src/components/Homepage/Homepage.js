import React, { useState, useEffect, useContext } from 'react' //importing the useState to hook on the page and useEffect to fetch the products
import './Homepage.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart'
import Cart from './../Cart/Cart'

const Homepage = () => {

//   const [products, setProducts] = useState([]); 

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//     .then(result => 
//     // console.log(result.data)
//     setProducts({products : result.data})
//     )
//   },
//   console.log(products)
// ,  []);

const [products, setProducts] = useState([]); 

const getProducts = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  setProducts(data);
};

useEffect(() => {
  getProducts();
}, []);

//to handle the cart in general
const { cartItems, addToCart } = useContext(CartContext)

//to display the modal
const [showModal, setShowModal] = useState(false)

const toggle = () => {
  setShowModal(!showModal)
}

      return (

          <div className='flex justify-between items-center px-20 py-5'>
            <h1 className='text-2xl uppercase font-bold mt-10 text-center mb-10'>Let's enjoy shopping !!</h1>
            {!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
              onClick={toggle}
            >Cart ({cartItems.length})</button>}



        <div className='cards'>
        {products.map(product =>  

            <div key={product.id} className='product-card'>
              <div className='link-card'>
                <Link to={`/product/${product.id}`} className='product-link'>
                <img src={product.image} alt={product.title} className='product-image'  />

                <div className='product-info'>
                
                  <h1 className='product-title'>{product.title.slice(0, 27)}</h1>
                  <p className='product-description'>{product.description.slice(0, 35)}...</p>
                  <p className='product-price'>${product.price}</p>
                  
                </div>
                </Link>
              </div>
              <div className='product-add-div'>
                <button onClick={() => addToCart(product)}  className='product-add-button'>Add to cart</button>
              </div>
              
            </div>
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