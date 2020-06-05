import React from "react";
import data from "../data";

import { Link } from "react-router-dom";

function HomeScreen(props) {
  return (
    <ul className="items">
      {data.items.map((item) => (
        <li>
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
