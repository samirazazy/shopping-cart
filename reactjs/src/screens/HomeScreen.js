import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function HomeScreen(props) {
  const [items, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/items");
      setItem(data);
    };
    fetchData();
    return () => {
      //
    };
  }, []);

  return (
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
