import React, { useEffect, useState } from 'react';
import '../styles.css';

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) return part.split(";").shift() || null;
  }
  return null;
}

function setCookie(name: string, value: string): void {
  const expires = "Fri, 31 Dec 9999 23:59:59 GMT"; // Far future date
  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
}

interface ToggleClassBasedOnCookieParams {
  cookieName: string;
  className: string;
}

function toggleClassBasedOnCookie({ cookieName, className }: ToggleClassBasedOnCookieParams): void {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}

const Store: React.FC = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [quantity, setQuantity] = useState(1); // Added state for quantity

  useEffect(() => {
    toggleClassBasedOnCookie({ cookieName: "highcontrast", className: "high-contrast" });
    toggleClassBasedOnCookie({ cookieName: "opendyslexic", className: "open-dyslexic" });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOverlayVisible(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleButtonClick = () => {
    setIsOverlayVisible(true);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1);
  };

  const handleSubmit = () => {
    setCookie("cartitems", `Merch${quantity}`);
    console.log(`Added merch${quantity} to cart.`);
    setIsOverlayVisible(false); // Hides the overlay
  };

  return (
    <div>
      <div className="product-tile">
        <div className="product-image">
          <button
            className="product-button"
            style={{
              backgroundImage: "url('/Images/stagefrightmerch.webp')"
            }}
            onClick={handleButtonClick}
            aria-label="Stage Fright Merch"
          ></button>
        </div>
        <div className="product-info">
          <p>Stage Fright T-Shirt</p>
        </div>
      </div>
      <div className={`overlay ${isOverlayVisible ? 'active' : ''}`}>
        <button className="close-button" onClick={() => setIsOverlayVisible(false)}>X</button>
        <div className="overlay-left">
          <img src="/Images/stagefrightmerch.webp" alt="Stage Fright Merch" />
        </div>
        <div className="overlay-right">
          <p>Stage Fright Merch</p>
          <div className="quantity-container">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
            />
            <span>{quantity === 1 ? "shirt" : "shirts"}</span>
          </div>
          <button onClick={handleSubmit}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Store;