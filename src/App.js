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
    setCart([...cart, book])
    // const dupItem= cart.find(item => +item.id === +book.id)
    // if(dupItem){
    //   dupItem.quantity+=1;
    //   setCart(cart.map(item=>{
    //     if(item.id=== dupItem.id){
    //       return{
    //         ...item,
    //         quantity: item.quantity+1,
    //       }
    //     }
    //     else{
    //       return item
    //     }
    //   }))
    // }
    // else{
    // setCart([...cart, {...book, quantity:1}]);
    // }
  }

  useEffect(() => {
    console.log("cart", cart)
  }, [cart]);
  return (
    
    <Router>
      <Routes>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        {/* <Home /> */}
        <Route path="/books" exact render={() => <AllBook books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} addToCart={addToCart}/>} />
        <Route path="/cart" render={() => <Cart books={books} />} />
        
        <Footer />
      </div>
      </Routes>
    </Router>
  );
}

export default App;
