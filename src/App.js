import './App.css';
import {useState, useEffect} from 'react'
import { BrowserRouter as Main, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import NavbarSecondary from './components/NavbarSecondary';
import FooterMain from './components/FooterMain';

import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ContactUs from './components/ContactUs';

import productsData from "./database/products-data";
import userDataObj from './database/user-data'

function App() {
  
  const [products, setProducts] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    // fetch products data here and update the state
    setProducts(productsData);
    // fetch user data here and update the state
    setUserData(userDataObj);
  }, []);
  
  function itemInCartStat(productId = null, userDataObj = {}) {
    if (productId && userDataObj.cart.products) {
      return Object.keys(userDataObj.cart.products).includes(productId);
    }
    return false;
  }
  
  function addToCart(event) {
    try {
      let newUserDataObj = {...userData}
      
      const target = event.target.closest('.product-count-control');
      const productCard = target.closest('.product-card');
      const pID = productCard.getAttribute('data-p-id');
      
      let itemInCart = itemInCartStat(pID, newUserDataObj);
      
      if (pID && parseInt(pID)) {
        if(!itemInCart){
          newUserDataObj.cart.products[pID] = { "itemCount": 1};
        }
        else{
          delete newUserDataObj.cart.products[pID];
        }

        itemInCart = !itemInCart;
      }

      
      setUserData(newUserDataObj);

      return itemInCart;
    } catch (error) {
      console.log("Product Not Found For This ID.");
    }
  }
  
  const context = {products: [products, setProducts], userData: [userData, setUserData], AddToCart: addToCart, ItemInCart: itemInCartStat}; 
  return (
    <Main>
    <div className="App">
      <header className="App-header">
        <Navbar Context={context}/>
        <NavbarSecondary/>
      </header>

      <main className="bg-light">
        <Routes>
          <Route exact path='/' element={<Home Context={context}/>}></Route>
          <Route exact path='/products' element={<Products Context={context}/>}></Route>
          <Route exact path='/products/:category' element={<Products Context={context}/>}></Route>
          <Route exact path='/login' element={<Login Context={context}/>}></Route>
          <Route exact path='/register' element={<Register Context={context}/>}></Route>
          <Route exact path='/forgot-password' element={<ForgotPassword Context={context}/>}></Route>
          <Route exact path='/cart' element={<Cart Context={context}/>}></Route>
          <Route exact path='/contact-us' element={<ContactUs Context={context}/>}></Route>
        </Routes>
      </main>

      <footer className="App-footer">
        <FooterMain/>
      </footer>
    </div>
    </Main>
  );
}

export default App;
