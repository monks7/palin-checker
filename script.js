const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

function cleanString(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

function isPalindrome(str) {
  const cleaned = cleanString(str);
  return cleaned === cleaned.split("").reverse().join("");
}

checkBtn.addEventListener("click", () => {
  const original = input.value;

  if (!original) {
    alert("Por favor ingrese un valor.");
    return;
  }

  const palin = isPalindrome(original);
  result.textContent = `${original} ${palin ? "es un palíndromo" : "no es un palíndromo"}`;
});
