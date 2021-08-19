const footer=document.getElementById("footer"),pageOneNext=document.getElementById("pg-one-next"),userNameField=document.getElementById("username-field"),userInfoField=document.getElementById("user-info-field"),userInfoNext=document.getElementById("user-info-next"),userInfoBack=document.getElementById("user-info-back"),browesFileBtn=document.getElementById("browes-btn"),browesFileInput=document.getElementById("photo-proof"),showFooter=function(){footer.classList.remove("hidden")};pageOneNext.addEventListener("click",(()=>{userNameField.classList.add("hidden"),userInfoField.classList.remove("hidden"),footer.classList.add("hidden")})),userInfoNext.addEventListener("click",(()=>{showFooter()})),userInfoBack.addEventListener("click",(()=>{userNameField.classList.remove("hidden"),userInfoField.classList.add("hidden"),showFooter()}));const inputSelect=document.getElementById("input-field-select"),optionContainer=document.getElementById("show-select-option"),optionItems=optionContainer.querySelectorAll(".option-item");inputSelect.addEventListener("click",(()=>{optionContainer.classList.toggle("active")})),optionItems.forEach((e=>{e.addEventListener("click",(()=>{inputSelect.querySelector("p").textContent=e.querySelector("label").textContent,optionContainer.classList.remove("active")}))}));const checkFirstName=function(){const e=document.getElementById("first-name");return""===e.value.trim()?(setErrorFor(e,"First Name can't be blank"),0):(setSuccessFor(e),1)},checkLastName=function(){const e=document.getElementById("last-name");return""===e.value.trim()?(setErrorFor(e,"Last name can't be blank"),0):(setSuccessFor(e),1)},checkAddress=function(){const e=document.getElementById("address"),t=e.value.trim();""===t?setErrorFor(e,"Address is can't be blank"):t.match(/^[a-zA-Z0-9\s,'-]*$/)?setSuccessFor(e):setErrorFor(e,"Address is invalid")},checkEmail=function(){const e=document.getElementById("email"),t=e.value.trim();""===t?setErrorFor(e,"Email can't be blank"):t.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?setSuccessFor(e):setErrorFor(e,"Invalid email")};function setErrorFor(e,t){const n=e.parentElement,o=n.querySelector(".input-error-msg");n.classList.add("error"),n.classList.remove("success"),o.innerText=t}function setSuccessFor(e){const t=e.parentElement;t.classList.add("success"),t.classList.remove("error")}browesFileBtn.addEventListener("click",(()=>{browesFileInput.click()}));const rangeInputPerMonth=document.getElementById("max-per-month"),rangeInputPerMonthValue=document.getElementById("per-month-value"),perMonthBar=document.getElementById("per-mon-progress-bar");rangeInputPerMonth.oninput=function(){rangeInputPerMonthValue.textContent=120*this.value,perMonthBar.style.width=this.value+"%"};const rangeInputCredit=document.getElementById("max-credit"),rangeInputCreditValue=document.getElementById("max-credit-value"),creditBar=document.getElementById("credit-progress-bar");rangeInputCredit.oninput=function(){rangeInputCreditValue.textContent=120*this.value,creditBar.style.width=this.value+"%",console.log(creditBar.style.width)};