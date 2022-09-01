const form = document.querySelector(".captcha");
const showRandom = document.querySelector(".random");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");

const loginBtn = document.querySelector(".loginBtn");

const randomNumber1 = Math.floor(Math.random() * 100);
const randomNumber2 = Math.floor(Math.random() * 100);

function equalNumber(number) {
  number = randomNumber1 + randomNumber2;
  console.log(number);

  const equal = `${randomNumber1} + ${randomNumber2} =`;
  showRandom.innerHTML = equal;
  console.log(equal);

  let mistakes = 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputValue = input.value;
    console.log(inputValue);

    if (number == inputValue) {
      msg.innerHTML = "Successful!";
      msg.classList.add("magSuccessful");
      msg.classList.remove("msgError");
    } else {
      mistakes++;
      msg.classList.add("msgError");
      msg.classList.remove("magSuccessful");
      const mistakesMsg = `Wrong! ${mistakes}`;
      msg.innerHTML = mistakesMsg;
    }

    if (mistakes >= 4) {
      msg.innerHTML = "Sorry, you do not have access to this page";
      msg.classList.add("msgInfo");
    }

    input.value = "";
  });
}
equalNumber();
