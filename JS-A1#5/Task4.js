let str ='str=ax+cz+dx=0';
let len = str.length;
let count = 0;
let count1 = 0;
for (let i =0; i<len;i++){
    if(str[i]=='x'){
        count++;
    }
    if(str[i]=='y'){
        count1++;
    }
}
console.log('x='+count);
console.log('y='+count1);