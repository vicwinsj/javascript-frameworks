import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/Home/HomePage";
import ContactPage from "./pages/Contact/ContactPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import CheckoutSuccessPage from "./pages/CheckoutSuccess/CheckoutSuccessPage";
import ProductPage from "./pages/Product/ProductPage";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout-success" element={<CheckoutSuccessPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
};

export default App;
