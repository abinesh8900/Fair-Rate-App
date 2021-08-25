const inputHolders = document.getElementById("input-field");
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
const uploadeSection = document.getElementById("upload-section");
const browesFileBtn = document.getElementById("browes-btn");
const browesFileInput = document.getElementById("photo-proof");
const dropArea = document.getElementById("drop-area");
const uploadeItemsArea = document.getElementById("uploaded-items-area");
const uploadeSectionNext = document.getElementById("uplode-section-next");
const uploadeSectionBack = document.getElementById("upload-section-back");
// result section
const resultSection = document.getElementById("result-section");

//pricing section
const pricingSection = document.getElementById("pricing-section");
const pricingSectionNext = document.getElementById("pricing-next");
const rangeInputPerMonth = document.getElementById("max-per-month");
const rangeInputPerMonthValue = document.getElementById("per-month-value");
const perMonthBar = document.getElementById("per-mon-progress-bar");
const rangeInputCredit = document.getElementById("max-credit");
const rangeInputCreditValue = document.getElementById("max-credit-value");
const creditBar = document.getElementById("credit-progress-bar");

// status section
const statusSection = document.getElementById("status-section");
const progressBar = document.getElementById("progress-value");
const cardProgressBar = document.getElementById("card-progress-value");
const statusSectionNext = document.getElementById("status-section-next");

// complete section
const completeSection = document.getElementById("complete-app");

function showFooter() {
  footer.classList.remove("hidden");
}
function hideFooter() {
  footer.classList.add("hidden");
}
function add(elementToAdd) {
  elementToAdd.classList.add("hidden");
}
function remove(elementToRemove) {
  elementToRemove.classList.remove("hidden");
}

//***user name****//

// next btn
pageOneNext.addEventListener("click", () => {
  // console.log("check");
  checkUserName();
});

//***user info****//
// next btn
userInfoNext.addEventListener("click", () => {
  checkUserInfo();
});
//back btn
userInfoBack.addEventListener("click", () => {
  add(userInfoField);
  remove(userNameField);
  showFooter();
});

// *** upload section ***//
// next btn
uploadeSectionNext.addEventListener("click", function () {
  checkuploadFile();
});
//  back btn
uploadeSectionBack.addEventListener("click", function () {
  add(uploadeSection);
  remove(userInfoField);
  hideFooter();
});
// *** result section *** //
function loadeLate() {
  const resultSectionNextBtns = resultSection.querySelectorAll(
    ".result-section-next"
  );
  for (const resultSectionNextBtn of resultSectionNextBtns) {
    resultSectionNextBtn.addEventListener("click", function () {
      add(resultSection);
      remove(pricingSection);
    });
  }
}

//*** pricing section ***//
pricingSectionNext.addEventListener("click", function () {
  add(pricingSection);
  remove(statusSection);
  progressload(progressBar);
  inputHolders.classList.add("reduce");
});

// *** status section *** //
statusSectionNext.addEventListener("click", function () {
  add(statusSection);
  remove(completeSection);
  progressload(cardProgressBar);
  inputHolders.classList.remove("reduce");
});

//
//
//
//
// input select
inputSelect.addEventListener("click", () => {
  optionContainer.classList.toggle("active");
});

optionItems.forEach((optionItem) => {
  optionItem.addEventListener("click", () => {
    inputSelect.querySelector(".input-field__selected-item").textContent =
      optionItem.querySelector("label").textContent;
    optionContainer.classList.remove("active");
  });
});

