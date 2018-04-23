const keys = document.querySelectorAll("[data-key]");

function handleDisplay(key) {
  if (key === "NaN") {
    setTimeout(() => displayForm.reset(), 750);
  }
  if (displayForm.entries.value.length < 10 && key != undefined) {
    displayForm.entries.value += key;
  }
}
function deleteEntry() {
  let entries = Array.from(displayForm.entries.value);
  entries.pop();
  let newEntry = entries.join("");
  displayForm.reset();
  handleDisplay(newEntry);
}

function evaluate() {
  let answer = eval(displayForm.entries.value);
  console.log(answer);
  displayForm.reset();
  handleDisplay(answer);
}

function fix(value) {
  if (value % 1 !== 0) {
    let rounded = Math.round(value);
    let length = String(rounded).length;
    return 10 - length;
  } else {
    return 0;
  }
}

function sqrt() {
  let answer = eval(displayForm.entries.value);
  answer = Math.sqrt(answer);
  console.log(answer);
  displayForm.reset();
  handleDisplay(answer.toFixed(fix(answer)));
}

function handleNumKey() {
  if (String(this.dataset.key) === "clear") {
    displayForm.reset();
  } else if (String(this.dataset.key) === "=") {
    evaluate();
  } else if (String(this.dataset.key) === "del") {
    deleteEntry();
  } else if (String(this.dataset.key) === "sqrt") {
    sqrt();
  } else {
    handleDisplay(this.dataset.key);
  }
}

keys.forEach(key => key.addEventListener("click", handleNumKey));
