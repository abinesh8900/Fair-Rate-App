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

const inputHolders=document.getElementById("input-field"),footer=document.getElementById("footer"),pageOneNext=document.getElementById("pg-one-next"),userNameField=document.getElementById("username-field"),userInfoField=document.getElementById("user-info-field"),userInfoNext=document.getElementById("user-info-next"),userInfoBack=document.getElementById("user-info-back"),inputSelect=document.getElementById("input-field-select"),optionContainer=document.getElementById("show-select-option"),optionItems=optionContainer.querySelectorAll(".option-item"),uploadeSection=document.getElementById("upload-section"),browesFileBtn=document.getElementById("browes-btn"),browesFileInput=document.getElementById("photo-proof"),dropArea=document.getElementById("drop-area"),uploadeItemsArea=document.getElementById("uploaded-items-area"),uploadeSectionNext=document.getElementById("uplode-section-next"),uploadeSectionBack=document.getElementById("upload-section-back"),resultSection=document.getElementById("result-section"),pricingSection=document.getElementById("pricing-section"),pricingSectionNext=document.getElementById("pricing-next"),rangeInputPerMonth=document.getElementById("max-per-month"),rangeInputPerMonthValue=document.getElementById("per-month-value"),perMonthBar=document.getElementById("per-mon-progress-bar"),rangeInputCredit=document.getElementById("max-credit"),rangeInputCreditValue=document.getElementById("max-credit-value"),creditBar=document.getElementById("credit-progress-bar"),statusSection=document.getElementById("status-section"),progressBar=document.getElementById("progress-value"),cardProgressBar=document.getElementById("card-progress-value"),statusSectionNext=document.getElementById("status-section-next"),completeSection=document.getElementById("complete-app");function showFooter(){footer.classList.remove("hidden")}function hideFooter(){footer.classList.add("hidden")}function add(e){e.classList.add("hidden")}function remove(e){e.classList.remove("hidden")}function loadeLate(){const e=resultSection.querySelectorAll(".result-section-next");for(const t of e)t.addEventListener("click",(function(){add(resultSection),remove(pricingSection)}))}let file;pageOneNext.addEventListener("click",(()=>{add(userNameField),remove(userInfoField),hideFooter()})),userInfoNext.addEventListener("click",(()=>{add(userInfoField),remove(uploadeSection),showFooter()})),userInfoBack.addEventListener("click",(()=>{add(userInfoField),remove(userNameField),showFooter()})),uploadeSectionNext.addEventListener("click",(function(){add(uploadeSection),remove(resultSection),loadeLate()})),uploadeSectionBack.addEventListener("click",(function(){add(uploadeSection),remove(userInfoField),hideFooter()})),pricingSectionNext.addEventListener("click",(function(){add(pricingSection),remove(statusSection),progressload(progressBar),inputHolders.classList.add("reduce")})),statusSectionNext.addEventListener("click",(function(){add(statusSection),remove(completeSection),progressload(cardProgressBar),inputHolders.classList.remove("reduce")})),inputSelect.addEventListener("click",(()=>{optionContainer.classList.toggle("active")})),optionItems.forEach((e=>{e.addEventListener("click",(()=>{inputSelect.querySelector("p").textContent=e.querySelector("label").textContent,optionContainer.classList.remove("active")}))}));let fileArray=[];function showFile(){fileArray.push(file),file="",console.log(fileArray);for(const e of fileArray){const t=e.name.substring(e.name.lastIndexOf(".")+1);if("jpg"!=t&&"png"!=t&&"pdf"!=t)alert("invalid file");else if(e.size<5242880){console.log(e);const n=document.createElement("div");n.classList.add("uploaded-items");const o=document.createElement("div");o.classList.add("uploaded-file");const r=document.createElement("div");r.classList.add("uploaded-file__format-logo");const s=document.createElement("img");s.setAttribute("src",`dist/images/${t}-color.png`);const i=document.createElement("span");i.innerText=reduceFileChar(e.name);const d=document.createElement("p");d.classList.add("uploaded-file__format"),d.innerText=t;const c=document.createElement("p");c.classList.add("uploaded-file__size"),c.innerText=byteToSize(e.size);const a=document.createElement("p");a.classList.add("uploaded-file__status"),a.innerText="UPLOADED";const l=document.createElement("span");l.setAttribute("id","delete-this-file"),l.classList.add("uploaded-file__delete","inline-block");const u=document.createElement("img");u.setAttribute("src","dist/images/delete-outline.svg"),uploadeItemsArea.append(n),n.append(o),o.append(r,d,c,a,l),r.append(s,i),l.append(u);document.getElementById("delete-this-file").addEventListener("click",(function(){n.remove()}))}else alert("file size is large")}}function reduceFileChar(e){if(e.length>=10){let t=e.split(".");return e=t[0].substring(0,10)+"... ."+t[1]}return e}function byteToSize(e){if(0==e)return"0 Bytes";const t=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,t),2)+" "+["Bytes","KB","MB"][t]}function progressload(e){let t=0;setInterval((function(){60!==t?(t++,e.textContent=`${t} %`):clearInterval()}),50)}browesFileBtn.addEventListener("click",(()=>{browesFileInput.click()})),browesFileInput.addEventListener("change",(function(){file=this.files[0],showFile()})),dropArea.addEventListener("dragover",(e=>{e.preventDefault()})),dropArea.addEventListener("drop",(e=>{e.preventDefault(),file=e.dataTransfer.files[0],showFile()})),rangeInputPerMonth.oninput=function(){rangeInputPerMonthValue.textContent=120*this.value,perMonthBar.style.width=this.value+"%"},rangeInputCredit.oninput=function(){rangeInputCreditValue.textContent=120*this.value,creditBar.style.width=this.value+"%",console.log(creditBar.style.width)};const checkFirstName=function(){const e=document.getElementById("first-name");return""===e.value.trim()?(setErrorFor(e,"First Name can't be blank"),0):(setSuccessFor(e),1)},checkLastName=function(){const e=document.getElementById("last-name");return""===e.value.trim()?(setErrorFor(e,"Last name can't be blank"),0):(setSuccessFor(e),1)},checkAddress=function(){const e=document.getElementById("address"),t=e.value.trim();""===t?setErrorFor(e,"Address is can't be blank"):t.match(/^[a-zA-Z0-9\s,'-]*$/)?setSuccessFor(e):setErrorFor(e,"Address is invalid")},checkEmail=function(){const e=document.getElementById("email"),t=e.value.trim();""===t?setErrorFor(e,"Email can't be blank"):t.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?setSuccessFor(e):setErrorFor(e,"Invalid email")};function setErrorFor(e,t){const n=e.parentElement,o=n.querySelector(".input-error-msg");n.classList.add("error"),n.classList.remove("success"),o.innerText=t}function setSuccessFor(e){const t=e.parentElement;t.classList.add("success"),t.classList.remove("error")}
fetch("./dist/result.json").then((function(t){return t.json()})).then((function(t){document.getElementById("result-area").innerHTML=`${t.map((function(t){return`\n        <div class="result-body-items">\n                <div class="result-body-items__logo-data">\n                  <a class="inline-block text-center" href="javascript:void(0)">\n                    <img src="${t.logo}" alt="${t.alt}">\n                  </a>\n                  <p class="result-body-items__caption">${t.id}</p>\n                </div>\n                <div class="result-body-items__apr-data">\n                  <p class="result-body-items__large-text">${t.apr}</p>\n                  <p class="result-body-items__caption">${t.date}</p>\n                </div>\n                <div class="result-body-items__rate-data">\n                  <p  class="result-body-items__dark-text">${t.rate}</p>\n                  <p  class="result-body-items__caption">${t.ratePoint}</p>\n                  <p  class="result-body-items__caption">${t.rateRateLock}</p>\n                </div>\n                <div class="result-body-items__fees-data">\n                  <p class="result-body-items__large-text inline-block">${t.payment}</p>\n                  <span  class="result-body-items__caption">${t.paymentFor}</span>\n                  <p  class="result-body-items__caption">${t.paymentPoint}</p>\n                  <p  class="result-body-items__caption">${t.paymentRateLock}</p>\n                </div>\n                <div class="result-body-items__qusetion-data">\n                  <a  class="result-body-items__dark-text inline-block" href="tel:${t.callNum}">${t.forCall}</a>\n                  <p class="result-body-items__caption">${t.forCallDesc}</p>\n                </div>\n                <div class="result-body-items__apply-btn">\n                  <a href="#" class="inline-block text-center float-r result-section-next" id="result-section-next">NEXT</a>\n                </div>\n               </div>\n        `})).join("")}`}));