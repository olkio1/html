function name(a){
    console.log(`Привет, ${a}`);
}
let namee = "Егор";
name(namee);
let square = (x) => x*x;
console.log(square(5));
function sumOfDigits(a){
    let sum = 0;
    for(let i = 0; i<a.length;i++) sum += a[i];
    return sum;
} 
let b = [1,2,3];
console.log(sumOfDigits(b));
let hello = () => "hi";
console.log(hello());
function doSomething(){
    console.log(hello());
}
doSomething();

   
  
let mas = ["aaa", "b" , "cc"];
mas.sort((a,b) => a.length - b.length);
console.log(mas);
let lastLetter = "Яблоко";
function last(lastLetter){
    return lastLetter[lastLetter.length-1];
}
console.log(last(lastLetter));
const user = {
    name: "Alex",
    showName() {
      console.log(this.name);
    },
    //  b2: () => {console.log(this.name);}  Не видит name
  };

    function makeCounter() {
        let count = 0;
        function counter() {
          count++;
          console.log(count);
        }
        return counter;
    }
  let counter = makeCounter();
  counter(); 
  counter(); 
  function createPiggyBank() {
      let money = 0;
      function deposit(amount) {
        money += amount;
        console.log(money);
      }
      return deposit;
  }
  let bank = createPiggyBank();
bank(10); 
bank(5);  
  function rec(n){ 
    if(n == 0) return 0;
      console.log(n); 
      return rec(n-1);
  }
let n = 5;
rec(n);
function makeCapital(word){
    return word = word[0].toUpperCase() + word.slice(1);
}
let word = "привет";
console.log(makeCapital(word));
let dig = [1,2,3,4];
let sortByDiv = (dig) => {
    let b = [];
    for(let i = 0;i<dig.length;i++){
        if(dig[i] % 2 == 0) b.push(dig[i]);
    }
   
    return b;
} 

console.log(sortByDiv(dig));