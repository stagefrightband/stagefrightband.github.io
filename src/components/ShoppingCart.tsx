import React, { useEffect, useState } from 'react';
import "../styles.css";


const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const cartItemsCookie = getCookie('cartitems');
    if (cartItemsCookie && cartItemsCookie !== 'null') {
      setCartItems(cartItemsCookie.split(',').map(item => item.trim()));
    }
  }, []);

  return (
    <div>
      <div id="cart-content">
        {cartItems.length === 0 ? (
          <p>You have no items in your cart.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;