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
  }, [dispatch]);



  return loading ? (
    <div>Items are currently loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <ul className="items">
      {items.map((item) => (
        <li key={item._id}>
          <div className="item">
            <Link to={"/item/" + item._id}>
              <img className="itemImage" src={item.image} alt="product"></img>
            </Link>
            <div className="productName">
              <Link to={"/item/" + item._id}>{item.name}</Link>
            </div>
            <div className="itemDescription">{item.description}</div>
            <div className="itemPrice">{item.price}$</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreen;
