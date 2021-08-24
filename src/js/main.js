const footer = document.getElementById("footer");
// username section
const pageOneNext = document.getElementById("pg-one-next");
const userNameField = document.getElementById("username-field");
// userinfor section
const userInfoField = document.getElementById("user-info-field");
const userInfoNext = document.getElementById("user-info-next");
const userInfoBack = document.getElementById("user-info-back");
const inputSelect = document.getElementById("input-field-select");
const optionContainer = document.getElementById("show-select-option");
const optionItems = optionContainer.querySelectorAll(".option-item");
// uplode section
const browesFileBtn = document.getElementById("browes-btn");
const browesFileInput = document.getElementById("photo-proof");
const dropArea = document.getElementById("drop-area");
const uploadeItemsArea = document.getElementById("uploaded-items-area");

//pricing section
const rangeInputPerMonth = document.getElementById("max-per-month");
const rangeInputPerMonthValue = document.getElementById("per-month-value");
const perMonthBar = document.getElementById("per-mon-progress-bar");
const rangeInputCredit = document.getElementById("max-credit");
const rangeInputCreditValue = document.getElementById("max-credit-value");
const creditBar = document.getElementById("credit-progress-bar");

// status section
const progressBar = document.getElementById("progress-value");
const cardProgressBar = document.getElementById("card-progress-value");

const showFooter = function () {
  footer.classList.remove("hidden");
};

//***user name****//

// next btn
pageOneNext.addEventListener("click", () => {
  userNameField.classList.add("hidden");
  userInfoField.classList.remove("hidden");
  footer.classList.add("hidden");
});

//***user info****//

// show footer
userInfoNext.addEventListener("click", () => {
  showFooter();
});
// next btn
inputSelect.addEventListener("click", () => {
  optionContainer.classList.toggle("active");
});
//back btn
userInfoBack.addEventListener("click", () => {
  userNameField.classList.remove("hidden");
  userInfoField.classList.add("hidden");
  showFooter();
});
// input select
optionItems.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    inputSelect.querySelector("p").textContent =
      optionItem.querySelector("label").textContent;
    optionContainer.classList.remove("active");
  });
});

//*** uploade files section ***//

//  uploade file
let file;
// let fileArray = [];
browesFileBtn.addEventListener("click", () => {
  browesFileInput.click();
});
browesFileInput.addEventListener("change", function () {
  file = this.files[0];
  // console.log(file);
  showFile();
});
dropArea.addEventListener("dragover", (event) => {
  event.preventDefault();
});
dropArea.addEventListener("drop", (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  showFile();
});
function showFile() {
  console.log(file);
  // fileArray.push(file);
  // console.log(fileArray);
  // for (const listOfFile of fileArray) {
  //   console.log(listOfFile.name);

  const fileType = file.name.substring(file.name.lastIndexOf(".") + 1);
  if (!(fileType == "jpg" || fileType == "png" || fileType == "pdf")) {
    alert("invalid file");
  } else if (!(file.size < 5242880)) {
    alert("file size is large");
  } else {
    const uploadedItems = document.createElement("div");
    uploadedItems.classList.add("uploaded-items");

    const uploadedFile = document.createElement("div");
    uploadedFile.classList.add("uploaded-file");

    const uploadedFileFormat = document.createElement("div");
    uploadedFileFormat.classList.add("uploaded-file__format-logo");

    const fileTypeLogo = document.createElement("img");
    fileTypeLogo.setAttribute("src", `dist/images/${fileType}-color.png`);

    const uploadedFileName = document.createElement("span");
    // uploadedFileName.classList.add("uploaded-file__name");
    uploadedFileName.innerText = reduceFileChar(file.name);

    const uploadedFileType = document.createElement("p");
    uploadedFileType.classList.add("uploaded-file__format");
    uploadedFileType.innerText = fileType;

    const uploadedFileSize = document.createElement("p");
    uploadedFileSize.classList.add("uploaded-file__size");
    uploadedFileSize.innerText = byteToSize(file.size);

    const uploadedFileStatus = document.createElement("p");
    uploadedFileStatus.classList.add("uploaded-file__status");
    uploadedFileStatus.innerText = "UPLOADED";

    const uploadedFileDelete = document.createElement("span");
    uploadedFileDelete.setAttribute("id", "delect-this-file");
    uploadedFileDelete.classList.add("uploaded-file__delete", "inline-block");

    const uploadedFileDeleteIcon = document.createElement("img");
    uploadedFileDeleteIcon.setAttribute(
      "src",
      "dist/images/delete-outline.svg"
    );
    uploadeItemsArea.append(uploadedItems);
    uploadedItems.append(uploadedFile);
    uploadedFile.append(
      uploadedFileFormat,
      uploadedFileType,
      uploadedFileSize,
      uploadedFileStatus,
      uploadedFileDelete
    );
    uploadedFileFormat.append(fileTypeLogo, uploadedFileName);
    uploadedFileDelete.append(uploadedFileDeleteIcon);

    const delectUploadedFile = document.getElementById("delect-this-file");
    delectUploadedFile.addEventListener("click", function () {
      uploadeItems.remove();
    });
  }
}
// }
function reduceFileChar(char) {
  if (char.length >= 10) {
    let splitName = char.split(".");
    char = splitName[0].substring(0, 10) + "... ." + splitName[1];
    return char;
  } else {
    return char;
  }
}
function byteToSize(byte) {
  const size = ["Bytes", "KB", "MB"];
  if (byte == 0) return "0 Bytes";
  const i = parseInt(Math.floor(Math.log(byte) / Math.log(1024)));
  return Math.round(byte / Math.pow(1024, i), 2) + " " + size[i];
}

//*** pricing section ***//

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

//*** status section ***//

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
