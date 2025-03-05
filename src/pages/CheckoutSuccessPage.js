import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CheckoutSuccessPage = () => {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <div>
      <h2>Order Successful!</h2>
      <p>Thank you for your purchase.</p>
      <Link to="/">Back to Store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
