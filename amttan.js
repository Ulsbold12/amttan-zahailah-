const btn1 = document.getElementsByClassName("btn1")[0];
const btn2 = document.getElementsByClassName("btn2")[0];
const btn3 = document.getElementsByClassName("btn3")[0];
let display = document.getElementsByClassName("display")[0];

btn1.addEventListener("click", () => {
  display.textContent = "🍬 чихэр удахгүй ирнэ";
});

btn2.addEventListener("click", () => {
  display.textContent = "🎂 бялуу удахгүй ирнэ";
});

btn3.addEventListener("click", () => {
  display.textContent = "🍦 Зайрмаг удахгүй ирнэ";
});
