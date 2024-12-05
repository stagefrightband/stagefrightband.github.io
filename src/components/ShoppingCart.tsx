import React from 'react';
import '../styles/shoppingcart.css'

// Function to get a cookie by name
function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const part = parts.pop();
    if (part) return part.split(";").shift() || null;
  }
  return null;
}

// Function to apply or remove a class based on cookie value
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

// Function to display cart items
function displayCartItems() {
  const cartContent = document.getElementById("cart-content");
  const cartItems = getCookie("cartitems");

  if (cartContent) {
    if (!cartItems || cartItems === "null") {
      cartContent.innerText = "You have no items in your cart.";
    } else {
      const items = cartItems.split(",");
      const list = document.createElement("ul");
      items.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerText = item.trim();
        list.appendChild(listItem);
      });
      cartContent.innerHTML = "";
      cartContent.appendChild(list);
    }
  }
}

// Call displayCartItems on page load
document.addEventListener("DOMContentLoaded", displayCartItems);

// Check and apply the classes based on the cookies
toggleClassBasedOnCookie({ cookieName: "highcontrast", className: "high-contrast" });
toggleClassBasedOnCookie({ cookieName: "opendyslexic", className: "open-dyslexic" });

const AboutUs: React.FC = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to the About Us page of Stage Fright Band.</p>
      {/* Add more content here */}
    </div>
  );
};

export default AboutUs;