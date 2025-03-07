import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CheckoutSuccessContainer, OrderTitle } from "./CheckoutSuccessStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { AlternateButton } from "../../components/Button/Button";

const CheckoutSuccessPage = () => {
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <CheckoutSuccessContainer>
      <OrderTitle>
        <FontAwesomeIcon icon={faCheck} /> <h1>Order Successful!</h1>
      </OrderTitle>
      <p>Thank you for your purchase.</p>
      <AlternateButton as="a" href="/">
        Back to Store
      </AlternateButton>
    </CheckoutSuccessContainer>
  );
};

export default CheckoutSuccessPage;
