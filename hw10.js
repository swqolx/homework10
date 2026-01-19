// //1

// function sayHello(name1){
//     return `Hello,${name1}`
// }
// console.log(sayHello('JavaScript'));

// //2

// function sum(num1, num2){
//     return num1 + num2
// }
// console.log(sum(4,6));


// //3
// function multiply(n1,n2,n3){
//     return n1 * n2 * n3
// }
// console.log(multiply(5,3,1));


// //4
// function isEven(num){
//     if(num % 2 === 0){
//         console.log('true');

//     }else{
//         console.log("false");

//     }
// }
// console.log(isEven(45));


// //5


// function getFullName(firstName, lastName){
//     return`Name : ${firstName},Lastname : ${lastName}`
// }
// console.log(getFullName('Anastasiia', 'Mchedlishvili'));


// //6
// function countFromTo(from,to){
//     for(let i = from;i <= to;i++){
// console.log(i);

//     }

// }
// console.log(countFromTo(3,10));

// //7

// function calculateTotal(array){
//     let sum = 0
//     for(const arrays of array){
//         sum += arrays
//     }
//     return sum
// }
// console.log(calculateTotal([4,6,2,3]));


// //8

// function findLargestNumber(numbers){
//     let maxNumber = numbers[0]
//     for(let i = 0;i< numbers.length;i++){
//         if(numbers>maxNumber) maxNumber = numbers

//     }
//     return maxNumber
// }
// console.log(findLargestNumber([56,32,1,5]));


// //9
// function checkAge(userAge){
//     if(userAge < 18){
//         console.log('error');

//     }else{
//         console.log('true');

//     }
// }
// console.log(checkAge(19));

// //10

// function withdraw(amount,balance){
//     if(amount >= balance){
//         console.log('error');

//     }else{
//         console.log('true');

//     }
// }
// console.log(withdraw(300,600));

// //11
// function sumAll(...arg) {
//     let suma = 0
// for(const argum of arg){
// suma += argum
// }
// return suma
// }
// console.log(sumAll(3,6,2,8,9,43));


// //12
// //13
// function createArray(...arr){
//     return arr
// }
// console.log(createArray(33,65,12));

// //14
// function calculateAvarage(arr1){
//     let total = 0
//     for(const array1 of arr1){
//         total += array1
//     }
//     return total / arr1.length
// }
// console.log(calculateAvarage([22,65,13,98,55]));

// //15
// function logValues(a,b,c){
//     return `${a}, ${b}, ${c}`
// }
// console.log(logValues(1,2,3));

// //16

// const checkAge2 = (userAge2) =>{
//  if(userAge2 < 18){
//         console.log('error');

//     }else{
//         console.log('true');

//     }
// }
// console.log(checkAge2(2));


//17
// function repeatAction(n, action) {
//     for(let i = 0;i < n;i++){
//         action()
//     }

// }
// console.log(repeatAction(4,3));


//18

// const repeatAction1 = (nun) =>{
//     return nun

// }
// console.log(repeatAction1("Hello"));


// //19

// function doMath2(a, b, callback){
//    return  callback(a,b)
// }

// //20

// function add(a,b){
//     return a+ b
// }
// console.log(doMath2(4,5,add));

// //21
// function multiply3(a,b) {
//     return a* b
// }
// console.log(doMath2(4,5,multiply3));

// //22


// //     function filterNumbers(array, callback) {
// //   const result = [];
// //   for (const num of array) {
// //     if (callback(num)) {
// //       result.push(num);
// //     }
// //   }
// //   return result;
// //}
// console.log(filterNumbers([4,5,2,6]) );
// const evenNumbers = filterNumbers([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0);
// console.log("24️Парні числа:", evenNumbers);


// const greaterThanTen = filterNumbers([5, 12, 8, 20, 3, 15], (num) => num > 10);
// console.log("25️ Числа більші за 10:", greaterThanTen);


// const filterNumbersArrow = (array, callback) => array.filter(callback);

// const filteredArrow = filterNumbersArrow([2, 7, 10, 14, 21], (num) => num % 2 === 0);
// console.log("26️Arrow filter:", filteredArrow);

// // 27
// function mapArray(array, callback) {
//   const result = [];
//   for (const item of array) {
//     result.push(callback(item));
//   }
//   return result;
// }

// // 28 — помножити всі числа на 2
// const multipliedByTwo = mapArray([1, 2, 3, 4], (num) => num * 2);
// console.log("28️ Помножені на 2:", multipliedByTwo);

// // 29
// function calculate(operation) {
//   return function (a, b) {
//     return operation(a, b);
//   };
// }

// const add6 = calculate((a, b) => a + b);
// const multiply5 = calculate((a, b) => a * b);

// console.log("29️ Додавання:", add6(3, 4));
// console.log("29️ Множення:", multiply5(3, 4));


// function sumTo(n) {
//   if (n <= 1) return 1;
//   return n + sumTo(n - 1);
// }

// console.log("30️ Сума від 1 до 5:", sumTo(5));



