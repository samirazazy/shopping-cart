function basketReducer(state = { basketItems: [] }, action) {
  switch (action.type) {
    case "PASKET_ADD_ITEM":
      const item = action.payload;
      const product = state.basketItems.find(
        (el) => el.product === item.product
      );
      if (product) {
        return {
          basketItems: state.basketItems.map((el) =>
            el.product === product.product ? item : el
          ),
        };
      }
      return { basketItems: [...state.basketItems, item] };
    default:
      return state;
  }
}

export { basketReducer };
