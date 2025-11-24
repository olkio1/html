let toys = [
   { name: "ёлочка", color: "красный", year: 2024, count: 3},
   { name: "шар", color: "зеленый", year: 2025, count: 4},
   { name: "снежинка", color: "белый", year: 2025, count: 2},
   { name: "кукла", color: "синий", year: 1921, count: 1},
   { name: "ёлочка", color: "зеленый", year: 2025, count: 2},
   { name: "шар", color: "красный", year: 2025, count: 1}
];

toys.sort((a,b) => a.name.localeCompare(b.name));

console.log(toys);

toys.sort((a, b) => a.color.localeCompare(b.color));

let hasGreen = toys.some(toy => toy.color.includes("зеленый"));

console.log(hasGreen ? "Есть зеленые игрушки" : "Нет зеленых игрушек");

let search = "шар";

let result = toys.find(toy => toy.name.toLowerCase().includes(search));

console.log(result);

let hasOld = toys.some(toy => toy.year < 2000);

console.log(hasOld);

let allBalls = toys.every(toy => toy.name === "шар" || toy.year > 1950);

function filterByColor(color)
{
return toys.filter(toy => toy.color === color);
}
console.log(filterByColor("красный"));

console.log(filterByColor("синий"));

function addToy(toy) {
    toys.push(toy);
  }
  
  addToy({ name: "шар", color: "бирюзовый", year: 2006, count: 3});

  addToy({ name: "куб", color: "красный", year: 2008, count: 1});

  console.log(toys);

 

  console.log(toys.map(toy => {return { ...toy,count: toy.count + 1};}));
  

  
  