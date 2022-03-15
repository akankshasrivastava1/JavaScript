let str = 'AAXXXBBYYYCXXDYY';
let out='';
let len = str.length;
for(let i =0; i<len; i++){
    let ch = str[i];
    let prevCh = str[i-1];
    if (ch=='X' || ch=='Y'){
        if(prevCh=='X' || prevCh=='Y'){
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