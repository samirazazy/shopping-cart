import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsItem } from "../functions/itemsFunctions";

function ItemScreen(props) {
  const itemDetails = useSelector((state) => state.itemDetails);
  const { item, loading, error } = itemDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsItem(props.match.params.id));
    return () => {
      //
    };
  }, []);

  return (
    <div>
      <div className="continueShopping">
        <Link to="/">continue shopping</Link>
      </div>
      {loading ? (
        <div>Items are currently loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="itemDetails">
          <div className="detailsImage">
            <img src={item.image} alt="item"></img>
          </div>
          <div className="detailsInformation">
            <ul>
              <li>
                <h4>{item.name}</h4>
              </li>
              <li>
                <h4>{item.description}</h4>
              </li>
              <li>
                <h4>{item.price}$</h4>
              </li>
              <li>
                <h4>{item.details}</h4>
              </li>
            </ul>
          </div>
          <div className="detailsAction">
            <ul>
              <li>Price: {item.price}</li>
              <li>Status: Available</li>
              <li>
                Quantity:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </li>
              <li>
                <button className="addToCart">Add to Cart</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
export default ItemScreen;
