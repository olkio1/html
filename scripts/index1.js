let name1 = "Егор";
let city = "Минск";
let hobby = "Программирование";
console.log("Привет! Я " + name1 + ". Я живу в городе " + city + ". Я люблю "+hobby);
 name1 = "Антон";
 city = "Гродно";
 hobby = "Шахматы";
console.log("Привет! Я " + name1 + ". Я живу в городе " + city + ". Я люблю "+hobby);
let obj = "Объект";
let count = 5;
let shelf = true;
console.log(obj, count, shelf);
let planet = "Земля";
let people = 1000000000;
let atmosphere = true;
console.log("Планета "+planet+" имеет "+people+" людей. Есть ли атмосфера? "+ atmosphere);
let step = 0;
step +=5;
console.log(step);
let box ;
let emptyBox = null;
console.log(box,emptyBox);
const colors = ["красный","зеленый","синий"];
console.log(colors[0],colors[2]);
const item = {
     type : "яблоко",
     isMagical : true,
     weight : 0.5,
};
console.log("Предмет: "+item.type+", вес: "+item.weight+", магический: "+item.isMagical);
let message = "Hello";
let number = 10;
let result = message * number;
console.log(result); // NaN потому что message не является числом, а строкой и мы не можем умножать число и строку
console.log(2+"2"); // 22 т.к 2 автоматически преобразуется в строку
console.log(2+Number("2")); // 4 т.к Number преобразует строку в число
let a = "";
let b = null;
console.log(a==b); // false т.к null не является ни строкой ни числом
console.log(a===b); // тоже самое

console.log("5" + 5); // 55 тюк 5 автоматически преобразуется в строку
console.log("5"-5); // т.к мы не можем отнимать строки от чисел и числа от строк, то строка преобразуется в число автоматически
console.log(null == undefined); // true т.к null и undefined являются одним и тем же значением
console.log(null === undefined); // false т.к null и undefined не равны по типам 
console.log("Мое любимое число: " + 5) // 5 преобразуется в строку, исходный результат строка



