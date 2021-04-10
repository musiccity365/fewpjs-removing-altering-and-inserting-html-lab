const testVar = "hi"

/* Remove the node element */
document.querySelector("main#main").remove();

/* Create new element and assign it to newHeader */
const newHeader = document.createElement("h1");
newHeader.id = "victory"
newHeader.innerHTML = "Flatiron School is the champion!";
newHeader.className = "victory";