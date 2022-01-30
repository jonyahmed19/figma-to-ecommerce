export const addItemCount = (cartItems, cartItemtoAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoAdd.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemtoAdd.id
        ? {
            ...cartItem,
            quantity: cartItem?.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemtoAdd, quantity: 1 }];
};

export const removeCart = (cartItems, id) => {
  return cartItems.filter((cartItem) => cartItem.id !== id);
};

export const updateQuantity = (cartItems, data) => {
  const { id, quantity } = data;
  cartItems.map((cartItem) => {
    if (cartItem.id == id) {
      cartItem.quantity = Number(quantity);
    }
  });

  return cartItems;
};
