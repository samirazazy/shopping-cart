import React, { useEffect } from "react";
import { addToBasket } from "../functions/basketActions";
import { useDispatch } from "react-redux";

function BasketScreen(props) {
  const itemId = props.match.params.id;
  const quantaty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (itemId) {
      dispatch(addToBasket(itemId, quantaty));
    }
  }, []);

  return (
    <div className="basket">
      <div className="cartDiv">
        <ul>
          <li>
            <h3>Shoping card</h3>
          </li>
          <div>price</div>
          <li>
            <h3>Shoping card</h3>
          </li>
          <div>price</div>
          <li>
            <h3>Shoping card</h3>
          </li>
          <div>price</div>
          <li>
            <h3>Shoping card</h3>
          </li>
          <div>price</div>
        </ul>
      </div>
      <div className="cartActions"></div>
    </div>
  );
}

export default BasketScreen;
