let size = 3;
let str = '';
for (let i =1; i<=size; i++){
    if (i%2==1){
        str = str + 'X';
    }
    else {
        str = str + 'Y';
    }
    console.log(str);
}
