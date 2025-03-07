import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  CheckoutContainer,
  CartItems,
  CartItem,
  ItemImageContainer,
  ItemImage,
  ItemContent,
  CartTotal,
} from "./CheckoutStyles";
import { BaseButton } from "../../components/Button/ButtonStyles";

const CheckoutPage = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout-success");
  };

  if (cart.length === 0) {
    return (
      <div>
        <h2>Cart is empty!</h2>
      </div>
    );
  }

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const total = cart.reduce(
    (sum, item) => sum + item.discountedPrice * item.quantity,
    0
  );

  return (
    <CheckoutContainer>
      <CartItems>
        <h2>Cart</h2>
        {cart.map((item) => (
          <CartItem key={item.id}>
            <ItemImageContainer>
              <ItemImage src={item.image.url} alt={item.image.alt}></ItemImage>
            </ItemImageContainer>
            <ItemContent>
              <h3>{item.title}</h3>
              <p>
                Quantity: <strong>{item.quantity}</strong>
              </p>
              <p>
                Price: $ <strong>{item.discountedPrice.toFixed(2)}</strong>
              </p>
              <p>
                Subtotal: ${" "}
                <strong>
                  {(item.discountedPrice * item.quantity).toFixed(2)}
                </strong>
              </p>
            </ItemContent>
          </CartItem>
        ))}
      </CartItems>
      <CartTotal>
        <p>
          Quantity: <strong>{totalItems}</strong>
        </p>
        <p>
          Total: $ <strong>{total.toFixed(2)}</strong>
        </p>
        <BaseButton onClick={handleCheckout}>Place order</BaseButton>
      </CartTotal>
    </CheckoutContainer>
  );
};

export default CheckoutPage;
