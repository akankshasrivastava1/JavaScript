//i. Count the number of z
let str ='zebra';
let len = str.length;
let count = 0;
for (let i =0; i<len;i++){
    if(str[i]=='z'){
        count++;
    }
}
console.log(count);

//ii. Double each char
len = str.length;
let newstr = '';
for (let i=0; i<len; i++){
    newstr = newstr + str[i] + str[i];
}
console.log(newstr); 

//iii.Create 3 strings -alphabets, digits, others
let str1 = 'Ab#6!8m';
let len1 = str1.length;
let alpha = '';
let digits = '';
let rest = '';
for (let i=0; i<len1; i++){
    if (str1[i]>='a' && str1[i]<='z'){
        alpha = alpha + str1[i];
    }
    else if (str1[i]>='A'&&str1[i]<='Z'){
        alpha = alpha + str1[i];
    }
    else if (str1[i]>='0' && str1[i]<='9'){
        digits = digits + str1[i];
    }
    else{
        rest = rest + str1[i];
    }
}
console.log(alpha, digits, rest);

// iv. given a string, create a new string where multiple # have been removed. 
let str2 = 'a##b#c##';
let out='';
let len2 = str2.length;
for(let i =0; i<len2; i++){
    let ch = str2[i];
    let prevCh = str2[i-1];
    if (ch=='#'){
        if(prevCh=='#'){

        }
        else {
            out = out + ch;
        }
    }
    else{
        out = out + ch;
    }
}
console.log(out);

//v. Number of times second string appears in first
let str3 = 'YesNoYesOkYes';
let str4 = 'Yes';
let count1 = 0;
let startPos = 0;
for (;;){
    let index = str3.indexOf(str4,startPos);
    if(index>=0){
        count1++;
        startPos = index +1;
    }
    else{
        break;
    }
}
console.log(count1);

