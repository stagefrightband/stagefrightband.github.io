import React, { useEffect, useState } from 'react';
import "../styles.css";


const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

const setCookie = (name: string, value: string, days = 7) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ name: string; quantity: number }[]>([]);
  const allowedItems = ["Merch", "Music", "Tickets"]; 

  useEffect(() => {
    const cartItemsCookie = getCookie('cartitems');
    if (cartItemsCookie && cartItemsCookie !== 'null') {
      const items = cartItemsCookie.split(',').map(item => {
        const match = item.match(/(\D+)(\d+)/);
        const name = match ? match[1] : item;
        const quantity = match ? parseInt(match[2], 10) : 1;
        return {
          name: name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(), 
          quantity: quantity,
        };
      }).filter(item => allowedItems.includes(item.name)); 
      setCartItems(items);
    }
  }, []);

  const handleDecrease = (index: number) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      if (newItems[index].quantity > 1) {
        newItems[index].quantity -= 1;
        setCookie("cartitems", newItems.map(item => `${item.name}${item.quantity}`).join(','));
      }
      return newItems;
    });
  };

  const handleIncrease = (index: number) => {
    setCartItems(prevItems => {
      const newItems = [...prevItems];
      newItems[index].quantity += 1;
      setCookie("cartitems", newItems.map(item => `${item.name}${item.quantity}`).join(','));
      return newItems;
    });
  };

  return (
    <div>
      <div id="cart-content">
        {cartItems.length === 0 ? (
          <p>You have no items in your cart.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <span className="item-name">{item.name}</span>
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
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;