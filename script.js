"user strict";
// =======================
let number1 = 20;
let numberString = '';
 while(number1 <= 30){
  numberString += (numberString === '' ? '' : ',') + number1;
  number1 += 0.5;
 }
 console.log(`${numberString}`);

// ==========================

let dollar = 27;
let dollarSum = 10;

while (dollarSum <= 100) {
  let dollarSum2 = dollarSum * dollar;
  console.log(`${dollarSum} доларів = ${dollarSum2} у гривнях`);

  dollarSum += 10;
}
// ======================================================
 let numberN =  prompt(`Введіть число щоб визначити його квадрати:`);
 numberN = parseInt(numberN);
let numbers = 1;
while( numbers <= 100 && numbers * numbers <= numberN){
  console.log(`Усі цілі числи квадрати яких не превищую ${numberN} : ${numbers}`)
  numbers++;
}
// ====================================

let number6 = prompt(`Введіть число щоб дізнатись є воно прости або ні:`);
number6 = parseInt(number6);
let number6Boll = true;

if (number6 > 1) {
  number6Boll = true;

  let del = 2;

  while (del < number6) {
    if (number6 % del === 0) {
      number6Boll = false;
      break;
    }
    del++;
  }
  console.log(`Число ${number6} ${number6Boll ? "є" : "не є"} простим `);
}
// ====================================
let number7 = 12;

let defoult = 1;
let degree = 0;

while (defoult < number7) {
  if (defoult === number7) {
    console.log(`${number7} можна отримати зведенням 3 до ступеня ${degree}`);
  } else {
    console.log(`${number7} не можно отримати шляхом зведення 3 до ступеня`);
  }
  defoult *= 3;
  degree++;
}
