let str = 'qwNN*%bT';
var upr = '';
var low = '';
let str1 = '';
let mid = '';
for(i=0; i < str.length; i++){
    ch = str[i];
    if (ch >= 'a' && ch <= 'z')
    {
        low += ch;
    }
    if (ch >= 'A' && ch <= 'Z')
    {
        upr += ch;
    }
    if (ch>='0' && ch<='9') {
        mid +=ch; 
    } 
    str1 = low + mid + upr;
}
console.log(str1);