let x='';
let string = '1234567890';
if (string.length % 2 == 0) {
    x = (string.length / 2);
} 
else{
    x = (string.length / 2) - 1;
}
let string1 = string.substring(x);
console.log(string1);