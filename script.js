'user strict';
// =======================
let number1 = 20;

while(number1 <= 30){
   
    console.log(`${number1}`);
    number1 += 0.5;
}
// ==========================

let dollar = 27;
let dollarSum = 10;

while(dollarSum <= 100){
    let dollarSum2 = dollarSum * dollar;
    console.log(`${dollarSum} доларів = ${dollarSum2} у гривнях`);

    dollarSum += 10;
}

let number2 = 100;
let numbers = 1;
while (numbers <= 100){
    let sumNumbers = numbers * numbers;
    if(numbers <= number2 ){
        console.log(`${numbers} ^ 2 = ${sumNumbers}`)
    } else{
        break
    }
    numbers++
}
// ====================================

let number6 = 2;
let number6Boll = true;

if(number6 <= 1){
    number6Boll = false;
} else{
    let del = 2;

    while(del < number6){
        if(number6 % del === 0){
            number6Boll = false;
            break
        }
        del++
    }
    console.log(`Число ${number6} ${number6Boll ?  'є' : 'не є'} простим `)
}
// ====================================
let number7 = 12;

let defoult = 1;
let degree = 0;

while(defoult < number7){
    if(defoult === number7){
        console.log(`${number7} можна отримати зведенням 3 до ступеня ${degree}`);
    }else{
        console.log(`${number7} не можно отримати шляхом зведення 3 до ступеня`)
    }
    defoult *= 3;
    degree++
}
