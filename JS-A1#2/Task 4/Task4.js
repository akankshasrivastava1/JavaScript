/*Write a Javascript code where 3 numbers a,b, and c are given. Write appropriate code to create a string
 similar to the one shown below and print it on the console a *(b +  c) -(b*c)= d
 Note that a, b, c and d should be replaced by their appropriate values.*/

let a = 5;
let b = 4;
let c = 8

let d = a *(b + c) - (b * c);

console.log( a +' * ' +'('+ b + ' + ' + c +') ' +'-'+' ('+ b +' * '+ c+ ') '+" = "+ d);