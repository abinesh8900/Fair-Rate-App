// const datePicker = document.getElementById("date-picker");
// const pervMthBtn = datePicker.querySelector(".perv-mth");
// const nextMthBtn = datePicker.querySelector(".next-mnt");
// const selectedDate = datePicker.querySelector(".selected-date");
// const selectedMonth = datePicker.querySelector(".month");
// const selectedYear = datePicker.querySelector(".year");
// const daysElement = datePicker.querySelector(".days");

// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// const currentDate = new Date();
// let date = currentDate.getDate();
// let month = currentDate.getMonth();
// let year = currentDate.getFullYear();

// selectedMonth.textContent = months[month];
// selectedYear.textContent = year;

// selectedDate.textContent = formateDate(currentDate);

// nextMthBtn.addEventListener("click", goTONextMth);
// pervMthBtn.addEventListener("click", goToPervMth);

// function goTONextMth() {
//   month++;
//   if (month > 11) {
//     month = 0;
//     year++;
//   }
//   selectedMonth.textContent = months[month];
//   selectedYear.textContent = year;
// }
// function goToPervMth() {
//   month--;
//   if (month < 0) {
//     month = 11;
//     year--;
//   }
//   selectedMonth.textContent = months[month];
//   selectedYear.textContent = year;
// }

// function formateDate(d) {
//   date = d.getDate();
//   date < 10 ? (date = `0${date}`) : date;
//   month = d.getMonth();
//   month < 10 ? (month = `0${month + 1}`) : month;
//   year = d.getFullYear();
//   console.log(typeof date, typeof month, typeof year);
//   return `${date} / ${month} / ${year}`;
// }

// function daysInMonth() {
//   da;
// }

