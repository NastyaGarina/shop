export const addToCart = (device, quantity) => (dispatch, getState) => {
  let cartItem = {
    category: device.category,
    gender: device.gender,
    _id: device._id,
    image: device.image,
    quantity: Number(quantity),
    prices: device.prices,
    price: device.prices * quantity
  };

  if (cartItem.quantity > 10) {
    alert('you can add more than 10 quantities');
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: 'DELETE_FROM_CART', payload: device });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: cartItem });
    }
  }

  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};

export const deleteFromCart = (device) => (dispatch, getState) => {
  dispatch({ type: 'DELETE_FROM_CART', payload: device });
  const cartItems = getState().cartReducer.cartItems;
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
};
