import React, { useEffect, useState } from "react";
import "../styles.css";
interface ToggleClassBasedOnCookieParams {
  cookieName: string;
  className: string;
}
function toggleClassBasedOnCookie({
  cookieName,
  className,
}: ToggleClassBasedOnCookieParams): void {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}
const Store: React.FC = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isTicketOverlayVisible, setIsTicketOverlayVisible] = useState(false);
  const [isAlbumOverlayVisible, setIsAlbumOverlayVisible] = useState(false);
  const [isDigitalOverlayVisible, setIsDigitalOverlayVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState<string>(
    "House of Blues, Houston"
  );
  const [size, setSize] = useState<string>("M");
  const [selectedType, setSelectedType] = useState<string>(
    "Digital Version (.mp3)"
  );
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const unitPrices = {
    Merch: 25,
    Tickets: 20,
    "S-Gate": 15,
    "Digital S-Gate": 5,
  };
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  useEffect(() => {
    toggleClassBasedOnCookie({
      cookieName: "highcontrast",
      className: "high-contrast",
    });
    toggleClassBasedOnCookie({
      cookieName: "opendyslexic",
      className: "open-dyslexic",
    });
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOverlayVisible(false);
        setIsTicketOverlayVisible(false);
        setIsAlbumOverlayVisible(false);
        setIsDigitalOverlayVisible(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    const currentCart = localStorage.getItem("cartItems");
    setCartItems(currentCart ? JSON.parse(currentCart) : []);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const handleMerchButtonClick = () => {
    setIsOverlayVisible(true);
  };
  const handleTicketButtonClick = () => {
    setIsTicketOverlayVisible(true);
  };
  const handleAlbumButtonClick = () => {
    setIsAlbumOverlayVisible(true);
  };
  const handleDigitalButtonClick = () => {
    setIsDigitalOverlayVisible(true);
  };
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value >= 1 ? value : 1);
  };
  const handleVenueChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedVenue(e.target.value);
  };
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(e.target.value);
  };
  interface CartItem {
    name: string;
    quantity: number;
    venue?: string;
    size?: string;
    type?: string;
  }
  const updateCartItems = (
    itemName: string,
    quantityToAdd: number,
    venue?: string,
    size?: string,
    type?: string
  ) => {
    const currentCart = localStorage.getItem("cartItems");
    let cart: CartItem[] = currentCart ? JSON.parse(currentCart) : [];
    const existingItemIndex = cart.findIndex(
      (item) =>
        item.name === itemName &&
        item.venue === venue &&
        item.size === size &&
        item.type === type
    );
    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantityToAdd;
    } else {
      cart.push({ name: itemName, quantity: quantityToAdd, venue, size, type });
    }
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };
  const handleSubmitMerch = () => {
    updateCartItems("Merch", quantity, undefined, size);
    setIsOverlayVisible(false);
  };
  const handleSubmitTickets = () => {
    updateCartItems("Tickets", quantity, selectedVenue);
    setIsTicketOverlayVisible(false);
  };
  const handleSubmitAlbum = () => {
    updateCartItems("S-Gate", quantity, undefined, undefined, selectedType);
    setIsAlbumOverlayVisible(false);
  };
  const handleSubmitDigital = () => {
    updateCartItems("Digital S-Gate", quantity, undefined, undefined, "mp3");
    setIsDigitalOverlayVisible(false);
  };

  // Add Increment and Decrement functions
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="store-container fade-in">
      <meta http-equiv="Cache-Control" content="max-age=31536000" />
      <link rel="preload" as="image" href="/Images/stagefrightmerch.webp" />
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Store</h1>
      <div className="hamburger-nav">
        <button
          id="hamburgerMenu"
          className={`hamburger-button ${isHamburgerOpen ? "change" : ""}`}
          onClick={toggleHamburgerMenu}
          aria-label="Toggle menu"
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </button>
        <div className={`hamburger-links ${isHamburgerOpen ? "open" : ""}`}>
          {/* Add your existing links here */}
        </div>
      </div>
      <div className="products-container">
        <div className="product-tile fade-in">
          <div className="product-image">
            <button
              className="product-button merch-button"
              style={{
                backgroundImage: "url('/Images/stagefrightmerch.webp')",
              }}
              onClick={handleMerchButtonClick}
              aria-label="Stage Fright Merch"
            ></button>
          </div>
          <div className="product-info">
            <p>Stage Fright T-Shirt: $25/item</p>
          </div>
        </div>
        <div className="product-tile fade-in">
          <div className="product-image">
            <button
              className="product-button ticket-button"
              style={{
                backgroundImage: "url('/Images/ticket.webp')",
              }}
              onClick={handleTicketButtonClick}
              aria-label="Stage Fright Tickets"
            ></button>
          </div>
          <div className="product-info">
            <p>Stage Fright Tickets: $20/item</p>
          </div>
        </div>
        <div className="product-tile fade-in">
          <div className="product-image">
            <button
              className="product-button album-button"
              style={{
                backgroundImage: "url('/Images/albumcover.webp')",
              }}
              onClick={handleAlbumButtonClick}
              aria-label="S-Gate Album"
            ></button>
          </div>
          <div className="product-info">
            <p>S-Gate Album: $15/item CD, $5/item .mp3</p>
          </div>
        </div>
      </div>
      <div className={`overlay ${isOverlayVisible ? "active" : ""}`}>
        <button
          className="close-button"
          onClick={() => setIsOverlayVisible(false)}
        >
          X
        </button>
        <div className="overlay-left">
          <img
            className="merch-image"
            src="/Images/stagefrightmerch.webp"
            alt="Stage Fright Merch"
          />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
            <p>Stage Fright Merch</p>
            <div className="size-container">
              <span>Size:</span>
              <select
                className="dropdown"
                value={size}
                onChange={(e) => setSize(e.target.value)}
                aria-label="Select size"
              >
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
                <option value="XL">Extra Large</option>
              </select>
            </div>
            <div className="quantity-container">
              <span>Quantity:</span>
              <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <input
                  type="text"
                  className="quantity-input"
                  min="1"
                  readOnly
                  value={quantity}
                  onChange={handleQuantityChange}
                  aria-label="Quantity for Merch"
                />
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>
            <p className="item-price">
              Price: ${unitPrices["Merch"]}/item ($
              {unitPrices["Merch"] * quantity} total)
            </p>
            <button className="submit-button" onClick={handleSubmitMerch}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className={`overlay ${isTicketOverlayVisible ? "active" : ""}`}>
        <button
          className="close-button"
          onClick={() => setIsTicketOverlayVisible(false)}
        >
          X
        </button>
        <div className="overlay-left">
          <img
            className="ticket-image"
            src="/Images/ticket.webp"
            alt="Stage Fright Tickets"
          />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
            <p>Stage Fright Tickets</p>
            <div className="venue-container">
              <span>Venue:</span>
              <select
                className="dropdown"
                value={selectedVenue}
                onChange={handleVenueChange}
                aria-label="Select venue"
              >
                <option value="House of Blues, Houston">
                  House of Blues, Houston
                </option>
                <option value="Emo's">Emo's</option>
                <option value="Ferris Wheeler's Backyard & BBQ">
                  Ferris Wheeler's Backyard & BBQ
                </option>
                <option value="The Nile Theatre">The Nile Theatre</option>
                <option value="House of Blues San Diego">
                  House of Blues San Diego
                </option>
              </select>
            </div>
            <div className="size-container">
              <span>Quantity:</span>
              <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <input
                  type="text"
                  className="quantity-input"
                  min="1"
                  readOnly
                  value={quantity}
                  onChange={handleQuantityChange}
                  aria-label="Quantity for Tickets"
                />
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>
            <p className="item-price">
              Price: ${unitPrices["Tickets"]}/item ($
              {unitPrices["Tickets"] * quantity} total)
            </p>
            <button className="submit-button" onClick={handleSubmitTickets}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className={`overlay ${isAlbumOverlayVisible ? "active" : ""}`}>
        <button
          className="close-button"
          onClick={() => setIsAlbumOverlayVisible(false)}
        >
          X
        </button>
        <div className="overlay-left">
          <img
            className="album-image"
            src={
              selectedType === "CD"
                ? "/Images/cdimage.webp"
                : "/Images/albumcover.webp"
            }
            alt="S-Gate Album"
          />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
            <p>S-Gate Album</p>
            <div className="type-container">
              <span>Type:</span>
              <select
                className="dropdown"
                value={selectedType}
                onChange={handleTypeChange}
                aria-label="Select album type"
              >
                <option value="mp3">mp3</option>
                <option value="CD">CD</option>
              </select>
            </div>
            <div className="quantity-container">
              <span>Quantity:</span>
              <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <input
                  type="text"
                  className="quantity-input"
                  min="1"
                  readOnly
                  value={quantity}
                  onChange={handleQuantityChange}
                  aria-label="Quantity for Album"
                />
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>
            <p className="item-price">
              {`Price: $${
                selectedType === "mp3"
                  ? unitPrices["S-Gate"]
                  : unitPrices["Digital S-Gate"]
              }/item ($${
                (selectedType === "mp3"
                  ? unitPrices["S-Gate"]
                  : unitPrices["Digital S-Gate"]) * quantity
              } total)`}
            </p>
            <button className="submit-button" onClick={handleSubmitAlbum}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className={`overlay ${isDigitalOverlayVisible ? "active" : ""}`}>
        <button
          className="close-button"
          onClick={() => setIsDigitalOverlayVisible(false)}
        >
          X
        </button>
        <div className="overlay-left">
          <img
            className="digital-image"
            src="/Images/digital.webp"
            alt="Digital S-Gate"
          />
        </div>
        <div className="overlay-right">
          <div className="overlay-content">
            <p>Digital S-Gate</p>
            <div className="quantity-container">
              <span>Quantity:</span>
              <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <input
                  type="text"
                  className="quantity-input"
                  min="1"
                  readOnly
                  value={quantity}
                  onChange={handleQuantityChange}
                  aria-label="Quantity for Digital S-Gate"
                />
                <button onClick={handleIncrement}>+</button>
              </div>
            </div>
            <p className="item-price">
              Price: ${unitPrices["Digital S-Gate"]}/item ($
              {unitPrices["Digital S-Gate"] * quantity} total)
            </p>
            <button className="submit-button" onClick={handleSubmitDigital}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Store;
function getCookie(cookieName: string): string | null {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(";");
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
}