// if (inputSelect.querySelector("p").textContent != "--Select") {
//   // inputSelect.classList.add("blue-border");
//   console.log("equal");
// } else {
//   console.log("not equal");
// }

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
let uplodeFileCheckNavigation = false;
function showFile() {
  // console.log(file);
  // fileArray.push(file);
  // file = "";
  // console.log(fileArray);
  // for (const listOfFile of fileArray) {
  // console.log(listOfFile.name);

  const fileType = file.name.substring(file.name.lastIndexOf(".") + 1);
  if (!(fileType == "jpg" || fileType == "png" || fileType == "pdf")) {
    alert("invalid file");
    uplodeFileCheckNavigation = false;
  } else if (!(file.size < 5242880)) {
    alert("file size is large");
    uplodeFileCheckNavigation = false;
  } else {
    console.log(file);
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
    uploadedFileDelete.setAttribute("id", "delete-this-file");
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

    const deleteUploadedFile = document.getElementById("delete-this-file");
    deleteUploadedFile.addEventListener("click", function () {
      uploadedItems.remove();
      // console.log("remove");
    });
    // console.log("while uplode");
    uplodeFileCheckNavigation = true;
    return uplodeFileCheckNavigation;
  }
  // }
}
function checkuploadFile() {
  if (uplodeFileCheckNavigation == true) {
    add(uploadeSection);
    remove(resultSection);
    loadeLate();
  } else {
    alert("uplode required files");
  }
}
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
function progressload(whichSection) {
  let counter = 0;
  setInterval(countProgress, 50);
  function countProgress() {
    if (counter !== 60) {
      counter++;
      whichSection.textContent = `${counter} %`; //whichSection = progressBar //whichSection = cardProgressBar
    } else {
      clearInterval();
    }
  }
}

// validation
const firstName = document.getElementById("first-name");
firstName.addEventListener("keyup", checkFirstName);

function checkFirstName() {
  const firstNameValue = firstName.value.trim();
  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name can't be blank");
    return false;
  } else {
    setSuccessFor(firstName);
    return true;
  }
}

const lastName = document.getElementById("last-name");
lastName.addEventListener("keyup", checkLastName);
function checkLastName() {
  const lastNameValue = lastName.value.trim();
  if (lastNameValue === "") {
    setErrorFor(lastName, "Last name can't be blank");
    return false;
  } else {
    setSuccessFor(lastName);
    return true;
  }
}

function checkUserName() {
  if (checkFirstName() == true && checkLastName() == true) {
    add(userNameField);
    remove(userInfoField);
    hideFooter();
    console.log("valid");
  } else {
    console.log("invalid");
  }
}

const dateOfBirth = document.getElementById("date-of-birth");
dateOfBirth.addEventListener("change", checkDateOfBith);
function checkDateOfBith() {
  if (dateOfBirth.value === "") {
    setErrorFor(dateOfBirth, "select your date of birth");
    return false;
  } else {
    setSuccessFor(dateOfBirth);
    return true;
  }
}

const address = document.getElementById("address");
address.addEventListener("keyup", checkAddress);
function checkAddress() {
  const addressValue = address.value.trim();
  const addressFormate = /^[a-zA-Z0-9\s,'-]*$/;

  if (addressValue === "") {
    setErrorFor(address, "Address is can't be blank");
    return false;
  } else if (addressValue.match(addressFormate)) {
    setSuccessFor(address);
    return true;
  } else {
    setErrorFor(address, "Address is invalid");
    return false;
  }
}
const email = document.getElementById("email");
email.addEventListener("keyup", checkEmail);

function checkEmail() {
  const emailValue = email.value.trim();
  const emailFormat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue === "") {
    setErrorFor(email, "Email can't be blank");
    return false;
  } else if (emailValue.match(emailFormat)) {
    setSuccessFor(email);
    return true;
  } else {
    setErrorFor(email, "Invalid email");
    return false;
  }
}
// *** property check box **//

const condoCheckbox = document.getElementById("condo-checkbox");
const coOpCheckbox = document.getElementById("co-op-checkbox");
const houseCheckbox = document.getElementById("house-checkbox");
const condo = document.getElementById("condo");
const coOp = document.getElementById("co-op");
const house = document.getElementById("house");
// console.log(condoCheckbox, condoCheckbox, houseCheckbox, condo, coOp, house);
function removeBlueBorder(removeForThis) {
  removeForThis.classList.remove("blue-border");
  selectedCheckbox();
}
function addBlueBorder(addForThis) {
  addForThis.classList.add("blue-border");
  selectedCheckbox();
}

// let propertyCheckbox = false;
let condoCheckboxValue = false,
  coOpCheckboxValue = false,
  houseCheckboxValue = false;
condo.addEventListener("change", function () {
  if (condo.checked == true) {
    condoCheckboxValue = true;
    addBlueBorder(condoCheckbox);
    return condoCheckboxValue;
  }
});

