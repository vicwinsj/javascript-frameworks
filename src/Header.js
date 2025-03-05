import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          <span>🛒</span>
          <span className="cart-count">0</span> {}
        </Link>
      </div>
    </header>
  );
};

export default Header;
