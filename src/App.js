import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductData from "./pages/product/ProductData";
import ProductDetail from "./pages/product/ProductDetail";
import Service from "./pages/service/Service";
import ServiceInfo from "./pages/service/ServiceInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="product/detail" element={<ProductDetail />} />
        <Route path="product/data" element={<ProductData />} />
        <Route path="service" element={<Service />} />
        <Route path="service/:id" element={<ServiceInfo />} />
      </Routes>
    </div>
  );
}

export default App;
