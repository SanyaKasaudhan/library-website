import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AllBook from "./components/AllBook";
import {books} from './components/data'
function App() {
  return (


    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        {/* <Home /> */}
        <Route exact path="/books" render={() => <AllBook books={books} />} />
        
        <Footer />
      </div>

    </Router>
  );
}

export default App;
