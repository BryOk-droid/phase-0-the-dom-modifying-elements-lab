// Remove the <main> element with id "main"
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id of newHeader to "victory"
newHeader.id = "victory";

// Set the text content of newHeader to include your name
newHeader.textContent = "YOUR-NAME is the champion";

// Append newHeader to the body
document.body.append(newHeader);
