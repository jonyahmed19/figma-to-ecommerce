import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../redux/cart/cart.actions";
import { FaTrashAlt } from "react-icons/fa";
import Button from "../../component/Button/Button";

const Cartdata = () => {
  const { cartItems } = useSelector((state) => state?.cartItems);
  const dispatch = useDispatch();

  const removeProduct = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      dispatch(removeFromCart(id));
    }
  };
  const updateCart = (e, id) => {
    dispatch(
      updateCartQuantity({
        quantity: e.target.value,
        id: id,
      })
    );
  };
  const placeOrder = () => {
    console.log("placed the order");
  };

  let total = 0;
  return (
    <div className="carddata my-24">
      <div className="custom-container mx-auto">
        <div className="cart-head gap-8 grid border-b border-gray py-5">
          <div className="product-image text-blue text-xl font-bold">
            Product
          </div>
          <div className="description text-blue text-xl font-bold">
            Description
          </div>
          <div className="price text-blue text-xl font-bold">Price</div>
          <div className="quantity text-blue text-xl font-bold">Quantity</div>
          <div className="total text-blue text-xl font-bold">Sub-total</div>
          <div className="total text-blue text-xl font-bold">Action</div>
        </div>
        <div className="cart-body">
          {cartItems.map((cartItem) => {
            total += cartItem.quantity * cartItem.price;

            return (
              <div
                key={cartItem.id}
                className="cart-single grid gap-8 border-b border-gray py-5"
              >
                <div className="product-image">
                  <img
                    className="w-20"
                    src={cartItem.image}
                    alt={cartItem.image}
                  />
                </div>
                <div className="description text-lg">{cartItem.title}</div>
                <div className="price text-lg">${cartItem.price}</div>
                <div className="quantity text-lg">
                  <input
                    type="number"
                    min="1"
                    max="10"
                    onChange={(e) => updateCart(e, cartItem.id)}
                    className="w-10 pl-1 border-solid border-gray border"
                    defaultValue={cartItem.quantity}
                  />
                </div>
                <div className="total text-lg">
                  ${Math.round(cartItem.quantity * cartItem.price * 100) / 100}
                </div>
                <div className="action">
                  {
                    <FaTrashAlt
                      className="cursor-pointer hover:text-pinish"
                      onClick={() => removeProduct(cartItem.id)}
                    />
                  }
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-bottom flex justify-end mt-5 mb-10">
          <p className="text-2xl">Totel: ${Math.round(total * 100) / 100}</p>
        </div>
        <div className="cart-bottom flex justify-end">
          <button
            onClick={placeOrder}
            className="py-3 px-8 text-xl bg-pinish text-white"
            type="button"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartdata;