condo.addEventListener("change", function () {
  if (condo.checked == false) {
    condoCheckboxValue = false;
    removeBlueBorder(condoCheckbox);
    return condoCheckboxValue;
  }
});
coOp.addEventListener("change", function () {
  if (coOp.checked == true) {
    coOpCheckboxValue = true;
    addBlueBorder(coOpCheckbox);
    return coOpCheckboxValue;
  }
});
coOp.addEventListener("change", function () {
  if (coOp.checked == false) {
    coOpCheckboxValue = false;
    removeBlueBorder(coOpCheckbox);
    return coOpCheckboxValue;
  }
});
house.addEventListener("change", function () {
  if (house.checked == true) {
    houseCheckboxValue = true;
    addBlueBorder(houseCheckbox);
    return houseCheckboxValue;
  }
});
house.addEventListener("change", function () {
  if (house.checked == false) {
    houseCheckboxValue = false;
    removeBlueBorder(houseCheckbox);
    return houseCheckboxValue;
  }
});
function selectedCheckbox() {
  // console.log(condoCheckboxValue, coOpCheckboxValue, houseCheckboxValue);
  const propertyCheckboxHolder = document.getElementById(
    "property-checkbox-holder"
  );
  if (condoCheckboxValue || coOpCheckboxValue || houseCheckboxValue) {
    propertyCheckboxHolder.classList.remove("error");
    return true;
  } else {
    propertyCheckboxHolder.classList.add("error");
    return false;
  }
}

// *** select input ***//
const selectDurations = optionContainer.querySelectorAll("input");
let selectDurationValid = false;
for (const selectDuration of selectDurations) {
  selectDuration.addEventListener("change", checkSelectDuration);
  function checkSelectDuration() {
    if (selectDuration.checked) {
      inputSelect.classList.add("blue-border");
      inputSelect.classList.remove("error");
      selectDurationValid = true;
    } else if (
      inputSelect.querySelector(".input-field__selected-item").innerText ==
      "--Select"
    ) {
      inputSelect.classList.add("error");
      selectDurationValid = false;
    }
    return selectDurationValid;
  }
}

// *** picture checkbox *** //

const criminalAlarm = document.getElementById(
  "picture-checkbox-criminal-alarm"
);
const alarmCheckboxHolder = criminalAlarm.parentElement;
const firelAlarm = document.getElementById("picture-checkbox-fire-alarm");
const criminalAlarmCheckbox = document.getElementById("criminal-alarm");
const fireAlarmCheckbox = document.getElementById("fire-alarm");

let criminalAlarmValue = false,
  firelAlarmValue = false;
criminalAlarmCheckbox.addEventListener("change", function () {
  if (criminalAlarmCheckbox.checked) {
    criminalAlarm.classList.add("active");
    firelAlarm.classList.remove("active");
    alarmCheckboxHolder.classList.remove("error");
    criminalAlarmValue = true;
    firelAlarmValue = false;
    alarmCheckbox();
  }
});
fireAlarmCheckbox.addEventListener("change", function () {
  if (fireAlarmCheckbox.checked) {
    firelAlarm.classList.add("active");
    criminalAlarm.classList.remove("active");
    alarmCheckboxHolder.classList.remove("error");
    firelAlarmValue = true;
    criminalAlarmValue = false;
    alarmCheckbox();
  }
});
function alarmCheckbox() {
  if (criminalAlarmValue || firelAlarmValue) {
    return true;
  } else {
    alarmCheckboxHolder.classList.add("error");
    return false;
  }
}

function checkUserInfo() {
  // console.log(
  //   selectedCheckbox(),
  //   checkAddress(),
  //   checkEmail(),
  //   checkSelectDuration()
  // );

  if (
    checkDateOfBith() == true &&
    checkAddress() == true &&
    checkEmail() == true &&
    selectedCheckbox() == true &&
    checkSelectDuration() == true &&
    alarmCheckbox() == true
  ) {
    console.log("navigate");
    add(userInfoField);
    remove(uploadeSection);
    showFooter();
  } else {
    console.log("no navigate");
  }
}

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
