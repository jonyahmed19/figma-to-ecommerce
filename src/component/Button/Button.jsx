import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";

const Button = ({ padding, label, cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productCart = (e) => {
    if (cart) {
      dispatch(addToCart(cart));
      navigate("/cart");
    } else {
      return false;
    }
  };

  return (
    <button onClick={productCart} type="button" className={padding}>
      {label}
    </button>
  );
};

export default Button;
