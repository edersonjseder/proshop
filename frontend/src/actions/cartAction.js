import axios from "axios";
import { CART_ADD_ITEM } from "../types/cartTypes";
import { PRODUCT_NODE_BACKEND_URL } from "../url/appUrl";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`${PRODUCT_NODE_BACKEND_URL}/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
