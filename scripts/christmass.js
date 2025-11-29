let toys = [
  { id: 1, name: "Красный шар", type: "ball_red", color: "red", size: "m" },
  { id: 2, name: "Золотой колокольчик", type: "bell_gold", color: "gold", size: "s" }
];
let trees = [
  { id: 1, type: "green", size: "big", description: "Классическая зелёная ёлка" },
  { id: 2, type: "snowy", size: "medium", description: "Ёлка в снегу" }
];
let garlands = [
  { id: 1, type: "white", length: "long", mode: "blink" },
  { id: 2, type: "multi", length: "short", mode: "static" }
];
for(let i = 0;i<toys.length;i++){
    console.log(toys[i].name + "-" + toys[i].type);
}
let currentTree = {
  type: "",
  garland: "",
  toys: [],

  setTree(newType) {
    this.type = newType;
  },

  setGarland(newGarland) {
    this.garland = newGarland;
  },

  addToy(toy) {
    this.toys.push(toy);
  },

  showInfo() {
    console.log("Ёлка:", this.type);
    console.log("Гирлянда:", this.garland);
    console.log("Игрушки:", this.toys);
  },
  removeToy(id){
    this.toys.filter(toy => toy.id !== id);
  },

};
currentTree.setTree(trees[0]);
currentTree.setGarland(garlands[1]);
currentTree.addToy(toys[0]);
currentTree.addToy(toys[1]);
currentTree.showInfo();

for(let i = 0; i<toys.length;i++){
    if(toys[i].color === "red"){
        console.log(toys[i]);
    }
}
console.log(toys.find(id => id.id == 2));
for(let i = 0;i<trees.length;i++){
    console.log(Object.keys(trees[i]));
}
currentTree.removeToy(1);
currentTree.showInfo();
console.log(currentTree.toys.length)
