for(let i = 1;i<=10;i++){
    console.log(i);

}
for(let i = 10;i>=1;i--){
    console.log(i);

}
for(let i = 2;i<=20;i+=2){
    console.log(i);
}
for(let i = 1;i<=45;i+=2){
    console.log(i);
}
 for(let i =1;i<=10;i++){
    console.log(`${5} * ${i} = ${i*5}`);
 }
 let sum = 0;
 for(let i =1;i<=100;i++){
    sum+=i;
 }
 console.log("Сумма от 1 до 100: " +sum);
  sum = 0;
 for(let i =1;i<=50;i++){
    if(i%2 == 0)sum+=i;
 }
  console.log("Сумма от 1 до 50 четных: "+sum);
  for(let i =1;i<=10;i++){
    console.log(`${i} - ${i*i}`);
  }
  let num = prompt("Введите число, для таблицы умножения");
  for(let i = 1; i<=10;i++){
    console.log(`${num} * ${i} = ${i*num}`);
  }
  let banana = "banana";
  let count = 0;
  for( letter of banana.toLowerCase() ){
        if(letter === "a") count++; 
  }
   console.log(`Количество букв a в слове ${banana} = ${count}`);
  let str = "safasf'as;mxzvp[qwrto[qw";
  count = 0;
  for(ltr of str){
    count++;
  }
  console.log(`Длина строки ${str} = ${count}`);
  let fruits = ["яблоко","банан","вишня"];
  for(fruit of fruits){
    console.log(fruit);
  }
  let numbers = [2,5,77,123,45,23,78];
  sum = 0;
  for(let i = 0;i<numbers.length;i++){
    sum += numbers[i];
  }
  console.log(`Сумма всех элементов массива ${numbers} = ${sum}`);
  let arr = [4,12,7,19,3];
  let highest = arr[0];
  console.log(arr);
  for(let i =1;i<arr.length;i++){
    if(highest < arr[i]){
      highest = arr[i];
    }
  }
  console.log(highest);
  for(let i = 1;i<=10;i++){
    if(i==5) continue;
    console.log(i);
  }
  for(let i =1;i<=100;i++){
    if(i==25)break;
    console.log(i);
  }
  let money = 100;
  let price = 15;
   count = 0;
  do{
    money -= price;
    console.log("Покупаю шоколадку");
    count++;
  }while(money > price)
  console.log("Деньги закончились " + count + " закупок");
  for(let i = 1;i<=10;i++){
    for(let j = 1;j<=10;j++){
      console.log(`${i} * ${j} = ${i*j}`);
    }
  }
  for(let i =1;i<=5;i++){
    for(let j = 1;j<=10;j++) {
      console.log("*");
    }
    console.log("\n");
  }
  for(let i =1;i<=5;i++){
    for(let j = 1;j<=i;j++){
      console.log("*");
    }
    console.log(" ");
  }
  num = 1234;
  sum = 0;
  while(num > 0){
    sum += num%10;
    num = (num - num%10)/10;
  }
  console.log(sum);