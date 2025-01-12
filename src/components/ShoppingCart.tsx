import React, { useEffect, useState } from "react";
import "../styles.css";
interface CartItem{name:string;quantity:number;venue? :string;size? :string;type? :string}const ShoppingCart:React.FC=()=>{const[cartItems,setCartItems]=useState<CartItem[]>([]);const allowedItems=["Merch","Music","Tickets","S-Gate","CD: S-Gate","Digital S-Gate"];useEffect(()=>{const cartItemsStorage=localStorage.getItem("cartItems");if(cartItemsStorage&&cartItemsStorage!=="null"){const parsedCart:CartItem[]=JSON.parse(cartItemsStorage);setCartItems(parsedCart.filter(item=>allowedItems.includes(item.name)))}},[]);const handleDecrease=(index:number)=>{const item=cartItems[index];if(item.quantity>1){const updatedQuantity=item.quantity-1;const updatedCart=[...cartItems];updatedCart[index].quantity=updatedQuantity;setCartItems(updatedCart);localStorage.setItem("cartItems",JSON.stringify(updatedCart))}};const handleIncrease=(index:number)=>{const item=cartItems[index];const updatedQuantity=item.quantity+1;const updatedCart=[...cartItems];updatedCart[index].quantity=updatedQuantity;setCartItems(updatedCart);localStorage.setItem("cartItems",JSON.stringify(updatedCart))};const handleDelete=(index:number)=>{const updatedCart=cartItems.filter((_,i)=>i!==index);setCartItems(updatedCart);localStorage.setItem("cartItems",JSON.stringify(updatedCart))};
  return (
    <div className="shoppingcart-container fade-in">
      <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Shopping Cart</h1>
      <div id="cart-content">
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">You have no items in your cart.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item fade-in" key={index}>
                <img
                  src={
                    item.name.toLowerCase() === "merch"
                      ? "/Images/stagefrightmerch.webp"
                      : item.name.toLowerCase() === "tickets"
                      ? "/Images/ticket.webp"
                      : item.name.toLowerCase() === "s-gate"
                      ? "/Images/albumcover.webp"
                      : item.name.toLowerCase() === "digital s-gate"
                      ? "/Images/digitalsgate.webp" 
                      : item.name.toLowerCase() === "cd: s-gate"
                      ? "/Images/cdgatesgate.webp" 
                      : ""
                  }
                  alt={`${item.name} Image`}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <span className="item-name">{item.name}</span>
                  {item.venue && (
                    <span className="item-venue">{item.venue}</span>
                  )}
                  {item.type && (
                    <span className="item-type">Type: {item.type}</span>
                  )}{" "}
                  {/* Display type as "mp3" or "CD" */}
                  {item.size && (
                    <span className="item-size">Size: {item.size}</span>
                  )}
                  <div className="quantity-controls">
                    <button
                      className="decrease-button"
                      onClick={() => handleDecrease(index)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      id={`quantity-${index}`}
                      name={`quantity-${index}`}
                      value={item.quantity}
                      readOnly
                    />
                    <button
                      className="increase-button"
                      onClick={() => handleIncrease(index)}
                    >
                      +
                    </button>
                    <button
                      className="delete-button shake"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;
