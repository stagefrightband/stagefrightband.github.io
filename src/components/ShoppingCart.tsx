import React, { useEffect, useState } from 'react';
import "../styles/shoppingcart.css";

// Utility functions for cookies
const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

const setCookie = (name: string, value: string, days = 365): void => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

const toggleClassBasedOnCookie = (cookieName: string, className: string): void => {
  const cookieValue = getCookie(cookieName) === 'true';
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
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