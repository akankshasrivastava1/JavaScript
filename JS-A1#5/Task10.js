let str = 'qw23BN**45g';
let digits = '';
let len = str.length;
for(let i =0; i<len; i++){
    let ch = str[i];
        if (str[i]>='0' && str[i]<='9'){
            digits = digits + str[i];
        }
}
console.log(digits);