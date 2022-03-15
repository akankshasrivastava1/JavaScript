let str = '';
for (let i =1; i<=6; i++){
    if (i%2==1){
        str = str +'-'+ i;
    }
    else {
        str = str+'+'+i;
    }  
}
console.log(str);