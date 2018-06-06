let budgetForTheMonth, name, time, price

function start() {
    budgetForTheMonth = +prompt("Ваш бюджет на месяц?", '10000');

    

    name = prompt("Название вашего магазина?", '').toUpperCase();
    time = 19;
}

start();

let mainList = {
    budget: budgetForTheMonth,
    name: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {
            let a = prompt("Какой тип товаров будем продавать?", '');
            if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
                console.log('все верно');
                mainList.shopGoods[i] = a;
            } else {
                alert('введите тип товаров');
                i--;
            }
        }
    },

    workTime: function workTime(time) {
        if (time < 0) {
            console.log('не может быть');
        } else if (time > 8 && time < 20) {
            console.log('время работать')
            mainList.open = true
        } else if (time < 24) {
            console.log('уже поздно');
        } else {
            console.log('в сутках только 24 часа');
        }
    },

    calcBudget: function calcBudget() {
        alert('Бюджет на 1 день: ' + mainList.budget / 30);
    },

    discountSistem: function discountSistem(price) {
        if (mainList.discount == true) {
            price = price / 100 * 80;
        }
    },

    hiringEmployers: function hiringEmployers() {
        for (let s = 1; s < 5; s++) {
            let m = prompt("Имя сотрудника?");
            if ((typeof(m)) === 'string' && (typeof(m)) != null && m != '' && m.length < 50) {
                console.log('все верно');
                mainList.employers[s] = m;
            } else {
                i--;
            }
        }
    },
    chooseShopItems: function chooseShopeItems() {
        let items = prompt('перечислите через запятую товары', "");

        mainList.shopItems = items.split(','); //mainList.shopItems.push(prompt('подождите, ещё ', ''));
        mainList.shopItems.sort();
        mainList.shopItems.forEach(function(item, l, shopItems) {
            let lPlus = l + 1;
            alert(lPlus + ". " + "У нас вы можете купить: " + item);
        });
        for (let key in mainList.shopItems) {
            console.log('Наш магазин включает в себя: ' + key + ': ' + mainList.shopItems[key])
        }
    }


}

console.log(mainList)







