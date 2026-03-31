const display = document.getElementById("counter");
const countName = "pageLoadCount";

let count = localStorage.getItem(countName);
count = count ? parseInt(count) + 1 : 1;
localStorage.setItem(countName, count);
display.textContent = `Вы открывали эту страницу ${count} раз`;