const rateCard = document.querySelector(".rate");
const thankCard = document.querySelector(".thank");
const submitBtn = document.querySelector(".btn");
const result = document.querySelector("#rate-result");
let rates = document.querySelectorAll(".rating-numbers button");

rates.forEach((rate, index) => {
  rate.addEventListener("click", () => {
    let current_rate = index + 1;
    result.innerText = `${current_rate}` + " ";

    submitBtn.style.cursor = "pointer";
    submitBtn.classList.add("hovered");
  });

  submitBtn.addEventListener("click", () => {
    rateCard.style.display = "none";
    thankCard.style.display = "flex";
  });
});
