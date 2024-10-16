const button = document.getElementById("randomButton");

function moveButton() {
  const container = document.querySelector(".container");
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const randomX = Math.random() * (containerWidth - button.offsetWidth);
  const randomY = Math.random() * (containerHeight - button.offsetHeight);

  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}

button.addEventListener("mouseenter", () => {
  if (Math.random() < 0.5) {
    moveButton();
  }
});

button.addEventListener("click", moveButton);
