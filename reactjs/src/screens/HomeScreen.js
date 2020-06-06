import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { listItems } from "../functions/itemsFunctions";
import { useSelector, useDispatch } from "react-redux";

function HomeScreen(props) {
  const itemList = useSelector((state) => state.itemList);
  const { items, loading, error } = itemList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listItems());
    return () => {
      //
    };
  }, []);

  return loading ? (
    <div>Items are currently loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="items">
      {items.map((item) => (
        <li key={item._id}>
          <div className="item">
            <Link to={"/items/" + item._id}>
              <img className="item-image" src={item.image} alt="product"></img>
            </Link>
            <div className="product-name">
              <Link to={"/items/" + item._id}>{item.name}</Link>
            </div>
            <div className="item-description">{item.description}</div>
            <div className="item-price">{item.price}$</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreen;
