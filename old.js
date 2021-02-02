import "./style.css";

// premiere partie du cours

const h1 = document.querySelector("h1");
h1.textContent = "Hello";

const element = document.createElement("div");
element.textContent = "Ca va ?";
document.body.appendChild(element);
