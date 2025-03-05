import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon">
      <Link to="/checkout" className="cart-link">
        🛒
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </Link>
    </div>
  );
};

export default CartIcon;
