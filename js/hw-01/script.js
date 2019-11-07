// -----------task-one---------

// 'use strict';

// const name = 'Генератор защитного поля';

// let price = 1000;

// let message = `Выбран «${name}», цена за штуку ${price} кредитов`;

// console.log(message);

// price = 2000;

// message = `Выбран «${name}», цена за штуку ${price} кредитов`;

// console.log(message);

//---------------task-two-------------

// 'use strict';

// const total = 100;

// const ordered = Number(prompt("введите количество товара")); 

// if ( ordered > 100) {
//    alert("На складе недостаточно твоаров!");
// }
// else
// {
//     alert("Заказ оформлен, с вами свяжется менеджер!");
// }

//---------task-three-----------

//'use strict'

// const ADMIN_PASSWORD = 'jqueryismyjam';

// let message;

// let input = prompt ('введите пароль');

// if (input === null){
//     alert('Отменено пользователем!');
// }else if (input === 'jqueryismyjam') {
//     alert('Добро пожаловать!');
// }else{
//     alert('Доступ запрещен, неверный пароль!');
// }


//----------task-four-------------

//'use strict'

//  let credits = 23580;
//  let pricePerDroid = 3000;
//  let totalPrice;

//  let input = Number(prompt('введите количество дроидов'));

//  console.log(Number.isNaN(input));

//  if (input === 0){
//     alert('Отменено пользователем!');
//  }
//     else {

//         if (Number.isNaN(input)) {
//             alert('введите правильно количество!');
//         } else {
//             totalPrice = input * pricePerDroid;
//             alert(totalPrice)
//             if (totalPrice > credits){
//                 alert('Недостаточно средств на счету!');
//             } else {
//                 credits = credits - totalPrice;
//                 alert(`вы купили ${input}, осталось ${credits} кредитов`);
//             }
//         } 
//     } 


//-----------------task-five-------------

//'use strict'

// const CHINA = 'Китай';
// const CHILLI = 'Чилли';
// const AUSTRALIA = 'Австралия';
// const INDIA = 'Индия';
// const deliveryChina  = 100;
// const deliveryChilli = 250;
// const deliveryAustrall = 170;
// const deliveryIndia = 80;


// const input = prompt('Введите вашу страну').toLowerCase();

// switch (input) {
//     case CHINA.toLowerCase():
//     alert (`Доставка в ${CHINA} будет стоить ${deliveryChina} кредитов`);
//     break;  
//     case CHILLI.toLowerCase():
//     alert (`Доставка в ${CHILLI} будет стоить ${deliveryChilli} кредитов`);
//     break;
//     case AUSTRALIA.toLowerCase():
//     alert (`Доставка в ${AUSTRALIA} будет стоить ${deliveryAustrall} кредитов`);
//     break; 
//     case INDIA.toLowerCase():
//    alert (`Доставка в ${INDIA} будет стоить ${deliveryIndia} кредитов`);
//      break;
//      default:
//          alert ('В вашу страну нет доставки');

// }



//------task-sex------------

// 'use strict'

// let input;
// let total = 0;
// do {
//   input = Number(prompt("введите число"));

//   if (input === 0){
//     break;
//   } else if (Number.isNaN(input)){
//     alert("Было введено не число, попробуйте еще раз");
//     input = Number(prompt("введите число"));
//     continue;
//   }else {
//     total += input;
//   }

// } while (1);
//   alert(`Общая сумма чисел равна ${total}`);