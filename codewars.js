
Ex1 :
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

For 4 or more names, the number in and 2 others simply increases.

Solution :
function likes(names) {
if(names.length == 0) {
return "no one likes this";
}else if(names.length == 1) {
return `${names} likes this`;
}else if(names.length == 2) {
return `${names[0]} and ${names[1]} like this`;
}else if(names.length == 3) {
return `${names[0]}, ${names[1]} and ${names[2]} like this`;
}else if(names.length >= 4) {
return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}
}


Ex2
(https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript)
Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Solution: (Passed: 89, Failed: 30)
function validParentheses(parens){
let test = /\(+\)+/g.test(parens);
let test2 = /\(+\(+/g.test(parens);
let test3 = /\(+\(+\s/g.test(parens);
let test4 = /\s\(+\(+\s/g.test(parens);
if(test || test2 || test3 || test4) {
return true;
}
return false;
}


/*
Тестовое задание на стажировку :
Дан массив, состоящий из двух строк, они обязательно должны быть одинаковой длины.
Написать функцию, которая находит символы, что отличаются и возвращает их количество
*/

function checkStr(strArr) {
let str1 = strArr[0].split('');
let str2 = strArr[1].split('');
if(str1.length != str2.length) {
return 'Length is different!';
} else {
return runLoop(str1, str2);
}
}

function runLoop(arr1, arr2) {
let newArr = [];
for(let i = 0; i <arr1.length; i ++) {
if(arr1[i] != arr2[i]) {
newArr.push(arr1[i]);
}
}
return newArr.length;
}

console.log(checkStr(['house','hours']));
console.log(checkStr(['dylan','dykkn']));



/*
Тестовое задание на стажировку :
Дан массив чисел : определить в какой последовательности стоят числа (арифметическая, геометрическая, если не та и не та, то вернуть -1)
*/


function ArithGeo(arr) {

var diff = arr[1] - arr[0]; //второй элемент массива минус первый
var ratio = arr[1] / arr[0]; //второй элемент массива делим на первый

//Изначально обе переменные равны true
var arith = true;
var geo = true;

runLoop(arr, diff, ratio, arith, geo);

return checkProgression(arith, geo);
}


function runLoop(arr, diff, ratio, arith, geo) {
  //[2,4,6,8]
  for(var i = 0; i < arr.length - 1; i++) { //циклом перебираем все элементы массива [2,4,6](за исключением последнего 8)
      if( arr[i + 1] - arr[i] !== diff ) //Если 4 - 2 не равно 2
        arith = false; //Это не геометрическая прогрессия
      if(arr[i + 1] / ratio !== arr[i]) //Если при делении второго элемента на первый в результате не получается первый элемент (4/2 не равно 2)
        geo = false; //Это не геометрическая прогрессия
  }
}

function checkProgression(arith, geo) {
  if(arith === true) {
  return "Arithmetic";
  } else if(geo === true) {
    return"Geometric";
  }else {
    return -1;
  }
}
