let innerPlanets = ["Меркурий", "Венера", "Земля" , "Марс"];
let outerPlanets = ["Юпитер", "Сатурн", "Уран", "Нептун"];
let planets = innerPlanets.concat(outerPlanets);
planets.sort();
let n1 = [3,4];
let n2 = [1,2];
let объединение = n2.concat(n1);
console.log(объединение);
for(let a of planets){
    console.log(a);
}
let слова = ["Я", "Люблю", "JS"];
let предложение = слова.join(" ");
console.log(предложение);

let игрушки = ["шар", "звезда" , "колокольчик"];
let список = игрушки.join(", ");
console.log(список);

let игрушкиСтрока = "шар, звезда, колокольчик";
let игрушки2 = игрушкиСтрока.split(", ");
console.log(игрушки2);
игрушки2.forEach((toy,i) => console.log(i,toy));

let toys = [
{
name: "Большой шар с рисунком Цветок",
count: 2,
year: 1960, 
shape: "шар",
color: "желтый",
size: "большой",
favorite: false,
},
{
    name: "Зеленый шар с цветочным узором",
    count: 5,
    year: 2000, 
    shape: "шар",
    color: "зеленый",
    size: "большой",
    favorite: false,
},
{
        name: "Красный шар с напылением",
        count: 3,
        year: 1990, 
        shape: "шар",
        color: "красный",
        size: "большой",
        favorite: false,
}
];

toys.forEach(toy => {
console.log(toy.name + "-" + toy.color + ", форма " + toy.shape + ", кол-во " + toy.count);
})
let upgradeToys = toys.map(toy =>{
    return{
        ...toy,
        count: toy.count + 1
    };
});
console.log(upgradeToys);
