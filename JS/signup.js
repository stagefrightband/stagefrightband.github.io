document.addEventListener("DOMContentLoaded", function () {
  const highContrastToggle = document.getElementById("highcontrast-toggle");
  const opendyslexicToggle = document.getElementById("opendyslexic-toggle");

  const toggles = [
    { toggle: highContrastToggle, cookieName: "highcontrast", className: "high-contrast" },
    { toggle: opendyslexicToggle, cookieName: "opendyslexic", className: "open-dyslexic" }
  ];

  toggles.forEach(({ toggle, cookieName, className }) => {
    // Check if cookie is set to 'true'
    if (document.cookie.split(";").some((item) => item.trim() === `${cookieName}=true`)) {
      toggle.checked = true;
      document.body.classList.add(className);
    }

    toggle.addEventListener("change", function () {
      const value = toggle.checked ? "true" : "false";
      document.cookie = `${cookieName}=${value}; max-age=31536000; path=/`;

      // Add or remove class on body
      if (toggle.checked) {
        document.body.classList.add(className);
      } else {
        document.body.classList.remove(className);
      }
    });
  });
});
