import React, { useEffect, useState } from 'react';
import '../styles.css';

function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) return decodeURIComponent(part.split(";").shift() || "");
  }
  return null;
}

function setCookie(name: string, value: string): void {
  const expires = "Fri, 31 Dec 9999 23:59:59 GMT"; 
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
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
  const [isTicketOverlayVisible, setIsTicketOverlayVisible] = useState(false); // New state for ticket overlay
  const [quantity, setQuantity] = useState(1); 
  const [size, setSize] = useState<string>(getCookie('size') || 'Medium');
  const [selectedVenue, setSelectedVenue] = useState<string>("House of Blues, Houston");

  useEffect(() => {
    toggleClassBasedOnCookie({ cookieName: "highcontrast", className: "high-contrast" });
    toggleClassBasedOnCookie({ cookieName: "opendyslexic", className: "open-dyslexic" });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOverlayVisible(false);
        setIsTicketOverlayVisible(false); // Close ticket overlay on Escape
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleMerchButtonClick = () => {
    setIsOverlayVisible(true);
  };

  const handleTicketButtonClick = () => { // New handler for ticket button
    setIsTicketOverlayVisible(true);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(e.target.value);
    setCookie('size', e.target.value);
  };

  const handleVenueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVenue(e.target.value);
  };

  const updateCartItems = (itemName: string, quantityToAdd: number, venue?: string) => {
    const currentCart = getCookie('cartitems');
    const itemsMap: Record<string, number> = {};
  
    if (currentCart) {
      currentCart.split(',').forEach(item => {
        const match = item.match(/^([A-Za-z]+)(\d+)(?:_(.+))?$/);
        if (match) {
          const name = match[1];
          const quantity = parseInt(match[2], 10);
          const venueName = match[3] ? match[3].replace(/_/g, ' ') : "";
          const key = venueName ? `${name}_${match[3]}` : name;
          if (itemsMap[key]) {
            itemsMap[key] += quantity;
          } else {
            itemsMap[key] = quantity;
          }
        }
      });
    }
  
    let key = itemName;
    if (itemName === 'Tickets' && venue) {
      const formattedVenue = venue.replace(/ /g, '_').replace(/,/g, ''); // Remove commas
      key += `_${formattedVenue}`;
    }
  
    if (itemsMap[key]) {
      itemsMap[key] += quantityToAdd;
    } else {
      itemsMap[key] = quantityToAdd;
    }
  
    const updatedCart = Object.entries(itemsMap)
      .map(([name, qty]) => {
        if (name.startsWith('Tickets_')) {
          const venue = name.substring('Tickets_'.length); // Extract entire venue name
          return `Tickets${qty}_${venue}`;
        }
        return `${name}${qty}`;
      })
      .join(',');
  
    setCookie('cartitems', updatedCart);
  };
  
  const handleSubmitMerch = () => { // Submit handler for merch
    updateCartItems('Merch', quantity);
    console.log(`Added Merch${quantity} to cart.`);
    setIsOverlayVisible(false);
  };
  
  const handleSubmitTickets = () => { // Submit handler for tickets
    updateCartItems('Tickets', quantity, selectedVenue);
    console.log(`Added Tickets${quantity}_${selectedVenue.replace(/ /g, '_')} to cart.`);
    setIsTicketOverlayVisible(false);
  };

  return (
    <div>
      <div className="products-container">
        <div className="product-tile">
          <div className="product-image">
            <button
              className="product-button merch-button"
              style={{
                backgroundImage: "url('/Images/stagefrightmerch.webp')"
              }}
              onClick={handleMerchButtonClick}
              aria-label="Stage Fright Merch"
            ></button>
          </div>
          <div className="product-info">
            <p>Stage Fright T-Shirt</p>
          </div>
        </div>
        <div className="product-tile">
          <div className="product-image">
            <button
              className="product-button ticket-button"
              style={{
                backgroundImage: "url('/Images/ticket.webp')"
              }}
              onClick={handleTicketButtonClick} // Updated to use new handler
              aria-label="Stage Fright Tickets"
            ></button>
          </div>
          <div className="product-info">
            <p>Stage Fright Tickets</p>
          </div>
        </div>
      </div>

      {/* Existing Merch Overlay */}
      <div className={`overlay ${isOverlayVisible ? 'active' : ''}`}>
        <button className="close-button" onClick={() => setIsOverlayVisible(false)}>X</button>
        <div className="overlay-left">
          <img src="/Images/stagefrightmerch.webp" alt="Stage Fright Merch" />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
            <p>Stage Fright Merch</p>
            <div className="size-container">
              <span>Size:</span>
              <select value={size} onChange={handleSizeChange} aria-label="Size Dropdown">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Large">Large</option>
                <option value="X-Large">X-Large</option>
                <option value="XX-Large">XX-Large</option>
                <option value="3X-Large">3X-Large</option>
              </select>
            </div>
            <div className="quantity-container">
              <span>Quantity:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <button className="submit-button" onClick={handleSubmitMerch}>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* New Tickets Overlay */}
      <div className={`overlay ${isTicketOverlayVisible ? 'active' : ''}`}>
        <button className="close-button" onClick={() => setIsTicketOverlayVisible(false)}>X</button>
        <div className="overlay-left">
          <img src="/Images/ticket.webp" alt="Stage Fright Tickets" />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
            <p>Stage Fright Tickets</p>
            <div className="venue-container">
              <span>Venue:</span>
              <select value={selectedVenue} onChange={handleVenueChange}>
                <option value="House of Blues, Houston">House of Blues Houston</option>
                <option value="Emo's">Emo's</option>
                <option value="Ferris Wheeler's Backyard & BBQ">Ferris Wheeler's Backyard & BBQ</option>
                <option value="The Nile Theatre">The Nile Theatre</option>
                <option value="House of Blues San Diego">House of Blues San Diego</option>
              </select>
            </div>
            <div className="size-container">
              <span>Quantity:</span>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
              />
            </div>
            <button className="submit-button" onClick={handleSubmitTickets}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;