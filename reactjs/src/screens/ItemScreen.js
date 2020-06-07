import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsItem } from "../functions/itemsFunctions";


function ItemScreen(props) {
  const itemDetails = useSelector((state) => state.itemDetails);
  const { item, loading, error } = itemDetails;
  const dispatch = useDispatch();
  const [quantaty, setQuantity] = useState(1);
  useEffect(() => {
    dispatch(detailsItem(props.match.params.id));
    return () => {
      //
    };
  }, [dispatch,props.match.params.id]);

 

  const addToBasket = () => {
    props.history.push(
      "/basket/" + props.match.params.id + "?quantaty=" + quantaty
    );
  };

  return (
    <div>
      
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
              <div className="continueShopping">
              <Link to="/">&#11013;</Link>
              <Link to={"/"} >Continue Shopping</Link>
            </div>
            </ul>
          </div>
          <div className="detailsAction">
            <ul>
              <li>Price: {item.price}</li>
              <li>Status: Available</li>
              <li>
              Quantaty: <select value={quantaty} onChange={(e) => { setQuantity(e.target.value) }}>
                    {[...Array(item.itemsNumber).keys()].map(el =>
                      <option key={el + 1} value={el + 1}>{el + 1}</option>
                    )}
                  </select>
                
              </li>
              <li>
                <button className="addToBasket" onClick={addToBasket}>
                  Add to Cart
                </button>
              </li>
              
            </ul>
          </div>
          
        </div>
        
      )}
      
    </div>
  );
}
export default ItemScreen;
