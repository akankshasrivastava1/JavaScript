let x='';
let string = '123456';
if (string.length % 2 == 0) {
    x = (string.length / 2);
} 
else{
    x = (string.length / 2);
}
let string1 = string.substring(x);
let string2 = string.substring(0, x);
let string3 = string1 + string2;
console.log(string3);