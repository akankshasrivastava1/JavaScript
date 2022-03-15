let str = 'I GOT A BIRTHDAY CARD';
let chart = '';
let string = '';
let ch ='';
let out ='';
let str1 = '';
for(let i=0; i < str.length; i++){ 
    let prevCh = str[i-1];
    let ch = str[i];
    if (str.charAt(i) == "A") {
        chart = "X";
        string = string + chart;
    }
    else if (str.charAt(i) == "B") {
        chart = "Y";
        string = string + chart;
    }
    else if (ch=='C'){
        out = out + ch;
    }
    else if (ch=='D'){
        out = out + ch;
    }
    else {
        chart = str.charAt(i);
        string = string + chart;
    }
    out = out+ch;
    str1 = string+out
}
console.log(string);    