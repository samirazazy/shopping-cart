import React, { useEffect } from "react";
import { addToBasket, deleteFromBasket } from "../functions/basketActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function BasketScreen(props) {
 
  const basket = useSelector((state) => state.basket);

  const { basketItems } = basket;


  const itemId = props.match.params.id;
  const quantaty  = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const dispatch = useDispatch();

  const deleteItem = (itemId) => {
    dispatch(deleteFromBasket(itemId));
    console.log('Deleting')
  };

  useEffect(() => {
    
    if (itemId) {
      dispatch(addToBasket(itemId, quantaty ));
    }
  }, [dispatch,itemId,quantaty]);

  const checkout = () => {
    // props.history.push("/");
  };

 


  return (
    <div className="basket">
      <div className="basketList">
        <ul className="basketListContainer">
          <li className="shoppingCart">
            Shopping Cart
          </li>
          {basketItems.length === 0 ? 
            <div className="emptyCart">
              Your Shopping Cart is empty...
              
              <Link to="/">Go Shopping</Link>
            </div>
           : 
          
            basketItems.map((item) => (
              <li key={item.product}>
                <div className="basketImage">
                    <Link  to={"/item/" + item.product}>
                      <img src={item.image} alt="product" />
                    </Link>
                  </div>

                <div className="basketName">
                      <Link className="itemName" to={"/item/" + item.product}>{item.name}</Link>
                      <div>{item.description}</div>
                  </div>

                <div className="basketQuantaty ">
                  {item.quantaty}
                </div>
                
                <div className="basketDelet basketButton">
                  <button type="button"
                  onClick={() => deleteItem(item.product)} >X</button>
                </div>
          
                <div className="basketPrice">${item.price}</div>
              </li>
             
            ))
          }
          <li>
            <div className="continueShopping">
              <Link to="/">&#11013;</Link>
              <Link to={"/"} >Continue Shopping</Link>
            </div>
            
            
            <div>
            <span className="subtotal">Subtotal: </span>
            <span  className="total">${basketItems.reduce((x, y) => x + y.price * y.quantaty, 0)}</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="basketAction">
      
      <ul className="actionContainer">
        <li>
        <b>Number of items: </b>     
        {basketItems.reduce((x, y) => x + y.quantaty, 0)} items 
        </li>
        <li>
          <b>Item Sub-Total: </b>
           {basketItems.reduce((x, y) => x + y.price * y.quantaty, 0)} 
        </li>
        <li>
          <b>Shipping: </b>
           <i> FREE</i> 
        </li>
        <li className="basketTotal">
          <b>Total:</b>
           {basketItems.reduce((x, y) => x + y.price * y.quantaty, 0)} 
        </li>
      </ul>
        
       
    
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
