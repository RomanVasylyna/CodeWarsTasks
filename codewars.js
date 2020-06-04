
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
