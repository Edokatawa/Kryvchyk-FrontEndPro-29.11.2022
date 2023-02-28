"use strict";

const DATA = [
    {
        name: "Ноутбуки",
        products: [
            {
                img: "image/laptop/Acer-Aspire-3-A315-58G-3953.webp",
                name: "Acer Aspire 3",
                price: 22999,
                description:
                    'Екран 15.6" IPS Full HD, матовий / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce MX350, 2 ГБ',
            },
            {
                img: "image/laptop/Lenovo-IdeaPad-L3-15ITL6.webp",
                name: "Lenovo IdeaPad L3",
                price: 18999,
                description:
                    'Екран 15.6" TN Full HD, матовий / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 512 ГБ / Intel UHD Graphics',
            },
            {
                img: "image/laptop/Apple-MacBook-Air-13.webp",
                name: "Apple MacBook Air 13",
                price: 44499,
                description:
                    'Екран 13.3" Retina (2560x1600) WQXGA, глянсовий / Apple M1 / RAM 8 ГБ / SSD 256 ГБ / Apple M1 Graphics',
            },
        ],
    },
    {
        name: "Мобільні телефони",
        products: [
            {
                img: "image/phone/Apple-iPhone-13.webp",
                name: "Apple iPhone 13",
                price: 32999,
                description:
                    "Екран 6.1 / подвійна основна камера: 12 Мп + 12 Мп, фронтальна камера: 12 Мп / 128 ГБ вбудованої пам'яті",
            },
            {
                img: "image/phone/Samsung-Galaxy-S23.webp",
                name: "Samsung Galaxy S23",
                price: 57999,
                description:
                    "Екран 6.8 / основна квадро-камера: 200 Мп + 12 Мп + 10 Мп + 10 Мп, фронтальна 12 Мп / 256 ГБ вбудованої пам'яті",
            },
            {
                img: "image/phone/Nokia-С21-Plus.webp",
                name: "Nokia С21 Plus",
                price: 3999,
                description: "Екран 6.517 / подвійна основна камера: 13 Мп + 2 Мп, фронтальна 5 Мп / 32 ГБ вбудованої пам'яті",
            },
        ],
    },
    {
        name: "Монітори",
        products: [
            {
                img: "image/monitors/Samsung-Odyssey-G5.webp",
                name: "Samsung Odyssey G5",
                price: 10999,
                description:
                    'Діагональ дисплея 27" / Максимальна роздільна здатність дисплея 2560x1440 (2K QHD) / Яскравість дисплея 250 кд/м²',
            },
        ],
    },
    {
        name: "Тепловентилятори",
        products: [
            {
                img: "image/fan-heater/WetAir-WFH-04.webp",
                name: "WetAir WFH-04",
                price: 539,
                description: "Потужність Вт 2000 / Площа обслуговування, кв. м 20 / Кількість режимів обігріву 2",
            },
            {
                img: "image/fan-heater/WetAir-WFH-30W.webp",
                name: "WetAir WFH-30W",
                price: 1179,
                description: "Потужність, Вт 1500 / Площа обслуговування, кв. м 20",
            },
        ],
    },
];
