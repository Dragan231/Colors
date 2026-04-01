const palette = document.getElementById("palette");
const button = document.getElementById("generate");

function randomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + hex.padStart(6, "0");
}

function generatePalette() {
  palette.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = randomColor();

    const div = document.createElement("div");
    div.classList.add("color");
    div.style.background = color;

    const label = document.createElement("span");
    label.textContent = color;

    div.appendChild(label);

    div.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color}`);
    });

    palette.appendChild(div);
  }
}

button.addEventListener("click", generatePalette);

// Generate on load
generatePalette();