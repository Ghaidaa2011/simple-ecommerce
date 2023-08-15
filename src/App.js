import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Slider from "./components/Slider";
import About from './components/About';
import ProductDetails from './components/ProductDetails';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Slider/>
              <ProductList/>
            </>} />
          <Route 
          path="/About"
          element={<About />} />
          <Route
          path="Product/:ProductId"
          element={<ProductDetails/>}
          />
      </Routes>
    </div>
  );
}

export default App;
