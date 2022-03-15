let str = '';
for (let i=1; i<=4; i++){
    if (i%3==1){
        str = str + 'P'+i;
    }
    if (i%3==2){
        str = str + 'Q'+i;
    }
    if (i%3==0){
        str = str + 'R'+i;
    }
}
console.log(str);