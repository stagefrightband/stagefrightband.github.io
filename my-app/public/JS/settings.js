// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Function to set a cookie with a specific name and value (no expiration)
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/; SameSite=Lax`;
}

// Function to apply or remove a class based on cookie value
function toggleClassBasedOnCookie(cookieName, className) {
  const cookieValue = getCookie(cookieName) === "true";
  if (cookieValue) {
    document.documentElement.classList.add(className);
  } else {
    document.documentElement.classList.remove(className);
  }
}

// Function to initialize switch states based on cookies
function initializeSwitches() {
  const highContrastToggle = document.getElementById("highcontrast-toggle");
  const openDyslexicToggle = document.getElementById("opendyslexic-toggle");

  // Initialize the High Contrast toggle switch
  highContrastToggle.checked = getCookie("highcontrast") === "true";

  // Initialize the Open Dyslexic toggle switch
  openDyslexicToggle.checked = getCookie("opendyslexic") === "true";

  // Add event listeners to toggle switches
  highContrastToggle.addEventListener("change", () => {
    const newValue = highContrastToggle.checked ? "true" : "false";
    setCookie("highcontrast", newValue);
    toggleClassBasedOnCookie("highcontrast", "high-contrast");
  });

  openDyslexicToggle.addEventListener("change", () => {
    const newValue = openDyslexicToggle.checked ? "true" : "false";
    setCookie("opendyslexic", newValue);
    toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");
  });
}

// Check and apply the classes based on the cookies
toggleClassBasedOnCookie("highcontrast", "high-contrast");
toggleClassBasedOnCookie("opendyslexic", "open-dyslexic");

// Initialize switches when the page loads
window.addEventListener("DOMContentLoaded", initializeSwitches);
