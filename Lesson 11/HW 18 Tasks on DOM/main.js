// 1) Є текстове поле на сторінці. При фокусі на цьому полі збоку з'являється <div>
// з інформацією. При зникненні фокуса - так само пропадає

const inputElem = document.querySelector(".main-input");
const inputBlock = document.querySelector(".show-massage-for-input");

const massageDiv = document.createElement("div");
massageDiv.setAttribute("class", "messageInput");
massageDiv.innerText = "Введи щось цікаве!";

inputBlock.appendChild(massageDiv);

inputElem.addEventListener("focus", () => {
    massageDiv.style.display = "block";
});

inputElem.addEventListener("blur", () => {
    massageDiv.style.display = "";
});

// 2) На сторінці є дві кнопки. При натисканні на першу кнопку просимо користувача ввести в prompt посилання,
// при натисканні на другу - переадресовується на інший сайт (за раніше введеним посиланням).
// Реалізувати перевірку на http/https. Якщо протокол не вказано - додаємо

const btnOpenPrompt = document.querySelector(".open-prompt");
const btnFollowLink = document.querySelector(".follow-link");
const finalUrlBlock = document.querySelector(".final-url");
let finalUrl;

btnOpenPrompt.addEventListener("click", () => {
    const link = prompt("Введіть посилання:");
    const regex = /^http(s?):\/\//;

    if (link !== null && link.trim() !== "") {
        finalUrl = link.search(regex) !== -1 ? link : "https://" + link;
        finalUrlBlock.textContent = `Посилання - ${finalUrl}`;

        btnFollowLink.disabled = false;
    }
});

btnFollowLink.addEventListener("click", () => {
    location.href = finalUrl;
});

// 3) У папці images є зображення(додати самим) 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg.
// Вивести зображення з цієї папки отримане випадковим чином (Math.random)

const getRandomInt = Math.floor(Math.random() * 9) + 1;
const randomImgBlock = document.querySelector(".random-img");

const imgContainer = document.createElement("img");
imgContainer.setAttribute("src", `images/${getRandomInt}.jpg`);
imgContainer.setAttribute("alt", `img-${getRandomInt}`);

randomImgBlock.appendChild(imgContainer);
