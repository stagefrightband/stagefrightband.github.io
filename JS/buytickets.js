document.addEventListener("DOMContentLoaded", function () {
  const highContrastToggle = document.getElementById("highcontrast-toggle");
  const opendyslexicToggle = document.getElementById("opendyslexic-toggle");

  // Check if 'highcontrast' cookie is set to 'true'
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim() === "highcontrast=true")
  ) {
    highContrastToggle.checked = true;
    document.body.classList.add("high-contrast");
  }

  // Check if 'opendyslexic' cookie is set to 'true'
  if (
    document.cookie.split(";").some((item) => item.trim() === "opendyslexic=true")
  ) {
    opendyslexicToggle.checked = true;
    document.body.classList.add("open-dyslexic");
  }

  highContrastToggle.addEventListener("change", function () {
    const value = highContrastToggle.checked ? "true" : "false";
    document.cookie = "highcontrast=" + value + "; max-age=31536000; path=/";

    // Add or remove 'high-contrast' class on body
    if (highContrastToggle.checked) {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  });

  opendyslexicToggle.addEventListener("change", function () {
    const value = this.checked ? "true" : "false";
    document.cookie =
      "opendyslexic=" + value + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/";

    // Add or remove 'open-dyslexic' class on body
    if (this.checked) {
      document.body.classList.add("open-dyslexic");
    } else {
      document.body.classList.remove("open-dyslexic");
    }
  });
});
