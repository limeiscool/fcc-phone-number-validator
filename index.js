const form = document.getElementById("check-btn");
const numberInput = document.getElementById("user-input");
const phoneScreen = document.querySelector(".phone-screen");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

clearBtn.addEventListener("click", (e) => {
  e.preventDefault();
  numberInput.value = "";
  resultsDiv.textContent = "";
  phoneScreen.style.backgroundColor = "white";
});

form.addEventListener("click", (e) => {
  e.preventDefault();
  const number = numberInput.value;

  if (number === "") {
    window.alert("Please provide a phone number");
    return;
  }
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  if (regex.test(number)) {
    phoneScreen.style.backgroundColor = "green";
    resultsDiv.textContent = `Valid US number: ${number}`;
  } else {
    phoneScreen.style.backgroundColor = "red";
    resultsDiv.textContent = `Invalid US number: ${number}`;
  }
});
