// Write your code here!
// const body = document.getElementsByTagName("body")[0];
// const secondChild = body.querySelector("main");
// body.removeChild(secondChild);
main.remove();

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.append(newHeader);