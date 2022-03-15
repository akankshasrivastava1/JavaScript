let str = '';
for (var i=3; i>0; i--){
    if (i%3==1){
        str = str+i;
    }
    if(i%3==2){
        str = str+'x'+i;
    }  
}
console.log(str);
