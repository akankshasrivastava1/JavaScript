let str = 'ABC';
let middle ='';
let lenght = '';
let chart ='';
let len = str.length;

if(len % 2 == 1) {
    position = len / 2;
    length = 1;
} else {
    position = len / 2 - 1;
    length = 2;
}
middle =  str.substring(position, position + length)
let index = str.indexOf(middle);
console.log('Middle Char = '+ middle);
console.log('index = '+ index);