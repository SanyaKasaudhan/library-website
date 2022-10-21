import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route , Switch as Routes} from "react-router-dom";
import Footer from "./components/Footer";
import React,  { useState, useEffect } from "react";
import Home from "./pages/Home";
import AllBook from "./components/AllBook";
import {books} from './components/data'
import BookInfo from "./components/BookInfo";
import Cart from "./components/Cart";
function App() {

  const [cart, setCart] = useState([]);

  function addToCart(book){
    setCart([...cart, {...book, quantity:1}])
   
  }

  function changeQuantity(book, quantity){
    setCart(cart.map((item)=>
    item.id===book.id ?{
      ...item,
      quantity: +quantity,
    }
    :item))
  }

  function noOfItems(){
    let counter=0;
    cart.forEach(item =>{
      counter+= item.quantity
    })
    return counter
  }
  function removeItem(item){
    setCart(cart.filter(book=> book.id!== item.id))
  }
  useEffect(() => {
    console.log("cart", cart)
  }, [cart]);
  return (
    
    <Router>
      <Routes>
      <div className="App">
        <Navbar noOfItems={noOfItems()} />
        <Route path="/" exact component={Home} />
        {/* <Home /> */}
        <Route path="/books" exact render={() => <AllBook books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
        <Route path="/cart" render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        
        <Footer />
      </div>
      </Routes>
    </Router>
  );
}

export default App;
