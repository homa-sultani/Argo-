const message =
  "Thank you for contacting the royal kingdom. ";

document
  .getElementById("contactForm")
  .addEventListener("submit", function(event) {
    event.preventDefault();
    alert(message);
  });