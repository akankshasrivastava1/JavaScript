let str = '';
let str1 ='';
var n =9;
for(var i=1; i<=n; i++){
    if (n%i==0){
        str = str+i+'#';
    }
    if(n%i!=0){
        str1 = str1+ i+'#';
    }
}
console.log('Divide: '+str);
console.log('Not Divide: '+str1);