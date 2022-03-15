let str ='cdeghBannb';
let len = str.length;
for(let i = 0; i<len; i++){
    let index1 = str.indexOf('a');
}
let index1 = str.indexOf('a');
console.log('a at index:'+index1);
let index2 = str.indexOf('b',index1+1);
console.log('b at index:'+index2);
let index3 = str.indexOf('a',index2+2);
console.log('a at index:'+index3);