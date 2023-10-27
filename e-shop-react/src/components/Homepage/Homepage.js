import { useState, useEffect } from 'react' //importing the useState to hook on the page and useEffect to fetch the products
import './Homepage.css';

function Homepage() {

    const [products, setProducts] = useState([]) //declaring a const to initialize the state
  
    //making an async function to have a promise
    async function getProducts() {
      const response = await fetch('https://dummyjson.com/products') // fetching the products from the API (online and free to use for now)
      const data = await response.json() // waiting for the response 
      setProducts(data.products) // retrieving the data from the API
    }
  
    //calling the function in the useEffet hook, to show the elements
    useEffect(() => {
      getProducts()
    }, [])

    //what the page will return in html with the data gathered from the API
    return (
        <div className='cards'>
        {
        //mapping aka listing the items
        products.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.thumbnail} alt={product.title} className='product-image'  />
              <div className='product-info'>
                <h1 className='product-title'>{product.title.slice(0, 27)}</h1>
                <p className='product-description'>{product.description.slice(0, 35)}...</p>
                <p className='product-price'>${product.price}</p>
              </div>
              <div className='product-add-div'>
                <button className='product-add-button'>Add to cart</button>
              </div>
            </div>
          ))
        }
      </div>


    )
}

export default Homepage;