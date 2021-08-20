const footer = document.getElementById("footer");
// section 1
const pageOneNext = document.getElementById("pg-one-next");
const userNameField = document.getElementById("username-field");
// section 2
const userInfoField = document.getElementById("user-info-field");
const userInfoNext = document.getElementById("user-info-next");
const userInfoBack = document.getElementById("user-info-back");
const inputSelect = document.getElementById("input-field-select");
const optionContainer = document.getElementById("show-select-option");
const optionItems = optionContainer.querySelectorAll(".option-item");
// section 3
const browesFileBtn = document.getElementById("browes-btn");
const browesFileInput = document.getElementById("photo-proof");

//section 5
const rangeInputPerMonth = document.getElementById("max-per-month");
const rangeInputPerMonthValue = document.getElementById("per-month-value");
const perMonthBar = document.getElementById("per-mon-progress-bar");
const rangeInputCredit = document.getElementById("max-credit");
const rangeInputCreditValue = document.getElementById("max-credit-value");
const creditBar = document.getElementById("credit-progress-bar");

// section 6
const progressBar = document.getElementById("progress-value");
const cardProgressBar = document.getElementById("card-progress-value");

const showFooter = function () {
  footer.classList.remove("hidden");
};

// section one next
pageOneNext.addEventListener("click", () => {
  userNameField.classList.add("hidden");
  userInfoField.classList.remove("hidden");
  footer.classList.add("hidden");
});

// section two next
userInfoNext.addEventListener("click", () => {
  showFooter();
});

// section two back
userInfoBack.addEventListener("click", () => {
  userNameField.classList.remove("hidden");
  userInfoField.classList.add("hidden");
  showFooter();
});

inputSelect.addEventListener("click", () => {
  optionContainer.classList.toggle("active");
});

optionItems.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    inputSelect.querySelector("p").textContent =
      optionItem.querySelector("label").textContent;
    optionContainer.classList.remove("active");
  });
});

//  uplode file
browesFileBtn.addEventListener("click", () => {
  browesFileInput.click();
});

//  range adjusting value
rangeInputPerMonth.oninput = function () {
  rangeInputPerMonthValue.textContent = this.value * 120;
  perMonthBar.style.width = this.value + "%";
};

rangeInputCredit.oninput = function () {
  rangeInputCreditValue.textContent = this.value * 120;
  creditBar.style.width = this.value + "%";
  console.log(creditBar.style.width);
};

//  progress number count
let counter = 0;
setInterval(countProgress, 50);
function countProgress() {
  if (counter !== 60) {
    counter++;
    progressBar.textContent = `${counter} %`;
    cardProgressBar.textContent = `${counter} %`;
  } else {
    clearInterval();
  }
}

// validation

const checkFirstName = function () {
  const firstName = document.getElementById("first-name");
  const firstNameValue = firstName.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name can't be blank");
    return 0;
  } else {
    setSuccessFor(firstName);
    return 1;
  }
};

const checkLastName = function () {
  const lastName = document.getElementById("last-name");
  const lastNameValue = lastName.value.trim();

  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name can't be blank");
    return 0;
  } else {
    setSuccessFor(lastName);
    return 1;
  }
};

const checkAddress = function () {
  const address = document.getElementById("address");
  const addressValue = address.value.trim();
  const addressFormate = /^[a-zA-Z0-9\s,'-]*$/;

  if (addressValue === "") {
    setErrorFor(address, "Address is can't be blank");
  } else if (addressValue.match(addressFormate)) {
    setSuccessFor(address);
  } else {
    setErrorFor(address, "Address is invalid");
  }
};

const checkEmail = function () {
  const email = document.getElementById("email");
  const emailValue = email.value.trim();
  const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue === "") {
    setErrorFor(email, "Email can't be blank");
  } else if (emailValue.match(emailFormat)) {
    setSuccessFor(email);
  } else {
    setErrorFor(email, "Invalid email");
  }
};

function setErrorFor(input, message) {
  const inputHolder = input.parentElement;
  const errorMessage = inputHolder.querySelector(".input-error-msg");
  inputHolder.classList.add("error");
  inputHolder.classList.remove("success");
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const inputHolder = input.parentElement;
  inputHolder.classList.add("success");
  inputHolder.classList.remove("error");
}
