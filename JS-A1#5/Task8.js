let str = 'my#mother';
let out='';
let len = str.length;
for(let i =0; i<len; i++){
    let ch = str[i];
    let prevCh = str[i-1];
    if (ch=='m'){
    }
    else{
        out = out + ch;
    }
}
console.log(out);