let str = '';
let n = '';
for (let i =1; i<=7; i++){
    if (i%2==1){
        n = n-i;
        str = str +'-'+ i;
    }
    if (i%2==0){
        n = n+i;
        str = str+'+'+i;   
    }
}
console.log(str+'='+n);