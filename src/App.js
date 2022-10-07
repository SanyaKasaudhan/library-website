import Cards from "./components/Cards";
import Featured from "./components/Featured";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Featured />
     <Cards />
    </div>
  );
}

export default App;
