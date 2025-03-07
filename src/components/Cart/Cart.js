import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartContainer, CartBadge } from "./CartStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContainer>
      <Link to="/checkout" className="cart-link">
        <FontAwesomeIcon icon={faCartShopping} />
        {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
      </Link>
    </CartContainer>
  );
};

export default Cart;
