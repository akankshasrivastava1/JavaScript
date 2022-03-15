let str = 'A1B2C3';
let odd='';
let even ='';
let len = str.length;
for(let i =0; i<len; i++){
    let ch = str[i];
    if (i%2==1){
        even = even + ch;
    }
    else{
        odd = odd + ch;
    }
}
console.log('Odd: '+odd);
console.log('Even: '+even);