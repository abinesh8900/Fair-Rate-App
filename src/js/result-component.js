fetch("./dist/result.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (results) {
    console.log(results);
    document.getElementById("result-area").innerHTML = `${results
      .map(function (result) {
        return `
        <div class="result-body-items">
                <div class="result-body-items__logo-data">
                  <a class="inline-block text-center" href="javascript:void(0)">
                    <img src="${result.logo}" alt="${result.alt}">
                  </a>
                  <p class="result-body-items__caption">${result.id}</p>
                </div>
                <div class="result-body-items__apr-data">
                  <p class="result-body-items__large-text">${result.apr}</p>
                  <p class="result-body-items__caption">${result.date}</p>
                </div>
                <div class="result-body-items__rate-data">
                  <p  class="result-body-items__dark-text">${result.rate}</p>
                  <p  class="result-body-items__caption">${result.ratePoint}</p>
                  <p  class="result-body-items__caption">${result.rateRateLock}</p>
                </div>
                <div class="result-body-items__fees-data">
                  <p class="result-body-items__large-text inline-block">${result.payment}</p>
                  <span  class="result-body-items__caption">${result.paymentFor}</span>
                  <p  class="result-body-items__caption">${result.paymentPoint}</p>
                  <p  class="result-body-items__caption">${result.paymentRateLock}</p>
                </div>
                <div class="result-body-items__qusetion-data">
                  <a  class="result-body-items__dark-text inline-block" href="tel:${result.callNum}">${result.forCall}</a>
                  <p class="result-body-items__caption">${result.forCallDesc}</p>
                </div>
                <div class="result-body-items__apply-btn">
                  <span class="inline-block text-center float-r">NEXT</span>
                </div>
               </div>
        `;
      })
      .join("")}`;
  });
