import './App.css';
import Footer from './components/Footer/Footer';

import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import SingleProduct from './components/SingleProduct/SingleProduct';
import { CartProvider } from './context/cart.jsx'


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
      <CartProvider>
        <Router>
          <Header /> 
            <Routes>

              <Route path="/" element={<Homepage />} />
              <Route path="/product/:id" element={<SingleProduct />} />

            </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;

// code exemples
{/* <Route path="/chien/:slug"

<Router>
<div>
  <Header />
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/first-page" element={<Firstpage />} />
    <Route path="/second-page" element={<Secondpage />} />
  </Routes>
  <Footer />
</div>
</Router> */}