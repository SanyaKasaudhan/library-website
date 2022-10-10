import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route , Switch as Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllBook from "./components/AllBook";
import {books} from './components/data'
import BookInfo from "./components/BookInfo";
import Cart from "./components/Cart";
function App() {
  return (


    <Router>
      <Routes>
      <div className="App">
        <Navbar />
        <Route path="/" exact component={Home} />
        {/* <Home /> */}
        <Route path="/books" exact render={() => <AllBook books={books} />} />
        <Route path="/books/:id" render={() => <BookInfo books={books} />} />
        <Route path="/cart" render={() => <Cart books={books} />} />
        
        <Footer />
      </div>
      </Routes>
    </Router>
  );
}

export default App;
