import React, { useEffect, useState } from 'react';
import "../styles.css";

interface CartItem {
  name: string;
  quantity: number;
  venue?: string;
  size?: string; // Added size property
}

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return decodeURIComponent(parts.pop()?.split(';').shift() || "");
  return null;
};

const setCookie = (name: string, value: string, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const allowedItems = ["Merch", "Music", "Tickets"]; 

  useEffect(() => {
    const cartItemsCookie = getCookie('cartitems');
    if (cartItemsCookie && cartItemsCookie !== 'null') {
      const itemsArray = cartItemsCookie.split(',');
      const aggregatedItems: Record<string, CartItem> = {};

      itemsArray.forEach(item => {
        const match = item.match(/^([A-Za-z]+)(\d+)(?:_(.+?))?(?:_([A-Za-z]+))?$/);
        if (match) {
          const name = match[1];
          const quantity = parseInt(match[2], 10);
          const venue = match[3] ? match[3].replace(/_/g, ' ') : undefined;
          const size = match[4] ? match[4] : undefined;
          const key = size ? `${name}_${size}` : name;

          if (aggregatedItems[key]) {
            aggregatedItems[key].quantity += quantity;
          } else {
            aggregatedItems[key] = { name, quantity, venue, size };
          }
        }
      });

      const aggregatedCartItems = Object.values(aggregatedItems)
        .map(item => ({
          name: item.name.charAt(0).toUpperCase() + item.name.slice(1).toLowerCase(),
          quantity: item.quantity,
          venue: item.venue,
          size: item.size,
        }))
        .filter(item => allowedItems.includes(item.name));

      setCartItems(aggregatedCartItems);
    }
  }, []);

  const handleDecrease = (index: number) => {
    const item = cartItems[index];
    if (item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;
      setCartItems(prevItems => {
        const newItems = [...prevItems];
        newItems[index].quantity = updatedQuantity;
        return newItems;
      });

      // Update the specific item in the cookie
      const cartItemsCookie = getCookie('cartitems');
      if (cartItemsCookie) {
        const updatedCart = cartItemsCookie.split(',').map(cartItem => {
          const match = cartItem.match(/^([A-Za-z]+)(\d+)(?:_(.+))?$/);
          if (match) {
            const name = match[1];
            const quantity = parseInt(match[2], 10);
            const venuePart = match[3] ? `_${match[3]}` : '';
            if (name === item.name && (item.venue ? match[3] === item.venue.replace(/ /g, '_') : !match[3])) {
              return `${name}${updatedQuantity}${venuePart}`;
            }
          }
          return cartItem;
        }).join(',');
        setCookie("cartitems", updatedCart);
      }
    }
  };

  const handleIncrease = (index: number) => {
    const item = cartItems[index];
    const updatedQuantity = item.quantity + 1;
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index].quantity = updatedQuantity;
      return newItems;
    });

    // Update the specific item in the cookie
    const cartItemsCookie = getCookie('cartitems');
    if (cartItemsCookie) {
      const updatedCart = cartItemsCookie.split(',').map(cartItem => {
        const match = cartItem.match(/^([A-Za-z]+)(\d+)(?:_(.+))?$/);
        if (match) {
          const name = match[1];
          const quantity = parseInt(match[2], 10);
          const venuePart = match[3] ? `_${match[3]}` : '';
          if (name === item.name && (item.venue ? match[3] === item.venue.replace(/ /g, '_') : !match[3])) {
            return `${name}${updatedQuantity}${venuePart}`;
          }
        }
        return cartItem;
      }).join(',');
      setCookie("cartitems", updatedCart);
    }
  };

  return (
    <div>
      <div id="cart-content">
        {cartItems.length === 0 ? (
          <p>You have no items in your cart.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={
                    item.name.toLowerCase() === 'merch'
                      ? '/Images/stagefrightmerch.webp'
                      : item.name.toLowerCase() === 'tickets'
                      ? '/Images/ticket.webp'
                      : ''
                  }
                  alt={`${item.name} Image`}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <span className="item-name">{item.name}</span>
                  {item.venue && <span className="item-venue">{item.venue}</span>}
                  {item.size && <span className="item-size">Size: {item.size}</span>} {/* Display size */}
                  <div className="quantity-controls">
                    <button
                      className="decrease-button"
                      onClick={() => handleDecrease(index)}
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <input type="text" value={item.quantity} readOnly />
                    <button className="increase-button" onClick={() => handleIncrease(index)}>
                      +
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