/** */

// const val4 = {
//   name: "keita",
//   age: 24
// };

// console.log(val4);

// const name = "keita";
// const age = 24;

// console.log(`私の名前は${name}です。年齢は${age}歳です。`)

// function func1(name){
//   console.log(name);
// }

// func1("keita");

// const func1 = (name) => console.log(name);

// func1("keita");

// const func3 = (num1, num2) =>{
//   return num1 + num2;
// }

// const func4 = (num1, num2) =>{
//   return num1 * num2;
// }

// const func5 = (num1, num2) => num1 % num2;

// console.log(func5(1,2))

// const myProfile = {
//   name: "keita",
//   age: 24
// };

// const {name, age} = myProfile;

// const message1 = `名前は${name}です。年齢は${age}です。`;

// console.log(message1);

// const myProfile = ['keita', 24];

// const message3 = `my name is ${myProfile[0]} my age is ${myProfile[1]}`

// console.log(message3)

// const [name,age] = myProfile;
// const message4 = `my name is ${name} my age is ${age}`;
// console.log(message4)

// const sayHello = (name = "guest") => console.log(`hello${name}`);

// sayHello("keita");

// const arr1 = [1,2,3,4,5,6];
// // console.log(arr1)
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0], arr1[1]);

// sumFunc(...arr1);

// const arr2 = [1,2,3,4,5];

// const [num1,num2,...arr3] = arr2;
// console.log(num1)

// console.log(num2)

// console.log(arr3)

// const arr4 = [10,20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// // console.log(arr6);

// const arr7 = [...arr4,...arr5];

// console.log(arr7)

// const nameArr = ["keita","kuri","mano"];

// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// }
// const nameArr2 = nameArr.map((name)=> {
//   return name;
// })

// console.log(nameArr2)

// nameArr.map((name, index) => console.log(`${index +1}　is ${name}`));

// const numArr = [1,2,3,4,5];

// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === "keita"){
//     return name
//   }else{
//     return `MR ${name} `;
//   }
// })

// console.log(newNameArr);

// const val1 = 1 < 0 ? 'this is true' : 'this is false';

// console.log(val1);

// const num = 1300000000;

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : 'form number';

// console.log(typeof num)

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? 'over 100' : 'Its OK'
// }

// console.log(checkSum(50,40));

// const flag1 = true;
// const flag2 = false;

// if( flag1 && flag2){
//   console.log('1 or 2 is true');
// }

// const num = undefined;
// const fee = num || 'doesnt money';
// console.log(fee)

const num2 = 100;
const fee2 = num2 && "there is something";
console.log(fee2);
