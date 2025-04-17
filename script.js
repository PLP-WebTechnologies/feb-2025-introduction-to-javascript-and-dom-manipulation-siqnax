// Change the text content and modify styles
function changeText() {
    const textElement = document.getElementById("dynamicText");
    textElement.textContent = "Welcome to week 5 assignment! 😄😄😄";
    textElement.style.color = "red";
    textElement.style.fontWeight = "bold";
  }
  
  // Add or remove a box element
  function toggleBox() {
    const container = document.getElementById("container");
    const existingBox = document.getElementById("box");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "box";
      container.appendChild(box);
    }
  }
  
