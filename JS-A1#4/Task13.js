let str = '';
for (let i=1; i<=7; i++){
    if (i%3==1){
        str = str + 'A';
    }
    if (i%3==2){
        str = str + 'B';
    }
    if (i%3==0){
        str = str + 'C';
    }
}
console.log(str);