const footer=document.getElementById("footer"),pageOneNext=document.getElementById("pg-one-next"),userNameField=document.getElementById("username-field"),userInfoField=document.getElementById("user-info-field"),userInfoNext=document.getElementById("user-info-next"),userInfoBack=document.getElementById("user-info-back"),inputSelect=document.getElementById("input-field-select"),optionContainer=document.getElementById("show-select-option"),optionItems=optionContainer.querySelectorAll(".option-item"),browesFileBtn=document.getElementById("browes-btn"),browesFileInput=document.getElementById("photo-proof"),dropArea=document.getElementById("drop-area"),uploadeItemsArea=document.getElementById("uploaded-items-area"),rangeInputPerMonth=document.getElementById("max-per-month"),rangeInputPerMonthValue=document.getElementById("per-month-value"),perMonthBar=document.getElementById("per-mon-progress-bar"),rangeInputCredit=document.getElementById("max-credit"),rangeInputCreditValue=document.getElementById("max-credit-value"),creditBar=document.getElementById("credit-progress-bar"),progressBar=document.getElementById("progress-value"),cardProgressBar=document.getElementById("card-progress-value"),showFooter=function(){footer.classList.remove("hidden")};let file;pageOneNext.addEventListener("click",(()=>{userNameField.classList.add("hidden"),userInfoField.classList.remove("hidden"),footer.classList.add("hidden")})),userInfoNext.addEventListener("click",(()=>{showFooter()})),inputSelect.addEventListener("click",(()=>{optionContainer.classList.toggle("active")})),userInfoBack.addEventListener("click",(()=>{userNameField.classList.remove("hidden"),userInfoField.classList.add("hidden"),showFooter()})),optionItems.forEach((e=>{e.addEventListener("click",(()=>{inputSelect.querySelector("p").textContent=e.querySelector("label").textContent,optionContainer.classList.remove("active")}))}));let fileArray=[];function showFile(){fileArray.push(file),console.log(fileArray);for(const t of fileArray){function e(e){if(0==e)return"0 Bytes";const t=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,t),2)+" "+["Bytes","KB","MB"][t]}console.log(t.name);const n=t.name.substring(t.name.lastIndexOf(".")+1);if("jpg"!=n&&"png"!=n&&"pdf"!=n)alert("invalid file");else if(t.size<5242880){uploadeItemsArea.innerHTML=`\n\n                  <div class="uploaded-items" id="uploaded-items">\n                  <div class="uploaded-file">\n                    <div class="uploaded-file__format-logo inline-block">\n                    <img src="dist/images/${n}-color.png" alt="formate">\n                      <span class="uploaded-file__name">${t.name}</span>\n                    </div>\n                    <p class="uploaded-file__format inline-block">${n}</p>\n                    <p class="uploaded-file__size inline-block">${e(t.size)}</p>\n                    <p class="uploaded-file__status">UPLOADED</p>\n                    <span class="uploaded-file__delete  inline-block" id="uploaded-file-delete">\n                      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">\n                        <defs>\n                            <path id="a" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/>\n                        </defs>\n                        <g fill="none" fill-rule="evenodd">\n                            <mask id="b" fill="#fff">\n                                <use xlink:href="#a"/>\n                            </mask>\n                            <g fill="#000" mask="url(#b)">\n                                <path d="M0 0h24v24H0z"/>\n                            </g>\n                        </g>\n                    </svg>\n                    </span>\n                  </div>\n                </div>\n    `;document.getElementById("uploaded-file-delete").addEventListener("click",(function(){}))}else alert("file size is large")}}browesFileBtn.addEventListener("click",(()=>{browesFileInput.click()})),browesFileInput.addEventListener("change",(function(){file=this.files[0],showFile()})),dropArea.addEventListener("dragover",(e=>{e.preventDefault()})),dropArea.addEventListener("drop",(e=>{e.preventDefault(),file=e.dataTransfer.files[0],showFile()})),rangeInputPerMonth.oninput=function(){rangeInputPerMonthValue.textContent=120*this.value,perMonthBar.style.width=this.value+"%"},rangeInputCredit.oninput=function(){rangeInputCreditValue.textContent=120*this.value,creditBar.style.width=this.value+"%",console.log(creditBar.style.width)};let counter=0;function countProgress(){60!==counter?(counter++,progressBar.textContent=`${counter} %`,cardProgressBar.textContent=`${counter} %`):clearInterval()}setInterval(countProgress,50);const checkFirstName=function(){const e=document.getElementById("first-name");return""===e.value.trim()?(setErrorFor(e,"First Name can't be blank"),0):(setSuccessFor(e),1)},checkLastName=function(){const e=document.getElementById("last-name");return""===e.value.trim()?(setErrorFor(e,"Last name can't be blank"),0):(setSuccessFor(e),1)},checkAddress=function(){const e=document.getElementById("address"),t=e.value.trim();""===t?setErrorFor(e,"Address is can't be blank"):t.match(/^[a-zA-Z0-9\s,'-]*$/)?setSuccessFor(e):setErrorFor(e,"Address is invalid")},checkEmail=function(){const e=document.getElementById("email"),t=e.value.trim();""===t?setErrorFor(e,"Email can't be blank"):t.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?setSuccessFor(e):setErrorFor(e,"Invalid email")};function setErrorFor(e,t){const n=e.parentElement,r=n.querySelector(".input-error-msg");n.classList.add("error"),n.classList.remove("success"),r.innerText=t}function setSuccessFor(e){const t=e.parentElement;t.classList.add("success"),t.classList.remove("error")}
fetch("./dist/result.json").then((function(t){return t.json()})).then((function(t){document.getElementById("result-area").innerHTML=`${t.map((function(t){return`\n        <div class="result-body-items">\n                <div class="result-body-items__logo-data">\n                  <a class="inline-block text-center" href="javascript:void(0)">\n                    <img src="${t.logo}" alt="${t.alt}">\n                  </a>\n                  <p class="result-body-items__caption">${t.id}</p>\n                </div>\n                <div class="result-body-items__apr-data">\n                  <p class="result-body-items__large-text">${t.apr}</p>\n                  <p class="result-body-items__caption">${t.date}</p>\n                </div>\n                <div class="result-body-items__rate-data">\n                  <p  class="result-body-items__dark-text">${t.rate}</p>\n                  <p  class="result-body-items__caption">${t.ratePoint}</p>\n                  <p  class="result-body-items__caption">${t.rateRateLock}</p>\n                </div>\n                <div class="result-body-items__fees-data">\n                  <p class="result-body-items__large-text inline-block">${t.payment}</p>\n                  <span  class="result-body-items__caption">${t.paymentFor}</span>\n                  <p  class="result-body-items__caption">${t.paymentPoint}</p>\n                  <p  class="result-body-items__caption">${t.paymentRateLock}</p>\n                </div>\n                <div class="result-body-items__qusetion-data">\n                  <a  class="result-body-items__dark-text inline-block" href="tel:${t.callNum}">${t.forCall}</a>\n                  <p class="result-body-items__caption">${t.forCallDesc}</p>\n                </div>\n                <div class="result-body-items__apply-btn">\n                  <span class="inline-block text-center float-r">NEXT</span>\n                </div>\n               </div>\n        `})).join("")}`}));