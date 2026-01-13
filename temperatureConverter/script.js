const tempInput = document.getElementById("tempInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const resultBox = document.getElementById("resultBox");
const errorMsg = document.getElementById("errorMsg");

convertBtn.addEventListener("click", convertTemperature);

function convertTemperature() {
  const value = tempInput.value.trim();
  const unit = unitSelect.value;

  resultBox.classList.remove("show");
  errorMsg.textContent = "";

  if (value === "" || isNaN(value)) {
    errorMsg.textContent = "Please enter a valid numeric value.";
    return;
  }

  const temp = parseFloat(value);
  let result = "";

  if (unit === "celsius") {
    const f = (temp * 9/5) + 32;
    const k = temp + 273.15;
    result = `${f.toFixed(2)} °F | ${k.toFixed(2)} K`;
  } 
  else if (unit === "fahrenheit") {
    const c = (temp - 32) * 5/9;
    const k = c + 273.15;
    result = `${c.toFixed(2)} °C | ${k.toFixed(2)} K`;
  } 
  else if (unit === "kelvin") {
    const c = temp - 273.15;
    const f = (c * 9/5) + 32;
    result = `${c.toFixed(2)} °C | ${f.toFixed(2)} °F`;
  }

  resultBox.textContent = result;
  resultBox.classList.add("show");
}
