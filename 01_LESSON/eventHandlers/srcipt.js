document.getElementById("mybutton").addEventListener("click", function () {
  let message = document.createElement("p");
  message.textContent = "Button clicked!";
  document.body.appendChild(message);
});
