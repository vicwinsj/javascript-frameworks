import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import CartPage from "./CartPage";
import ProductPage from "./ProductPage";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
