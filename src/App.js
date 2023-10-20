import Navbar from "./components/navbar";
import ProductList from "./components/productsList";
import Slider from "./components/slider";
import About from "./components/About";
import ProductDetail from "./components/ProductDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductList />
            </>
          }
        />
        <Route
          path="about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="product/:productId"
          element={
            <>
              <ProductDetail />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
