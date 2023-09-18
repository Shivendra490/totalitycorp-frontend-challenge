import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/cart/Cart";
import Bar from "./components/nav/Bar";
import AllProductsPage from "./components/AllProductsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Bar />

        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
