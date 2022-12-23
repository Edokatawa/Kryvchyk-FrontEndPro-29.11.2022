let users = [
    {
        "index": 0,
        "isActive": true,
        "balance": "$2,226.60",
        "name": "Eugenia Sawyer",
        "gender": "female",
        "phone": "+1 (840) 583-3207",
        "address": "949 John Street, Rose, Puerto Rico, 1857"
    },
    {
        "index": 1,
        "isActive": true,
        "balance": "$2,613.77",
        "name": "Pauline Gallegos",
        "gender": "female",
        "phone": "+1 (985) 593-3328",
        "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
    },
    {
        "index": 2,
        "isActive": false,
        "balance": "$3,976.41",
        "name": "Middleton Chaney",
        "gender": "male",
        "phone": "+1 (995) 591-2478",
        "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
    },
    {
        "index": 3,
        "isActive": true,
        "balance": "$1,934.58",
        "name": "Burns Poole",
        "gender": "male",
        "phone": "+1 (885) 559-3422",
        "address": "730 Seba Avenue, Osage, Alabama, 6290"
    },
    {
        "index": 4,
        "isActive": true,
        "balance": "$3,261.65",
        "name": "Mcfadden Horne",
        "gender": "male",
        "phone": "+1 (942) 565-3988",
        "address": "120 Scholes Street, Kirk, Michigan, 1018"
    },
    {
        "index": 5,
        "isActive": false,
        "balance": "$1,790.56",
        "name": "Suzette Lewis",
        "gender": "female",
        "phone": "+1 (837) 586-3283",
        "address": "314 Dunne Place, Bawcomville, Guam, 9053"
    }
];

const replaceBalanceUser = (elem) => {
    intBalanceUser = +elem.balance
        .replace('$', '')
        .replace(',', '');

    return intBalanceUser;
};

const showArrPhoneUsers = (arrUsers) => {
    const arrPhoneUsers = [];
    const checkingBalance = 2000;

    arrUsers.map((elem) => {
        const balanceUser = replaceBalanceUser(elem);
        if (balanceUser > checkingBalance) {
            arrPhoneUsers.push(elem.phone);
        }
    });

    if (arrPhoneUsers.length === 0) {
        return console.log(`\nНа жаль, немає жодного користувача у якого баланс був би більше ${checkingBalance} доларів...`);
    }

    return console.log(`\nМасив телефонних номерів користувачів, баланс яких більше 2000 доларів:\n`,arrPhoneUsers);
};

const showSumBalanceUsers = (arrUsers) => {
    let sumBalanceUsers = 0;

    arrUsers.map((elem) => {
        const balanceUser = replaceBalanceUser(elem);
        sumBalanceUsers += balanceUser;
    });
    
    return console.log(`Сума всіх балансів користувачів дорівнює ${sumBalanceUsers.toFixed(2)}`);
}

console.log('Дан масив об\'єктів. Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів. І знайти суму всіх балансів користувачів.\n\n');

console.log(`Масив об'єктів:\n`, users);

console.log('\n\n(Ex1) Вивести масив телефонних номерів користувачів, у яких баланс більше 2000 доларів.');
showArrPhoneUsers(users);

console.log('\n\n(Ex2) Знайти суму всіх балансів користувачів.');
showSumBalanceUsers(users);
