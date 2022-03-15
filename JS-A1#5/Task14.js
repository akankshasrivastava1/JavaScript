let str = 'qwNN*%bT';
let len = str.length;
let alpha = '';
let digits = '';
let rest = '';
for (let i=0; i<len; i++){
    if (str[i]>='a' && str[i]<='z'){
        alpha = alpha + str[i];
    }
    else if (str[i]>='A'&& str[i]<='Z'){
        alpha = alpha + str[i];
    }
    else if (str[i]>='0' && str[i]<='9'){
        digits = digits + str[i];
    }
    else{
        rest = rest + str[i];
    }
}
console.log(rest);