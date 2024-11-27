document.addEventListener("DOMContentLoaded", function () {
  // Check if 'highcontrast' cookie is set to 'true' and apply class
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim() === "highcontrast=true")
  ) {
    document.body.classList.add("high-contrast");
  }

  // Check if 'opendyslexic' cookie is set to 'true' and apply class
  if (
    document.cookie
      .split(";")
      .some((item) => item.trim() === "opendyslexic=true")
  ) {
    document.body.classList.add("open-dyslexic");
  }
});
