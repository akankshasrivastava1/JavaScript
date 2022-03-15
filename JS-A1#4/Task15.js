let str = '';
for (let i =1; i<=10; i=i+2){
    if (i%2==1){
        str = str + i +'#';
    }
    else {
        str = str + i + '#';
    }
    
}
console.log(str);