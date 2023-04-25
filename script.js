const inpt = document.querySelector(".inpt");
const btn = document.querySelector("button");
const error = document.querySelector(".error-p");

let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener("click", () => {
  console.log(inpt.value);
  if (!regex.test(inpt.value)) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});
