let str = 'x+3+45+++';
let out='';
let len = str.length;
for(let i =0; i<len; i++){
    let ch = str[i];
    let prevCh = str[i-1];
    if (ch=='+'){
        if(prevCh=='+'){

        }
        else {
            out = out + ch;
        }
    }
    else{
        out = out + ch;
    }
}
console.log(out);