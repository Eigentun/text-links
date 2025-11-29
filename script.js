let addButton = document.querySelector(".add-textbox");
let scrollContainer = document.querySelector(".scrollcontainer");
let closeButton;

addButton.addEventListener("click", () => {
  let textbox = document.createElement("div");
  textbox.classList.add("textbox");
  scrollContainer.appendChild(textbox);

  closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  let closeButtonNode = document.createTextNode("×");
  closeButton.appendChild(closeButtonNode);

  let textboxHeadline = document.createElement("h1");
  let textboxContent = document.createElement("p");
  let headlineNode = document.createTextNode("Add headline...");
  let textboxNode = document.createTextNode("Add text...");

  textboxHeadline.setAttribute("contenteditable", "true");
  textboxContent.setAttribute("contenteditable", "true");
  textboxHeadline.appendChild(headlineNode);
  textboxContent.appendChild(textboxNode);

  textbox.appendChild(closeButton);
  textbox.appendChild(textboxHeadline);
  textbox.appendChild(textboxContent);

  localStorage.setItem("Swag", "Test");
});

scrollContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("close-button")) {
    let parentTextContainer = e.target.parentElement;
    parentTextContainer.remove();
  }
});
