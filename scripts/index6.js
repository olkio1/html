let sss = ["Игра1", "Игра2" , "Игра3 - крутая"];
for(let i = 0;i<sss.length;i++){
    console.log(sss[i]);
}
let fruits = ["яблоко", "банан" , "груша"];
for(let fruit of fruits){
    console.log(fruit);
}
let students = [
    {name:"Ivan", age:20},
    {name:"Petr", age:21},
    {name:"Vasya", age:22}
];

for(let student of students){
    console.log(student.name);
}
let animals = ["dog", "cat" , "mouse"];
animals.push("fish");
console.log(animals);
animals.pop();
console.log(animals);
let nums = [1,2,3,4,5,6,7,8,9,10];
let removed = nums.pop();
nums.shift();

console.log(nums+"--"+removed+"--"+nums.length);



