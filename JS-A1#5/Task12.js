var str = '9#a$M%2eP';
var chart = '';
var string = '';
let newstr = '';
var rest ='';
for(i=0; i < str.length; i++){ 
    if (str[i]>='A' && str[i]<='Z') {
        string = string + str[i] + str[i];
    }
    if (str[i]>='a' && str[i]<='z') {
        string = string + str[i] + str[i];
    }
    if (str[i]>='0' && str[i]<='9') {
        string = string + str[i] + str[i] + str[i];
    }
}
console.log(string);