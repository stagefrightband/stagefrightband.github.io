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
        // Updated regex to include underscores and commas in venue names
        const match = item.match(/^([A-Za-z' _-]+)(\d+)(?:_([A-Za-z' _-]+))?$/);
        if (match) {
          const name = match[1];
          const quantity = parseInt(match[2], 10);
          const venue = match[3] ? match[3].replace(/_/g, ' ') : undefined;
          const size = match[4] ? match[4] : undefined;
          // Updated key generation to include venue for Tickets
          const key = size ? `${name}_${size}` : venue ? `${name}_${venue}` : name;

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

      const cartItemsCookie = getCookie('cartitems');
      if (cartItemsCookie) {
        // Updated originalItemString construction to match new regex
        const originalItemString = `${item.name}${item.quantity}` +
          (item.size ? `_${item.size.replace(/ /g, '_')}` : '') +
          (item.venue ? `_${item.venue.replace(/ /g, '_')}` : '');

        const updatedCart = cartItemsCookie.split(',').map(cartItem => {
          return cartItem === originalItemString ? `${item.name}${updatedQuantity}` +
            (item.size ? `_${item.size.replace(/ /g, '_')}` : '') +
            (item.venue ? `_${item.venue.replace(/ /g, '_')}` : '') : cartItem;
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

    const cartItemsCookie = getCookie('cartitems');
    if (cartItemsCookie) {
      // Updated originalItemString construction to match new regex
      const originalItemString = `${item.name}${item.quantity}` +
        (item.size ? `_${item.size.replace(/ /g, '_')}` : '') +
        (item.venue ? `_${item.venue.replace(/ /g, '_')}` : '');

      const updatedCart = cartItemsCookie.split(',').map(cartItem => {
        return cartItem === originalItemString ? `${item.name}${updatedQuantity}` +
          (item.size ? `_${item.size.replace(/ /g, '_')}` : '') +
          (item.venue ? `_${item.venue.replace(/ /g, '_')}` : '') : cartItem;
      }).join(',');
      setCookie("cartitems", updatedCart);
    }
  };

  const handleDelete = (index: number) => {
    const itemToDelete = cartItems[index];
    setCartItems(prevItems => prevItems.filter((_, i) => i !== index));

    const cartItemsCookie = getCookie('cartitems');
    if (cartItemsCookie) {
      // Updated itemString construction to match new regex
      const itemString = `${itemToDelete.name}${itemToDelete.quantity}` +
        (itemToDelete.size ? `_${itemToDelete.size.replace(/ /g, '_')}` : '') +
        (itemToDelete.venue ? `_${itemToDelete.venue.replace(/ /g, '_')}` : '');

      const itemsArray = cartItemsCookie.split(',');
      const updatedItemsArray = itemsArray.filter(item => item !== itemString);
      const updatedCart = updatedItemsArray.join(',');
      setCookie("cartitems", updatedCart);
    }
  };

  return (
    <div>
      <div id="cart-content">
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">You have no items in your cart.</p>
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
                    <button className="delete-button" onClick={() => handleDelete(index)}>Delete</button> {/* Added Delete button */}
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