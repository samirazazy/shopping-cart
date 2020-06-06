import React, { useEffect } from "react";
import { addToBasket, deleteFromBasket } from "../functions/basketActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BasketScreen(props) {
  const basket = useSelector((state) => state.basket);

  const { basketItems } = basket;

  const productId = props.match.params.id;
  const quantaty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  const deleteItem = (productId) => {
    dispatch(deleteFromBasket(productId));
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToBasket(productId, quantaty));
    }
  }, []);

  const checkout = () => {
    props.history.push("/");
  };

  return (
    <div className="basket">
      <div className="basketList">
        <ul className="basketListContainer">
          <li>
            <h3>Shopping Cart</h3>
            <div>Price</div>
          </li>
          {basketItems.length === 0 ? (
            <div>
              Your Shopping Cart is empty...
              <br></br>
              <Link to="/">Go Shopping</Link>
            </div>
          ) : (
            basketItems.map((item) => (
              <li key={item.item}>
                <div className="basketImage">
                  <img src={item.image} alt="product" />
                </div>
                <div className="basketName">
                  <div>
                    <Link to={"/items/" + item.item}>{item.name}</Link>
                  </div>
                  <div>
                    quantaty:
                    <select
                      value={item.quantaty}
                      onChange={(e) =>
                        dispatch(addToBasket(item.item, e.target.value))
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <button
                      type="button"
                      className="button"
                      onClick={() => deleteItem(item.item)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="basketPrice">${item.price}</div>
              </li>
            ))
          )}
        </ul>
      </div>
      <div className="cart-action">
        <h3>
          Subtotal ( {basketItems.reduce((a, c) => a + c.quantaty, 0)} items) :
          {basketItems.reduce((a, c) => a + c.price * c.quantaty, 0)}
        </h3>
        <button
          disabled={basketItems.length === 0}
          onClick={checkout}
          className="checkout"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default BasketScreen;
