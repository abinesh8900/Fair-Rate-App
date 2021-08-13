const footer = document.getElementById("footer");
const pageOneNext = document.getElementById("pg-one-next");
const userNameField = document.getElementById("username-field");
const userInfoField = document.getElementById("user-info-field");
const userInfoNext = document.getElementById("user-info-next");
const userInfoBack = document.getElementById("user-info-back");

const showFooter = function () {
  footer.classList.remove("hidden");
};
// page one next

pageOneNext.addEventListener("click", () => {
  userNameField.classList.add("hidden");
  userInfoField.classList.remove("hidden");
  footer.classList.add("hidden");
});

//page two next

userInfoNext.addEventListener("click", () => {
  showFooter();
});

//page two back
userInfoBack.addEventListener("click", () => {
  userNameField.classList.remove("hidden");
  userInfoField.classList.add("hidden");
  showFooter();
});

const inputSelect = document.getElementById("input-field-select");
const optionContainer = document.getElementById("show-select-option");
const optionItems = optionContainer.querySelectorAll(".option-item");

inputSelect.addEventListener("click", () => {
  optionContainer.classList.toggle("active");
});

optionItems.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    inputSelect.querySelector("p").innerHTML =
      optionItem.querySelector("label").innerHTML;
    optionContainer.classList.remove("active");
  });
});

// for (const optionItem of optionItems) {
//   // console.log(optionItem);
//   optionItem.addEventListener("click", () => {
//     // inputSelect.innerText = optionContainer.classList.remove("active");
//     const items = optionItem.querySelector("label").innerText;
//     console.log(items);
//   });
// }
