import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../redux/cart/cart.actions";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import StripeButton from "../../component/StripeButton/StripeButton";
import { useMediaQuery } from "react-responsive";

const Cartdata = () => {
  const browserWidth = useMediaQuery({
    query: "(min-width: 900px)",
  });
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

  let total = 0;
  return (
    <div className="carddata mt-14 mb-24 md:my-24">
      <div className="custom-container mx-auto">
        {browserWidth ? (
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
        ) : (
          <div className="cart-head-mobile gap-8 grid-cols-4 grid border-b border-gray py-5">
            <div className="product-image grid-cols-1 text-blue text-xl font-bold">
              Product
            </div>
            <div className="description grid-cols-3 text-blue text-xl font-bold">
              Description
            </div>
          </div>
        )}
        <div className="cart-body">
          {cartItems.map((cartItem) => {
            const url = `/product/${cartItem.id}`;
            total += cartItem.quantity * cartItem.price;

            if (browserWidth) {
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
                  <Link
                    className="flex items-center description text-lg"
                    to={url}
                  >
                    {cartItem.title}
                  </Link>
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
                    $
                    {Math.round(cartItem.quantity * cartItem.price * 100) / 100}
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
            } else {
              return (
                <div
                  key={cartItem.id}
                  className="cart-single-mobile grid-cols-4 grid gap-8 border-b border-gray py-5"
                >
                  <div className="cart-left col-span-1">
                    <Link to={url}>
                      <img src={cartItem.image} alt={cartItem.title} />
                    </Link>
                  </div>
                  <div className="cart-right col-span-3 flex flex-col gap-3">
                    <Link className="text-lg hover:text-pinish" to={url}>
                      {cartItem.title}
                    </Link>
                    <div className="right-inner flex justify-between">
                      <div className="price-others text-lg flex flex-col gap-3">
                        <p className="font-bold">
                          $
                          {Math.round(
                            cartItem.quantity * cartItem.price * 100
                          ) / 100}
                        </p>
                        <input
                          type="number"
                          min="1"
                          max="10"
                          onChange={(e) => updateCart(e, cartItem.id)}
                          className="w-10 pl-1 border-solid border-gray border"
                          defaultValue={cartItem.quantity}
                        />
                      </div>
                      <div className="action flex flex-col justify-end">
                        {
                          <FaTrashAlt
                            className="cursor-pointer hover:text-pinish"
                            onClick={() => removeProduct(cartItem.id)}
                          />
                        }
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom flex justify-end mt-5 mb-10">
          <p className="text-2xl">Totel: ${Math.round(total * 100) / 100}</p>
        </div>
        <div className="cart-bottom flex justify-end">
          <StripeButton price={total} />

          {/* <Elements stripe={stripePromise} options={options}>
            <button
              onClick={placeOrder}
              className="py-3 px-8 text-xl bg-pinish text-white"
              type="button"
            >
              Place Order
            </button>
            {/* <CheckoutForm /> *
          </Elements> */}
        </div>
      </div>
    </div>
  );
};

export default Cartdata;
