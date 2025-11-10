//1
let age = 22;
if(age >=18) {
    console.log("Доступ разрещен");
}else{
    console.log("Доступ запрещен");
}
//2
let a = 10;
let b = 7;
if (a == b){
    console.log("a равно b");
}else if(a > b){
    console.log("a больше b");
}else{
    console.log("a меньше b");
}
//3
let t = -5;
if(t<0){
console.log("Мороз");
}else if(t>20){
    console.log("Тепло");
}else{
    console.log("Прохладно");
}
//4
let n = 77;
if( n % 2 == 0){
    console.log("Четное");
}else{
    console.log("Нечетное");
}
let s = 788;
if( s % 2 == 0){
    console.log("Четное");
}else{
    console.log("Нечетное");
}
//5
const password = "javascript";
if(password == "javascript"){
    console.log("Добро пожаловать");
}else{
    console.log("Неверный пароль");
}
//6
let score = 100;
if(score >= 90){
      console.log("Отлично");
} else if(score >=75){
    console.log("Хорошо");
} else if(score >=50){
console.log("Удовлетворительно");
} else{
console.log("Нужно подтянуться");
}
//7
let hour = 14;
if(hour <6 ){
 console.log("Ночь");
}
else if (hour < 12){
console.log("Утро");
}
else if (hour < 18){
    console.log("День");
}
else{
    console.log("Вечер");
}
//8
let hasTicket = true;
let age2 =15;
if(age2 >=16){
    if(hasTicket == true){
        console.log("Можно войти");
    }
    else{
        console.log("Купи билет");
    }
}
else{
    console.log("Вход только с родителями");
}
//9
let ab = 10;
let ba = 5;
let operator = "/";
switch(operator){
    case "+":console.log(ab+ba); break;
    case "-": console.log(ab-ba);break;
    case "*":console.log(ab*ba); break;
    case "/": console.log(ab/ba); break;
}
//10
let day  = 5;
switch(day){
    case 1: console.log("Понедельник"); break;
    case 2:  console.log("Вторник");break;
    case 3: console.log("Среда"); break;
    case 4:  console.log("Четверг");break;
    case 5:  console.log("Пятница");break;
    case 6:  console.log("Суббота");break;
    case 7:  console.log("Воскресенье");break;
}
//11
let month = 12;

switch(month){
   case 12:
    case 1:
        case 2:
            console.log("Зима");
            break;
            case 3:
                case 4:
                    case 5:
                        console.log("Весна");
                        break;
                        case 6:
                            case 7:
                                case 8:
                                    console.log("Лето");
                                    break;
                                    case 9:
                                        case 10:
                                            case 11:
                                                console.log("Осень");
                                                break;
}
//12 
let drink = "tea";
switch(drink){
    case "coffee":
        console.log("Кофе");
        break;
        case "tea":
            console.log("Чай");
            break;
            case "juice":
                console.log("Сок");
                break;
default:
    console.log("Такого напитка нету");
}
// 13
let isLoggined = true;
let role = "admin";
if(isLoggined){
switch(role){
    case "admin":
        console.log("Добро пожаловать, админ");
        break;
        case "user":
            console.log("Добро пожаловать, пользователь");
            break;
            case "guest":
                console.log("Добро пожаловать, гость");
                break;

}
}
else {
    console.log("Не залогинен");
}
// 14
let total = 350;
let isVip = true;
if(isVip) {
    console.log("Цена со скидкой: ", total*0.8);
}
else if(total >=500){
    console.log("Цена со скидкой: ", total*0.85);
}
else if(total >=200){
    console.log("Цена со скидкой: ", total*0.9);
}
// 15
let numb = Number("Введите число:");

if( isNaN(numb)) {
    console.log("Это не число");
}
else if(numb == 0){
    console.log("Это ноль");
} else if(numb>0){
    console.log("Это положительное число");
} else {
    console.log("Это отрицательное число");
}
// 16
console.log("5" == 5); // true 
console.log("5" === 5); // false, не равны по типам
console.log("5" + 5); // 55, число преобразуется в строку
console.log("5" - 5); // 0, строка преобразуется в число
// 17
let age3 = prompt("Введите возраст:");
if(Number(age3) >= 18){
    console.log("Доступ разрешен");
}else{
    console.log("Доступ запрещен");
}
 // 18
let name1 = String("Введите имя:");
if(isNaN(name1)) {
console.log("Имя не введено");
} else{
    console.log("Привет," + name1);
}
// 19
let isOnline = "false";
if(isOnline){
    console.log("Пользователь онлайн");
}else{
    console.log("Пользователь не онлайн");
}
// 20
console.log("10" > 5); // Строки преобразуются в числа и сравниваются true
console.log("10" < 2); // false
console.log("abc" > 5); // abc будет преобразовано в число, но т.к оно не может быть преобразовано будет Nan и Nan > 5 == false
console.log(true == 1); // true = 1 
console.log(false == 0); // false = 1 