let x='';
let string = 'JavaScript++JS';
if (string.length % 2 == 0) {
    x = (string.length / 2);
} 
else{
    x = (string.length / 2) - 1;
}
let string2 = string.substring(0, x);
console.log(string2);
