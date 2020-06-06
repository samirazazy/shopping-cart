import axios from "axios";
import Cookie from "js-cookie";

const addToBasket = (itemId, quantaty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/api/items/" + itemId);
    dispatch({
      type: "PASKET_ADD_ITEM",
      payload: {
        item: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        quantaty,
      },
    });

   const {basket: {basketItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(basketItems));
  } catch (err) {
    console.log(err);
  }
};

const deleteFromBasket = (itemId) => (dispatch, getState) => {
  dispatch({ type: "BASKET_DELETE_ITEM", payload: itemId });
  const {basket: {basketItems}} = getState();
  Cookie.set("cartItems", JSON.stringify(basketItems));
};
export { addToBasket, deleteFromBasket };
