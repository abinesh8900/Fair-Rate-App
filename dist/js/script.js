const footer=document.getElementById("footer"),pageOneNext=document.getElementById("pg-one-next"),userNameField=document.getElementById("username-field"),userInfoField=document.getElementById("user-info-field"),userInfoNext=document.getElementById("user-info-next"),userInfoBack=document.getElementById("user-info-back"),showFooter=function(){footer.classList.remove("hidden")};pageOneNext.addEventListener("click",(()=>{userNameField.classList.add("hidden"),userInfoField.classList.remove("hidden"),footer.classList.add("hidden")})),userInfoNext.addEventListener("click",(()=>{showFooter()})),userInfoBack.addEventListener("click",(()=>{userNameField.classList.remove("hidden"),userInfoField.classList.add("hidden"),showFooter()}));