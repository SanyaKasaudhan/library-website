import Cards from "./components/Cards";
import Discount from "./components/Discount";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Fea from "./components/Fea";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Fea />
      <Discount />
      <Footer />
     {/* <Cards /> */}

     {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Navbar />} />
          <Route path="books" element={<Cards />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
