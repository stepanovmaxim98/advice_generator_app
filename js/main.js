const adviceText = document.querySelector(".advice-text");
const button = document.querySelector(".random");
const adviceNumber = document.querySelector(".advice-id");

adviceNumber.innerHTML = fetch("http://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then((data) => (adviceNumber.innerText = `#${JSON.stringify(data.slip.id)}`))
  .catch((error) => error);

adviceText.innerHTML = fetch("http://api.adviceslip.com/advice")
  .then((res) => res.json())
  .then(
    (data) => (adviceText.innerHTML = `${JSON.stringify(data.slip.advice)}`)
  )
  .catch((error) => error);

button.addEventListener("click", () => {
  fetch("http://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(
      (data) => (adviceText.innerHTML = `${JSON.stringify(data.slip.advice)}`)
    )
    .catch((error) => error);
  adviceNumber.innerHTML = fetch("http://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then(
      (data) => (adviceNumber.innerText = `#${JSON.stringify(data.slip.id)}`)
    )
    .catch((error) => error);
});
