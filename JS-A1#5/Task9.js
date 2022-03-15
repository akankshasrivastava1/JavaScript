let str = 'JavaMasters';
let out='';
let len = str.length;
for(let i =0; i<len; i++){
    let ch = str[i];
    let prevCh = str[i-1];
    if (i%2==1){
        
    }
    else{
        out = out + ch;
    }
}
console.log(out);