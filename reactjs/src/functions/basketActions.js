import axios from "axios";

const addToBasket = (itemId, quantaty) => async (dispatch) => {
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
  } catch (err) {
    console.log(err);
  }
};

export { addToBasket };
