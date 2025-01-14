import React, { useEffect, useState } from "react";
import "../styles.css";
interface CartItem {
  name: string;
  quantity: number;
  venue?: string;
  size?: string;
  type?: string;
}
const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCheckoutOverlayVisible, setIsCheckoutOverlayVisible] =
    useState(false);
  const allowedItems = [
    "Merch",
    "Music",
    "Tickets",
    "S-Gate",
    "CD: S-Gate",
    "Digital S-Gate",
  ];
  useEffect(() => {
    const cartItemsStorage = localStorage.getItem("cartItems");
    if (cartItemsStorage && cartItemsStorage !== "null") {
      const parsedCart: CartItem[] = JSON.parse(cartItemsStorage);
      setCartItems(
        parsedCart.filter((item) => allowedItems.includes(item.name))
      );
    }
  }, []);
  const handleDecrease = (index: number) => {
    const item = cartItems[index];
    if (item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;
      const updatedCart = [...cartItems];
      updatedCart[index].quantity = updatedQuantity;
      setCartItems(updatedCart);
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    }
  };
  const handleIncrease = (index: number) => {
    const item = cartItems[index];
    const updatedQuantity = item.quantity + 1;
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = updatedQuantity;
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  const handleDelete = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };
  const unitPrices: { [key: string]: number } = {
    Merch: 20,
    Music: 15,
    Tickets: 40,
    "S-Gate": 25,
    "CD: S-Gate": 15,
    "Digital S-Gate": 5,
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const price =
      item.name.toLowerCase() === "s-gate"
        ? item.type === "CD"
          ? unitPrices["CD: S-Gate"]
          : unitPrices["Digital S-Gate"]
        : unitPrices[item.name] || 0;
    return total + price * item.quantity;
  }, 0);

  const handleCheckout = () => {
    localStorage.removeItem("cartItems");
    setCartItems([]);
    setIsCheckoutOverlayVisible(true);
  };

  return (
    <div className="shoppingcart-container fade-in">
      <meta http-equiv="Cache-Control" content="max-age=31536000" />
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Shopping Cart</h1>
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
                      ? "/Media/stagefrightmerch.webp"
                      : item.name.toLowerCase() === "tickets"
                      ? "/Media/ticket.webp"
                      : item.name.toLowerCase() === "s-gate" &&
                        item.type === "Digital Version (.mp3)"
                      ? "/Media/albumcover.webp"
                      : item.name.toLowerCase() === "s-gate" &&
                        item.type === "CD"
                      ? "/Media/cdimage.webp"
                      : ""
                  }
                  alt={`${item.name} Image`}
                  className={
                    item.name.toLowerCase() === "merch"
                      ? "merch-item-image"
                      : item.name.toLowerCase() === "tickets"
                      ? "ticket-item-image"
                      : item.name.toLowerCase() === "s-gate" &&
                        item.type === "Digital Version (.mp3)"
                      ? "album-item-image"
                      : item.name.toLowerCase() === "s-gate" &&
                        item.type === "CD"
                      ? "cd-item-image"
                      : "cart-item-image"
                  }
                />
                <div className="cart-item-details">
                  <span className="item-name">{item.name}</span>
                  {item.venue && (
                    <span className="item-venue">{item.venue}</span>
                  )}
                  {item.type && (
                    <span className="item-type">Type: {item.type}</span>
                  )}{" "}
                  {item.size && (
                    <span className="item-size">Size: {item.size}</span>
                  )}
                  <span className="item-price">
                    Price: $
                    {item.name.toLowerCase() === "s-gate"
                      ? item.type === "CD"
                        ? unitPrices["CD: S-Gate"]
                        : unitPrices["Digital S-Gate"]
                      : unitPrices[item.name]}
                    /item ($
                    {(
                      (item.name.toLowerCase() === "s-gate"
                        ? item.type === "CD"
                          ? unitPrices["CD: S-Gate"]
                          : unitPrices["Digital S-Gate"]
                        : unitPrices[item.name]) * item.quantity
                    ).toFixed(2)}{" "}
                    total)
                  </span>
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
                      aria-label={`Quantity for ${item.name}`}
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
      <div className="total-price">
        <span>Total Price: ${totalPrice.toFixed(2)}</span>
        <button
          className="checkout-button"
          onClick={handleCheckout}
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
      {cartItems.length > 0 && isCheckoutOverlayVisible && (
        <div className="checkout-overlay">
          <h2>Successfully Purchased!</h2>
          <p>
            Your items were successfully purchased. (Note: This is a demo. No
            items were bought and no money was spent.)
          </p>
          <button onClick={() => setIsCheckoutOverlayVisible(false)}>Ok</button>
        </div>
      )}
    </div>
  );
};
export default ShoppingCart;
