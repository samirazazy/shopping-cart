import Axios from "axios";
import Cookie from "js-cookie";

const addToBasket = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await Axios.get("/api/items/" + productId);
    dispatch({
      type: "PASKET_ADD_ITEM", payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        qty
      }   
    });

   const {basket: {basketItems}} = getState();
    Cookie.set("cartItems", JSON.stringify(basketItems));
  } catch (err) {
    console.log(err);
  }
};

const deleteFromBasket = (productId) => (dispatch, getState) => {
  dispatch({ type: "BASKET_DELETE_ITEM", payload: productId });
  const {basket: {basketItems}} = getState();
  Cookie.set("cartItems", JSON.stringify(basketItems));
};
export { addToBasket, deleteFromBasket };
